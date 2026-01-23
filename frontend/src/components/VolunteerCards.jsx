import { useState, Fragment } from "react";
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import Heading from "./Heading.jsx";
import { offerings } from "../constants/index.js";
import { Arrow, ClipPath, icon1, icon2 } from "../assets/index.js";
import { CardLight } from "./CardLight.jsx";

// Volunteer experiences (sourced from volunteer.jsx)
const volunteer_experiences = [
    {
        id: "0",
        role: "Data Analyst Path Lead",
        company: "Genesys Tech Hub",
        duration: "March 2024 - Present",
        startDate: "2024",
        achievements: [
            "Prepared Data Analysis Curriculum.",
            "Coordinated with mentors for tutoring.",
            "Mentored data analysis students on data analysis trends and practices.",
        ],
    },
    {
        id: "1",
        role: "Web Development Mentor",
        company: "Genesys Tech Hub",
        duration: "March 2022 - October 2023",
        startDate: "2022",
        achievements: [
            "Tutored web development track.",
            "Mentored web development students on web development trends.",
        ],
    },
    {
        id: "2",
        role: "Red Cross Volunteer",
        company: "Red Cross - Kenya",
        duration: "August 2019 - Present",
        startDate: "2019",
        achievements: [
            "Participated in emergency response operations during the COVID-19 pandemic.",
            "Delivered educational mentorship and organized community outreach programs.",
            "Certified in First Aid through the Red Cross Foundation.",
        ],
    },
].sort((a, b) => parseInt(b.startDate) - parseInt(a.startDate));

// Map offering IDs to their respective images
const offeringImages = {
    "0": "https://images.unsplash.com/photo-1551288049-bebda4e38f71", // data analysis / technology
    "1": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // web development / coding
    "2": "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca", // red cross / humanitarian work
};


const VolunteerCard = ({ offering, onClick }) => {
    return (
        <div
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] group transition-transform duration-300 hover:translate-y-[-4px] cursor-pointer"
            style={{
                backgroundImage: `url(${offering.backgroundUrl})`,
            }}
            onClick={onClick}
        >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5 text-[var(--color-teal-dark)] dark:text-n-1 font-bold transition-colors duration-300 group-hover:text-[var(--color-teal-primary)]">
                    {offering.title}
                </h5>
                <p className="body-2 mb-6 text-[var(--color-gray-dark)] dark:text-n-3 group-hover:text-[var(--color-black-100)] dark:group-hover:text-n-1 transition-colors duration-300 font-medium">
                    {offering.text}
                </p>
                <div className="flex items-center mt-auto">
                    <img
                        src={offering.iconUrl}
                        width={48}
                        height={48}
                        alt={offering.title}
                        className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="ml-auto flex items-center">
                        <span className="font-code text-xs font-bold text-[var(--color-teal-primary)] dark:text-n-1 uppercase tracking-wider transition-colors duration-300 group-hover:text-[var(--color-gold-primary)]">
                            Learn more
                        </span>
                        <Arrow className="text-[var(--color-teal-primary)] dark:text-n-1 ml-2 duration-300 group-hover:text-[var(--color-gold-primary)] group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            {offering.light && <CardLight />}

            <div
                className="absolute inset-0.5 bg-transparent dark:bg-transparent transition-colors duration-300 group-hover:bg-white/60 dark:group-hover:bg-n-8/80 group-hover:backdrop-blur-sm"
                style={{ clipPath: "url(#benefits)" }}
            >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {offering.imageUrl && (
                        <img
                            src={offering.imageUrl}
                            width={380}
                            height={362}
                            alt={offering.title}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-teal-primary)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <ClipPath />
        </div>
    );
};

