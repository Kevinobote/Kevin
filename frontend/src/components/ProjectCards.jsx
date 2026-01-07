import { useState, Fragment } from "react";
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import Heading from "./Heading.jsx";
import { offerings } from "../constants/index.js";
import { Arrow, ClipPath, icon1, icon2 } from "../assets/index.js";
import { CardLight } from "./CardLight.jsx";

// Projects array (sourced from Projects.jsx)
const projects = [
    {
        id: 1,
        title: "Sema",
        description: "This project aims to build a comprehensive system capable of transcribing audio into text in multiple languages and conducting sentiment analysis on the transcribed text.",
        link: "https://github.com/Kevinobote/Sema",
        iconUrl: icon1,
        tags: ["International", "Growth", "Strategy"]
    },
    {
        id: 2,
        title: "Wave Energy Farm Optimization",
        description: "Wave energy is a promising renewable energy source that captures the energy from ocean waves to generate electricity.",
        link: "https://github.com/Kevinobote/WEC",
        iconUrl: icon2,
        tags: ["Machine Learning", "Energy", "Optimization"]
    },
    {
        id: 3,
        title: "Predicting House Price",
        description: "Predicting house prices using a combination of Linear Regression and Random Forest models. The approach includes data preprocessing, model training, evaluation, and preparing the final submission.",
        link: "https://github.com/Kevinobote/House-Price/blob/main/README.MD",
        iconUrl: icon1,
        tags: ["Machine Learning", "Energy", "Optimization"]
    },
    {
        id: 4,
        title: "Due-Diligence-Project",
        description: "This project aims to demonstrate various data manipulation and analysis tasks using Python. It involves working with Excel datasets, cleaning and organizing data, web scraping, and performing text analysis tasks such as topic modeling and sentiment analysis. Additionally, it includes automating email tasks and converting image files to Excel format.",
        link: "https://github.com/Kevinobote/Due-Diligence-Project/blob/main/README.md",
        iconUrl: icon2,
        tags: ["Machine Learning", "Energy", "Optimization"]
    },
    {
        id: 5,
        title: "Well-being Index of Galaxies",
        description: "The project aims to determine the demographic and socio-economic determinants of the well-being index of galaxies over a period of time and predict future well-being values using machine learning techniques.",
        link: "https://github.com/Kevinobote/Well-being-index-of-Galaxies",
        iconUrl: icon1,
        tags: ["Machine Learning", "Energy", "Optimization"]
    }
];

// Map offering IDs to their respective images
const offeringImages = {
    "0": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d", // therapy / counselling
    "1": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca", // trauma / reflection / healing
    "2": "https://images.unsplash.com/photo-1580281658629-5a1a0c1a3d44", // psychiatric consultation
    "3": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf", // assessment / professional discussion
    "4": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac", // community / MHPSS programs
};


