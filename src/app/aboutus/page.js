"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay, duration: 0.6 } },
});

export default function AboutUs() {
  return (
    <div className="bg-gray-200 pt-20 pb-20 px-6">
      <motion.h1
        {...fadeIn(0)}
        className="text-5xl md:text-6xl font-bold mb-16 text-gray-800 max-w-4xl mx-auto"
      >
        About Us
      </motion.h1>

      {/* About Us Section */}
      <motion.section
        {...fadeIn(0.1)}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20"
      >
        <div className="md:w-1/2 order-2 md:order-1 max-w-xl text-gray-700 text-lg">
          <p>
            At <strong>ByteLogic</strong>, we specialize in delivering innovative IT
            solutions that transform ideas into impactful realities. We are a team
            of passionate professionals dedicated to empowering businesses with
            cutting-edge technology.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <Image
            width={900}
            height={900}
            src="/about-us-1-1.png"
            alt="About Us Illustration"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-xl h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
          />
        </div>
      </motion.section>

      {/* Who we are Section */}
      <motion.section
        {...fadeIn(0.3)}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20"
      >
        <div className="md:w-1/2 order-1 flex justify-center">
          <Image
            width={700}
            height={700}
            src="/who1.png"
            alt="Who We Are Illustration"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 order-2 max-w-xl text-gray-700 text-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 inline-block pb-1">
            Who we are?
          </h2>
          <p>
            At ByteLogic, we are a team of visionary professionals driven by a shared
            passion for technology and innovation. Our goal is to empower businesses
            with cutting-edge solutions that solve real-world challenges and unlock
            new opportunities for growth.
          </p>
        </div>
      </motion.section>

      {/* Our Mission Section */}
      <motion.section
        {...fadeIn(0.5)}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20"
      >
        <div className="md:w-1/2 order-2 md:order-1 max-w-xl text-gray-700 text-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 inline-block pb-1">
            Our Mission
          </h2>
          <p>
            Our mission is to create innovative IT solutions that help businesses thrive
            in an ever-evolving digital landscape. We aim to provide cutting-edge
            technology that enables our clients to reach new heights, ensuring they
            remain competitive and future-proof.
          </p>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <Image
            width={700}
            height={700}
            src="/mission1.png"
            alt="Mission Illustration"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
          />
        </div>
      </motion.section>

      {/* Our Vision Section */}
      <motion.section
        {...fadeIn(0.7)}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20"
      >
        <div className="md:w-1/2 order-1 flex justify-center">
          <Image
            width={700}
            height={700}
            src="/vision2.png"
            alt="Vision Illustration"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 order-2 max-w-xl text-gray-700 text-lg">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 inline-block pb-1">
            Our Vision
          </h2>
          <p>
            Our vision is to be a global leader in IT solutions, recognized for our
            creativity, reliability, and customer-centric approach. We aim to bridge
            the gap between technology and businesses, fostering a world where digital
            innovation becomes the foundation for success and progress.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
