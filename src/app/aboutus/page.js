"use client"
import {DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function AboutUs() {
  return (
    <div className="bg-[#9B7EBD]">

      <section className="relative bg-[#D4BEE4] py-16 px-10 mt-16">
      <section className="relative rounded-lg bg-[#ffffff] py-13 px-8 mt-13">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto pt-16 px-8">
          
          
          <div className="relative z-10 container mx-auto text-left md:w-1/2">
            <h1 className="text-6xl font-extrabold mb-6 text-[#3B1E54] tracking-tight">
              About Us
            </h1>
            <p className="text-lg text-[#3B1E54] mb-4 max-w-lg">
              At <strong>ByteLogic</strong>, we specialize in delivering innovative IT solutions that transform ideas into impactful realities.
              We are a team of passionate professionals dedicated to empowering businesses with cutting-edge technology.
            </p>
            <p className="text-lg text-white max-w-lg">
              With a focus on excellence, we build custom solutions that drive success. Whether you're a startup or an enterprise, we're here to help your business grow.
            </p>
          </div>

       
          <div className="md:w-1/2 flex flex-col md:flex-row justify-center gap-8 mt-8 md:mt-0">
            
           
            <div className="flex-1">
              <img
                src="./au.png" 
                alt="About Us Illustration"
                className="rounded-lg shadow-xl w-8/12 h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:scale-105"
              />
            </div>
          </div>
        </div>
        <br/>
      </section>
      </section>

      <br/>

      {/* Who We Are Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center ">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
        <DotLottieReact
      src="https://lottie.host/cea6a123-bfc9-4e5c-b54c-cec2cdd2908f/RUi1KjqWZf.lottie"
      loop
      autoplay
    />
        </div>

        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-4xl font-bold mb-6">Who We Are?</h2>
          <p className="text-lg">
            At ByteLogic, we are a team of visionary professionals driven by a shared passion for technology and innovation. Our goal is to empower businesses with cutting-edge solutions that solve real-world challenges and unlock new opportunities for growth.
          </p>
        </div>
      </section>

      <br/>

      {/* Our Mission Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            Our mission is to create innovative IT solutions that help businesses thrive in an ever-evolving digital landscape. We aim to provide cutting-edge technology that enables our clients to reach new heights, ensuring they remain competitive and future-proof.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
        <DotLottieReact
           src="https://lottie.host/1d8f594f-39a2-4a6a-bad0-e1f69489c970/wkPDKjMJc5.lottie"
           loop
            autoplay
         />
        </div>
      </section>

      <br/>

      {/* Our Vision Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center ">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
           <DotLottieReact
                src="https://lottie.host/99bc964c-d126-4370-bbbe-2a923ae1d310/OxYIom1rJ5.lottie"
                loop
                autoplay
              />
        </div>

        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg">
            Our vision is to be a global leader in IT solutions, recognized for our creativity, reliability, and customer-centric approach. We aim to bridge the gap between technology and businesses, fostering a world where digital innovation becomes the foundation for success and progress.
          </p>
        </div>
      </section>
      <br/>
    </div>

  );
}