const ProjectCard = ({ offering, onClick }) => {
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
    // If this offering is a project, render a project-specific modal content
    if (offering && (offering.description || offering.link || offering.tags)) {
        const lines = [];
        if (offering.title) lines.push(offering.title);
        if (offering.description) lines.push(offering.description);
        if (offering.tags && offering.tags.length) {
            lines.push("Tags:");
            offering.tags.forEach((t) => lines.push(`• ${t}`));
        }
        if (offering.link) lines.push(`Link: ${offering.link}`);
        return lines;
    }

    const descriptionMap = {
        "0": [
            "Therapeutic & Counselling Services",
            "We provide a full spectrum of therapy options designed to support mental, emotional, and social well-being across individuals and families.",
            "Our services include:",
            "• Individual Psychotherapy",
            "• Group Counselling",
            "• Family & Marriage Counseling",
            "• Couples Counselling",
            "• Anger Management Programs",
            "• Yoga, Relaxation, & Breathing Therapy",
            "• Therapeutic Massage",
            "• Psycho-education Sessions, including Casariya tea-time community talks",
            "Our therapists apply practical, culturally grounded approaches that promote resilience, healing, and balance."
        ],

        "1": [
            "Trauma-Informed Care",
            "Recognizing the impact of conflict, displacement, and loss across Somali communities, MMHCTI delivers specialized trauma-responsive care.",
            "We support individuals experiencing:",
            "• Post-Traumatic Stress Disorder (PTSD)",
            "• Domestic and Gender-Based Violence–related trauma",
            "• Adjustment and Stress Disorders",
            "• Relationship and Family Difficulties",
            "• Sleep and Anxiety-related Problems",
            "• Dissociative and Somatic Symptom Disorders",
            "Our trauma care model prioritizes safety, empowerment, dignity, and long-term recovery."
        ],

        "2": [
            "Psychiatric Consultation & Medication Management",
            "Our psychiatric team provides comprehensive clinical evaluations, diagnosis, and medication management for clients who require medical support alongside therapy.",
            "We emphasize careful assessment, continuous monitoring, and collaborative care planning to ensure treatment remains safe, effective, and personalized."
        ],

        "3": [
            "Psychological Assessments",
            "We conduct culturally and linguistically appropriate psychological assessments to guide accurate diagnosis and treatment planning.",
            "Assessment areas include:",
            "• Anxiety and Mood Disorders",
            "• OCD and Obsessive Behaviours",
            "• Personality Disorders",
            "• Psychotic Disorders",
            "• Addiction Disorders",
            "• ADHD & Conduct Disorders",
            "• Stress, Relationship, and Divorce-related Concerns",
            "• Emotional and Behavioural Difficulties",
            "These assessments support informed clinical decisions and long-term care."
        ],

        "4": [
            "MHPSS Community Programs",
            "MMHCTI extends mental health support beyond clinical settings through Mental Health and Psychosocial Support (MHPSS) community programs.",
            "Our initiatives include:",
            "• Community awareness and prevention campaigns",
            "• Psycho-education and peer support groups",
            "• Programs integrating mental health with peace-building and social cohesion",
            "• Capacity-building for local leaders, youth, and women's groups",
            "• Partnerships with NGOs, government agencies, and community organizations",
            "Our goal is to foster resilient, informed, and mentally healthy communities."
        ]
    };

    return descriptionMap[offering.id] || [
        offering.text || offering.title,
        "This service is delivered using evidence-based, culturally sensitive approaches tailored to community needs."
    ];
};

const ProjectModal = ({ isOpen, setIsOpen, offering }) => {
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

                            <div className="flex justify-end gap-3">
                                {offering.link && (
                                    <a
                                        href={offering.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 text-base font-bold text-white bg-gray-700 hover:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105"
                                    >
                                        View Project
                                    </a>
                                )}

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

const ProjectCards = () => {
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
                    className="md:max-w-md lg:max-w-3xl mx-auto text-center mb-16"
                    title={
                        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    }
                />

                <div className="flex flex-wrap justify-center gap-8 mb-10">
                    {offerings.map((off, idx) => {
                        // Merge projects array into the offering cards when available
                        const p = projects[idx];
                        const item = p
                            ? {
                                  id: String(p.id),
                                  title: p.title,
                                  text: p.description && p.description.length > 140 ? p.description.slice(0, 140) + '…' : p.description,
                                  backgroundUrl: off.backgroundUrl || "/images/card-1.svg",
                                  iconUrl: p.iconUrl || off.iconUrl || (idx % 2 === 0 ? icon1 : icon2),
                                  imageUrl: off.imageUrl,
                                  link: p.link,
                                  tags: p.tags,
                                  description: p.description,
                                  light: off.light || false,
                              }
                            : off;

                        return (
                            <div key={item.id || off.id} className="transform transition-all duration-500 hover:scale-[1.02]">
                                <ProjectCard offering={item} onClick={() => handleOfferingClick(item)} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {selectedOffering && (
                <ProjectModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    offering={selectedOffering}
                />
            )}
        </section>
    );
};

export default ProjectCards;