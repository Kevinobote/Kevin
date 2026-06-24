import { useState } from 'react';
import { Mail, MapPin, ArrowRight, Calendar, AlertCircle, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_BASE_URL } from '../config';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [notification, setNotification] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        setNotification({ type: 'success', text: 'Message sent successfully!' });
      } else {
        setNotification({ type: 'error', text: data.error || 'Failed to send message.' });
      }
    } catch {
      setNotification({ type: 'error', text: 'Failed to send message. Please try again.' });
    }
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900 pt-24 pb-20">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 right-4 z-50 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center gap-3 max-w-sm"
          >
            <AlertCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
            <p className="text-sm text-slate-700 dark:text-slate-200">{notification.text}</p>
            <button onClick={() => setNotification(null)} className="text-slate-400 hover:text-slate-600">
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-900 dark:text-white tracking-tight mb-4">
            Contact
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
            Interested in collaboration, research partnerships, or consulting? I typically reply within one business day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 text-sm rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-teal-500 outline-none resize-y"
                placeholder="Tell me about your project or question..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy-900 dark:bg-white text-white dark:text-navy-900 px-5 py-3 text-sm font-medium hover:bg-navy-800 dark:hover:bg-slate-100 transition-colors"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 space-y-4">
              <h3 className="font-semibold text-navy-900 dark:text-white">Direct Contact</h3>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail className="h-4 w-4 text-teal-600" />
                <a href="mailto:kevinobote49@gmail.com" className="text-sm hover:text-teal-700">kevinobote49@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MessageCircle className="h-4 w-4 text-teal-600" />
                <a href="https://wa.me/254700885748" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-teal-700">WhatsApp: +254 700 885 748</a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin className="h-4 w-4 text-teal-600" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50">
              <h3 className="font-semibold text-navy-900 dark:text-white mb-3">Schedule a Call</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                Prefer a conversation? Book a 15-minute introductory call.
              </p>
              <a
                href="https://calendar.app.google/UszKGyodyaZDg2K46"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800"
              >
                <Calendar className="h-4 w-4" />
                Book on Google Calendar
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
