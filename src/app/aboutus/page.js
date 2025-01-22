export default function AboutUs() {
    return (
      <div className="bg-gray-200 pt-20 px-8">
        <section className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-6xl md:text-5xl font-bold mb-8 text-gray-800">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
              At <strong>ByteLogic</strong>, we specialize in delivering innovative IT solutions that transform ideas into impactful realities. 
              We are a team of passionate professionals dedicated to empowering businesses with cutting-edge technology.
            </p>
          </div>
  
          {/* Image Content */}
          <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0">
            <img 
              src="./about-us-1-1.png" 
              alt="About Us Illustration" 
              className="rounded-lg shadow-lg w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
            />
            
          </div>
          
          </section>
          <br/>

          <section className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Image Content */}
            <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0">
              <img 
                src="./who1.png" 
                alt="Mission Illustration" 
                className="rounded-lg shadow-lg w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
              />
          </div>
          
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Who we are ?</h2>
              <p className="text-lg text-gray-700">
              At ByteLogic, we are a team of visionary professionals driven by a shared passion for technology and innovation. Our goal is to empower businesses with cutting-edge solutions that solve real-world challenges and unlock new opportunities for growth.

              </p>
            </div>
        </section>
        <br/>
           {/* Our Mission Section */}
           
        <section className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-700">
                Our mission is to create innovative IT solutions that help businesses thrive in an ever-evolving digital landscape. 
                We aim to provide cutting-edge technology that enables our clients to reach new heights, ensuring they remain competitive and future-proof.
              </p>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0">
              <img 
                src="./mission1.png" 
                alt="Mission Illustration" 
                className="rounded-lg shadow-lg w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
              />
          </div>
          </section>
          <br/>

          <section className="container mx-auto flex flex-col md:flex-row items-center">
            {/* Image Content */}
            <div className="md:w-1/2 flex justify-center items-start mt-8 md:mt-0">
              <img 
                src="./vision2.png" 
                alt="Mission Illustration" 
                className="rounded-lg shadow-lg w-1/2 h-auto transform transition-transform duration-500 ease-in-out hover:translate-x-4 hover:translate-y-4 hover:scale-105"
              />
          </div>
          
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-700">
              Our vision is to be a global leader in IT solutions, recognized for our creativity, reliability, and customer-centric approach. We aim to bridge the gap between technology and businesses, fostering a world where digital innovation becomes the foundation for success and progress.


              </p>
            </div>
        </section>
        <br/>


       
      </div>
    );
  }
  