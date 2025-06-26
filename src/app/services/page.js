"use client";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function Services() {
  return (
    <div className="bg-gray-200 pt-10 min-h-screen">
      {/* Services Grid */}
      <motion.section
        {...fadeIn(0)}
        className="w-full py-10 bg-white px-6 md:px-12"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Web Development",
              desc:
                "Custom websites and web apps tailored for performance, scalability, and modern user experience.",
            },
            {
              title: "Mobile App Development",
              desc:
                "Native Android & iOS, React Native, and Flutter apps for fast, reliable mobile experiences.",
            },
            {
              title: "ERP Solutions",
              desc:
                "Scalable ERP systems that streamline operations, finance, HR, inventory, and more.",
            },
            {
              title: "Enterprise Applications",
              desc:
                "Powerful apps for enterprise needs — secure, scalable, and built for performance.",
            },
            {
              title: "UI/UX Design",
              desc:
                "Intuitive, user-first design that enhances usability and delight across digital platforms.",
            },
            {
              title: "Logo & Branding",
              desc:
                "Memorable brand identity and logos that make your business stand out with confidence.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.1 * index)}
              className="p-6 rounded-xl shadow-md hover:shadow-xl border border-purple-100 transition bg-white"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        {...fadeIn(0.6)}
        className="w-full bg-gray-100 px-6 md:px-12 py-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {[
            {
              num: "1",
              title: "Expert Team",
              desc:
                "Our team consists of skilled professionals with years of experience in delivering high-quality IT solutions.",
            },
            {
              num: "2",
              title: "Cutting-edge Technology",
              desc:
                "We leverage the latest technologies to ensure your business stays ahead of the curve.",
            },
            {
              num: "3",
              title: "Client-Centric Approach",
              desc:
                "Your satisfaction is our top priority. We work closely with you to meet your unique needs.",
            },
            {
              num: "4",
              title: "Proven Results",
              desc:
                "We have a track record of successful projects that have helped businesses grow and succeed.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              {...fadeIn(0.7 + 0.1 * index)}
              className="flex"
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-blue-600 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                {feature.num}
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