const generateDetailedDescription = (offering) => {
    // If this offering comes from volunteer_experiences, render a volunteer-specific modal
    if (offering && (offering.achievements || offering.company)) {
        const lines = [];
        if (offering.title) lines.push(offering.title);
        if (offering.company) lines.push(`${offering.company} — ${offering.duration || ""}`);
        if (offering.achievements && offering.achievements.length) {
            lines.push("Key achievements:");
            offering.achievements.forEach((a) => lines.push(`• ${a}`));
        }
        return lines;
    }

    const descriptionMap = {
        "0": [
            "Data Analyst Path Lead at Genesys Tech Hub",
            "Leading the data analysis curriculum development and student mentorship at Genesys Tech Hub.",
            "Key Responsibilities:",
            "• Prepared comprehensive Data Analysis Curriculum",
            "• Coordinated with mentors for effective tutoring sessions",
            "• Mentored data analysis students on current industry trends and best practices",
            "This role demonstrates leadership in education technology and commitment to empowering the next generation of data professionals with practical skills and knowledge."
        ],

        "1": [
            "Web Development Mentor at Genesys Tech Hub",
            "Provided mentorship and guidance to aspiring web developers, helping them navigate the dynamic world of web technologies.",
            "Key Contributions:",
            "• Tutored students in the web development track",
            "• Mentored web development students on emerging web development trends",
            "• Shared practical insights and industry best practices",
            "This experience showcases dedication to technical education and passion for helping students build strong foundations in web development."
        ],

        "2": [
            "Red Cross Volunteer",
            "Active volunteer with the Kenya Red Cross, contributing to humanitarian efforts and community service.",
            "Key Achievements:",
            "• Participated in emergency response operations during the COVID-19 pandemic",
            "• Delivered educational mentorship and organized community outreach programs",
            "• Certified in First Aid through the Red Cross Foundation",
            "This volunteer work demonstrates commitment to public service, community welfare, and making a meaningful impact during critical times."
        ]
    };

    return descriptionMap[offering.id] || [
        offering.text || offering.title,
        "This service is delivered using evidence-based, culturally sensitive approaches tailored to community needs."
    ];
};

const VolunteerModal = ({ isOpen, setIsOpen, offering }) => {
    const imageUrl = offeringImages[offering.id] || offering.imageUrl || "/path/to/default-image.jpg";
    const detailedDescription = generateDetailedDescription(offering);

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 flex items-center justify-center"
                onClose={() => setIsOpen(false)}
            >
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gradient-to-br from-[var(--color-black-100)]/90 via-[var(--color-black-200)]/80 to-[var(--color-teal-dark)]/30 backdrop-blur-lg" />
                </TransitionChild>

                <div className="relative flex w-full max-w-4xl p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95 translate-y-4"
                        enterTo="opacity-100 scale-100 translate-y-0"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100 translate-y-0"
                        leaveTo="opacity-0 scale-95 translate-y-4"
                    >
                        <DialogPanel className="relative w-full max-w-4xl max-h-[90vh] overflow-auto rounded-2xl bg-gradient-to-br from-white to-[var(--color-white-50)] dark:from-[var(--color-black-200)] dark:to-[var(--color-black-100)] p-8 shadow-2xl transition-all backdrop-blur-md border-2 border-[var(--color-teal-primary)]/20 text-gray-900 dark:text-gray-100">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-6 top-6 p-2 rounded-full bg-gradient-to-br from-white to-[var(--color-white-50)] dark:from-[var(--color-black-200)] dark:to-[var(--color-black-100)] shadow-lg text-[var(--color-teal-dark)] dark:text-[var(--color-teal-light)] hover:text-[var(--color-gold-primary)] hover:scale-110 transition-all duration-200 border border-[var(--color-teal-primary)]/20 z-10"
                            >
                                <div className="h-6 w-6 flex items-center justify-center font-bold text-lg">×</div>
                            </button>

                            <DialogTitle as="h3" className="text-3xl font-bold text-[var(--color-teal-dark)] dark:text-[var(--color-teal-light)] mb-6 pr-16 flex items-center">
                                <div className="p-3 mr-4 bg-gradient-to-br from-[var(--color-teal-primary)]/20 to-[var(--color-teal-dark)]/20 rounded-xl">
                                    <img src={offering.iconUrl} alt={offering.title} className="w-10 h-10" />
                                </div>
                                        <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                                            {offering.title}
                                        </span>
                            </DialogTitle>

                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-teal-primary)] via-40% to-transparent mb-6">
                                <div className="h-full w-24 mx-auto bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-dark)] rounded-full"></div>
                            </div>

                            {/* Image Container - Compact height */}
                            <div className="relative w-full overflow-hidden rounded-2xl mb-6 shadow-2xl border-2 border-[var(--color-teal-primary)]/20 h-64">
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal-primary)]/20 to-transparent z-10"></div>
                                <img
                                    src={imageUrl}
                                    alt={offering.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <Description as="div" className="text-[var(--color-gray-dark)] dark:text-[var(--color-white-50)] mb-8 space-y-6">
                                {detailedDescription.map((paragraph, index) => (
                                    index === 0 ? (
                                        <h2 key={index} className="text-2xl font-bold text-[var(--color-teal-dark)] dark:text-[var(--color-teal-light)] bg-gradient-to-r from-[var(--color-teal-primary)]/10 to-transparent p-4 rounded-lg">
                                            {paragraph}
                                        </h2>
                                    ) : paragraph.includes("•") ? (
                                        <div key={index} className="pl-6 border-l-2 border-[var(--color-teal-primary)]/30">
                                            <p className="text-base font-medium text-[var(--color-gray-dark)] dark:text-[var(--color-white-50)]">
                                                {paragraph}
                                            </p>
                                        </div>
                                    ) : (
                                        <p key={index} className="text-lg leading-relaxed text-[var(--color-black-100)] dark:text-[var(--color-white-50)] font-medium">
                                            {paragraph}
                                        </p>
                                    )
                                ))}
                            </Description>

                            <div className="flex justify-end">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 text-base font-bold text-white bg-gradient-to-r from-[var(--color-teal-primary)] to-[var(--color-teal-dark)] hover:from-[var(--color-teal-dark)] hover:to-[var(--color-teal-primary)] rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                                >
                                    Close
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
};

