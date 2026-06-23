import { useState } from 'react';
import { Mail, Phone, MapPin, User, Building, MessageSquare, ArrowRight, Clock, Route, MessageCircle, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { kevin } from '../assets';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState([]);

  const contactInfo = {
    email: "kevinobote49@gmail.com",
    phone: "+254 700 885748",
    address: "Nairobi, Kenya",
  };

  const references = [
    {
      name: "Dr. Benjamin Kikwai",
      title: "Lecturer : Pure Mathematics",
      company: "Machakos University",
      contact: "+254 000 000 000"
    },
    {
      name: "Dr. Evans Omondi",
      title: "Associate Research Scientist",
      company: "APHRC, Nairobi Kenya",
      contact: "+254 000 000 000"
    }
  ];

  const addError = (message) => {
    const newError = { id: Date.now(), message };
    setErrors(prev => [...prev, newError]);
    setTimeout(() => removeError(newError.id), 5000);
  };

  const removeError = (id) => {
    setErrors(prev => prev.filter(err => err.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        addError('Message sent successfully!');
      } else {
        addError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      addError('Failed to send message. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <>
      {/* Error/Success Popups */}
      <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 max-w-sm">
        <AnimatePresence>
          {errors.map((error) => (
            <motion.div
              key={error.id}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.95 }}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 flex items-start gap-3"
            >
              <AlertCircle className="h-5 w-5 text-slate-700 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 flex-1">{error.message}</p>
              <button
                onClick={() => removeError(error.id)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close notification"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <section id="contact" className="w-full py-20 sm:py-24 lg:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden ring-1 ring-black/10 bg-slate-900 rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1600&q=80"
                alt="Abstract background"
                className="h-full w-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Form Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] text-slate-500">Kevin Obote</p>
                        <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                          Have a question?
                        </h3>
                      </div>
                      <div className="h-9 w-9 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                        <MessageSquare className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div>
                        <label htmlFor="ct-name" className="block text-xs text-slate-600">
                          Your name<span className="text-slate-400"> *</span>
                        </label>
                        <input
                          id="ct-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-slate-900 outline-none bg-white placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="ct-email" className="block text-xs text-slate-600">
                          E-mail<span className="text-slate-400"> *</span>
                        </label>
                        <div className="relative mt-1">
                          <Mail className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                          <input
                            id="ct-email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-slate-900 outline-none bg-white placeholder:text-slate-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="ct-msg" className="block text-xs text-slate-600">
                          Message
                        </label>
                        <textarea
                          id="ct-msg"
                          name="message"
                          rows={4}
                          placeholder="How can I help?"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="mt-1 w-full resize-y px-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-slate-900 outline-none bg-white placeholder:text-slate-400"
                        />
                      </div>

                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="w-full inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-3 text-sm font-medium hover:bg-slate-800 transition-colors"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>

                      <p className="text-[11px] text-slate-500">
                        By submitting, you agree to our Terms and Privacy Policy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Copy + Highlights */}
                <div className="lg:col-span-7">
                  <h2 className="text-white tracking-tight text-5xl sm:text-6xl font-semibold leading-[1.05]">
                    Let's talk.
                  </h2>
                  <p className="text-base sm:text-lg max-w-2xl text-slate-200 mt-4">
                    Tell me about your project, consulting, development, or collaboration opportunities. I reply within one business day.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Quick response</p>
                        <p className="text-slate-300 text-xs">Most messages receive a reply in under 24h.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-emerald-300">
                        <Route className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">Clear next steps</p>
                        <p className="text-slate-300 text-xs">I'll follow up with a concise plan and timeline.</p>
                      </div>
                    </div>
                  </div>

                  {/* Direct Contact Card */}
                  <div className="mt-7">
                    <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
                      <img
                        src={kevin}
                        alt="Kevin Obote"
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-[11px] text-slate-500 leading-none">Available for</p>
                        <p className="text-slate-900 font-medium tracking-tight truncate">Kevin Obote</p>
                      </div>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="ml-1 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 text-xs font-medium hover:bg-slate-800 transition-colors"
                      >
                        Ask directly
                        <MessageCircle className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3 text-slate-200">
                      <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center">
                        <Phone className="h-4 w-4" />
                      </div>
                      <span className="text-sm">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-200">
                      <div className="h-8 w-8 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <span className="text-sm">{contactInfo.address}</span>
                    </div>
                  </div>

                  {/* References */}
                  <div className="mt-8">
                    <h3 className="text-white font-semibold text-lg mb-4">References</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {references.map((ref, index) => (
                        <div
                          key={index}
                          className="rounded-xl bg-white/10 backdrop-blur ring-1 ring-white/15 p-4"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <User className="h-4 w-4 text-emerald-300" />
                            <span className="font-medium text-white text-sm">{ref.name}</span>
                          </div>
                          <div className="space-y-1 text-xs text-slate-300">
                            <div className="flex items-center gap-2">
                              <Building className="h-3 w-3" />
                              <span>{ref.title}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Building className="h-3 w-3" />
                              <span>{ref.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-3 w-3" />
                              <span>{ref.contact}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;