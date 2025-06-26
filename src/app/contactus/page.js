"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url =
    "https://script.google.com/macros/s/AKfycby8k8pAN0kiR4uWYkEgU9R0yx6pQbjlnL8DfjsTTw1PSBhuuzcQSzMR9JhGmHiFl355/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("❌ Please fill in all fields.");
      setIsSubmitting(false);
      return;
    }

    const form = new FormData();
    form.append("name", formData.name.trim());
    form.append("email", formData.email.trim());
    form.append("message", formData.message.trim());

    try {
      const response = await fetch(url, { method: "POST", body: form });

      const responseText = await response.text();
      try {
        const result = JSON.parse(responseText);
        if (result.success) {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("❌ " + (result.message || "Something went wrong."));
        }
      } catch {
        if (response.ok) {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setStatus("❌ Unexpected server response.");
        }
      }
    } catch (err) {
      setStatus("❌ Network or CORS error. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setStatus("");
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto"
        initial="initial"
        animate="animate"
      >
        {/* Header Section */}
        <motion.div {...fadeIn(0)} className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Drop us a message and we’ll get back to you soon.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          {...fadeIn(0.2)}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
            Send Us a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Full Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                disabled={isSubmitting}
                placeholder="Your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              <button
                type="button"
                onClick={resetForm}
                disabled={isSubmitting}
                className="sm:w-auto px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                Clear Form
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <motion.div
              {...fadeIn(0.4)}
              className={`mt-6 p-4 rounded-lg text-center font-medium ${
                status.includes("✅")
                  ? "bg-green-100 text-green-800"
                  : status.includes("❌")
                  ? "bg-red-100 text-red-800"
                  : "bg-blue-100 text-blue-800"
              }`}
            >
              {status}
            </motion.div>
          )}
        </motion.div>

        {/* Footer Note */}
        <motion.div {...fadeIn(0.6)} className="mt-12 text-center">
          <p className="text-gray-600">
            <span className="font-medium">Need urgent help?</span> We'll get back to you within 24 hours.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