const VolunteerCards = () => {
    const [selectedOffering, setSelectedOffering] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOfferingClick = (offering) => {
        setSelectedOffering(offering);
        setIsModalOpen(true);
    };

    return (
        <section id="what-we-offer" className="relative py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-teal-primary)]/5 via-white/20 to-[var(--color-gold-primary)]/5 dark:from-[var(--color-teal-dark)]/10 dark:via-[var(--color-black-200)]/20 dark:to-[var(--color-gold-dark)]/5"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,var(--color-teal-primary)/10,transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_20%,var(--color-teal-light)/5,transparent_40%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,var(--color-gold-primary)/10,transparent_40%)] dark:bg-[radial-gradient(circle_at_70%_80%,var(--color-gold-dark)/5,transparent_40%)]"></div>

            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[var(--color-teal-primary)]/20 to-[var(--color-teal-light)]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-[var(--color-gold-primary)]/15 to-[var(--color-gold-dark)]/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-teal-primary)/5_1px,transparent_1px),linear-gradient(to_bottom,var(--color-teal-primary)/5_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

            <div className="container relative z-10">
                <Heading
                    className="md:max-w-md lg:max-w-3xl mx-auto text-center mb-16 pt-8"
                    title={
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Volunteer Experiences & Community Work
                        </span>
                    }
                />

                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    {offerings.map((off, idx) => {
                        // If we have a matching volunteer experience, merge its details into the card
                        const v = volunteer_experiences[idx];
                        const item = v
                            ? {
                                  id: String(idx),
                                  title: `${v.role} — ${v.company}`,
                                  text: v.achievements && v.achievements.length ? v.achievements[0] : v.duration,
                                  backgroundUrl: off.backgroundUrl || "/images/card-1.svg",
                                  iconUrl: off.iconUrl || (idx % 2 === 0 ? icon1 : icon2),
                                  imageUrl: offeringImages[v.id] || off.imageUrl,
                                  achievements: v.achievements,
                                  company: v.company,
                                  duration: v.duration,
                                  light: off.light || false,
                              }
                            : off;

                        return (
                            <div key={item.id || off.id} className="transform transition-all duration-500 hover:scale-[1.02]">
                                <VolunteerCard offering={item} onClick={() => handleOfferingClick(item)} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedOffering && (
                <VolunteerModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    offering={selectedOffering}
                />
            )}
        </section>
    );
};

export default VolunteerCards;