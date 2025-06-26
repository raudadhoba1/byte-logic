"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function ProductPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "success", "error", or "loading"
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await new Promise((res) => setTimeout(res, 1500));

      setStatus("success");
      setMessage("Thanks for signing up! We'll notify you soon.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div
      {...fadeIn(0)}
      className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-200 flex items-center justify-center px-6 py-16"
    >
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Side - Illustration or Image */}
        <div className="md:w-1/2 bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center p-12">
          {/* Placeholder SVG illustration */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 h-72 text-white"
            fill="none"
            viewBox="0 0 64 64"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <rect x="8" y="12" width="48" height="40" rx="8" ry="8" />
            <path d="M8 24h48" />
            <path d="M20 36h24" />
            <circle cx="32" cy="44" r="4" />
          </svg>
        </div>

        {/* Right Side - Content */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center md:text-left">
            Coming Soon .....
          </h1>
          <p className="text-gray-700 text-lg mb-10 text-center md:text-left max-w-md">
            We're building something exciting. Stay tuned for the launch! 
          </p>


          {message && (
            <p
              className={`mt-6 text-center md:text-left font-medium max-w-md mx-auto md:mx-0 ${
                status === "success"
                  ? "text-green-600"
                  : status === "error"
                  ? "text-red-600"
                  : "text-gray-700"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
