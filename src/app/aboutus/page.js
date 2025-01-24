export default function AboutUs() {
  return (
    <div className="bg-[#D4BEE4]">
      {/* Full-Width Section */}
      <section className="relative bg-[#9B7EBD] py-16 px-10 mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-8xl mx-auto pt-16 px-8">
          
          {/* Left Side Content */}
          <div className="relative z-10 container mx-auto text-left md:w-1/2">
            <h1 className="text-6xl font-extrabold mb-6 text-white tracking-tight">
              About Us
            </h1>
            <p className="text-lg text-white mb-4 max-w-lg">
              At <strong>ByteLogic</strong>, we specialize in delivering innovative IT solutions that transform ideas into impactful realities.
              We are a team of passionate professionals dedicated to empowering businesses with cutting-edge technology.
            </p>
            <p className="text-lg text-white max-w-lg">
              With a focus on excellence, we build custom solutions that drive success. Whether you're a startup or an enterprise, we're here to help your business grow.
            </p>
          </div>

          {/* Right Side Images */}
          <div className="md:w-1/2 flex flex-col md:flex-row justify-center gap-8 mt-8 md:mt-0">
            
            {/* First Image */}
            <div className="flex-1">
              <img
                src="./team.png" // Use your local image here
                alt="About Us Illustration"
                className="rounded-lg shadow-xl w-full h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:scale-105"
              />
            </div>

            {/* Second Image */}
            <div className="flex-1">
              <img
                src="./team.png" // Use your local image here
                alt="Team Collaboration"
                className="rounded-lg shadow-xl w-full h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <br/>

      {/* Who We Are Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center pt-20 px-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg shadow-xl">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
          <img 
            src="./who1.png" 
            alt="Mission Illustration" 
            className="rounded-xl shadow-2xl w-3/4 h-auto border-4 border-white"
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
      <section className="container mx-auto flex flex-col md:flex-row items-center pt-20 px-8 bg-gradient-to-l from-purple-500 to-purple-700 rounded-lg shadow-xl">
        <div className="md:w-1/2 text-left text-white">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg">
            Our mission is to create innovative IT solutions that help businesses thrive in an ever-evolving digital landscape. We aim to provide cutting-edge technology that enables our clients to reach new heights, ensuring they remain competitive and future-proof.
          </p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
          <img 
            src="./mission1.png" 
            alt="Mission Illustration" 
            className="rounded-xl shadow-2xl w-3/4 h-auto border-4 border-white"
          />
        </div>
      </section>

      <br/>

      {/* Our Vision Section */}
      <section className="container mx-auto flex flex-col md:flex-row items-center pt-20 px-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-xl">
        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0 transform transition-transform duration-500 ease-in-out hover:scale-105">
          <img 
            src="./vision2.png" 
            alt="Vision Illustration" 
            className="rounded-xl shadow-2xl w-3/4 h-auto border-4 border-white"
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
