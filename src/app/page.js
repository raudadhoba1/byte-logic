"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function Home() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#8d31de] text-white py-24 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/assets/hero-bg.jpg)" }}
        />
        <motion.div
          className="relative z-10 container mx-auto text-center max-w-3xl flex flex-col items-center gap-6"
          {...fadeIn()}
        >
          <h1 className="text-5xl font-bold">Building Your Digital Future</h1>
          <p className="text-lg opacity-90">
            Innovative solutions for your business growth powered by technology
            and creativity.
          </p>
          <motion.a
            href="/services"
            className="bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold rounded-full hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            Discover Our Services
          </motion.a>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeIn(0.2)} className="text-4xl font-semibold mb-12">
            Why Choose Us
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            {...fadeIn(0.4)}
          >
            {[
              {
                title: "Experienced Team",
                desc: "Years of experience delivering scalable platforms.",
              },
              {
                title: "Client-Centric",
                desc: "Your goals define our priorities.",
              },
              {
                title: "Agile Delivery",
                desc: "Fast, quality-driven development process.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-6 bg-gray-100 rounded-xl shadow transform hover:-translate-y-2 hover:shadow-lg transition"
                whileHover={{ scale: 1.02 }}
                {...fadeIn(0.6 + i * 0.1)}
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
<section className="py-24 bg-gray-200">
  <div className="container mx-auto w-full px-4 md:px-10 max-w-screen-xl">
    <motion.h2 {...fadeIn(0.2)} className="text-4xl font-semibold text-center mb-12">
      Technologies We Use
    </motion.h2>

    <motion.div
      className="grid gap-12 md:grid-cols-2"
      {...fadeIn(0.4)}
    >
      {[
        {
          title: "Languages",
          items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Dart"],
        },
        {
          title: "Frameworks & Libraries",
          items: ["React", "Next.js", "Express.js", ".NET", "Spring Boot", "Tailwind CSS"],
        },
        {
          title: "Mobile Dev",
          items: ["React Native", "Flutter", "Kotlin", "Swift (iOS)", "Java (Android)"],
        },
        {
          title: "Databases",
          items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase", "SQLite"],
        },
        {
          title: "Design Tools",
          items: ["Figma", "Adobe XD", "Photoshop", "Canva", "Illustrator"],
        },
        {
          title: "DevOps & Tools",
          items: ["Git", "GitHub", "Docker", "CI/CD", "Jira", "Postman"],
        },
        {
          title: "Cloud & Hosting",
          items: ["AWS", "Google Cloud", "Azure", "Vercel", "Netlify", "Firebase"],
        },
        {
          title: "Testing & QA",
          items: ["Jest", "Selenium", "Cypress", "Postman"],
        },
      ].map((group, idx) => (
        <motion.div key={idx} {...fadeIn(0.6 + idx * 0.1)}>
          <h3 className="text-2xl font-semibold text-purple-800 mb-4 border-b border-purple-300 pb-2">
            {group.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {group.items.map((tool, j) => (
              <div
                key={j}
                className="bg-white p-4 rounded-lg shadow text-center transition hover:shadow-lg hover:scale-105"
              >
                <p className="text-purple-700 font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>


      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2 {...fadeIn(0.2)} className="text-4xl font-semibold mb-12">
            Our Process
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-10"
            {...fadeIn(0.4)}
          >
            {[
              { title: "Discover", desc: "Understand your vision." },
              { title: "Design", desc: "Craft interfaces that convert." },
              { title: "Develop", desc: "Build secure and scalable systems." },
              { title: "Deliver", desc: "Launch with continuous support." },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
                whileHover={{ scale: 1.03 }}
                {...fadeIn(0.6 + i * 0.1)}
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-800">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#f4e8ff]">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <motion.h2 {...fadeIn(0.2)} className="text-4xl font-semibold mb-12">
            What Our Clients Say
          </motion.h2>
          <motion.div
            className="space-y-8"
            {...fadeIn(0.4)}
          >
            {[
              {
                text:
                  "“Their dedication and high-quality delivery exceeded our expectations.”",
                author: "— Alex R., Founder",
              },
              {
                text:
                  "“They not only built a fantastic product but educated us through every step.”",
                author: "— Nisha K., Project Manager",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                className="bg-white p-8 rounded-lg shadow text-gray-700 italic"
                {...fadeIn(0.6 + i * 0.1)}
              >
                <p className="mb-4">{t.text}</p>
                {/* <cite className="font-semibold text-purple-800">{t.author}</cite> */}
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#3B1E54] text-white text-center">
        <motion.div {...fadeIn(0.2)}>
          <h2 className="text-3xl font-semibold mb-6">Let’s Build Something Great</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to collaborate and bring your ideas to life.
          </p>
          <motion.a
            href="/contactus"
            className="bg-yellow-500 text-gray-900 px-8 py-3 text-lg font-semibold rounded-full hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
