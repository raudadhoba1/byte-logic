export default function Services() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-purple-300 pt-20 px-8">
      {/* Header Section */}
      <section className="container mx-auto text-center mb-16">
        <h1 className="text-6xl md:text-5xl font-extrabold mb-8 text-[#3B1E54]">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Explore the diverse range of IT services we offer to help businesses thrive in today's fast-paced digital world.
        </p>
      </section>

      {/* Services Cards Section */}
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Web Development */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-laptop-code text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Web Development</h3>
            <p className="text-gray-700">
              Build responsive, scalable, and visually appealing websites tailored to your unique business needs.
            </p>
          </div>

          {/* Service 2: Mobile App Development */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-mobile-alt text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mobile App Development</h3>
            <p className="text-gray-700">
              Create user-friendly mobile applications with seamless functionality and cutting-edge technology.
            </p>
          </div>

          {/* Service 3: Cloud Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-cloud text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cloud Solutions</h3>
            <p className="text-gray-700">
              Leverage the power of the cloud to enhance your business's efficiency, scalability, and security.
            </p>
          </div>

          {/* Service 4: Artificial Intelligence */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-brain text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Artificial Intelligence</h3>
            <p className="text-gray-700">
              Integrate AI-driven solutions to automate processes, gain insights, and improve decision-making.
            </p>
          </div>

          {/* Service 5: Cybersecurity */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-shield-alt text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cybersecurity</h3>
            <p className="text-gray-700">
              Protect your business from cyber threats with advanced security measures and risk assessments.
            </p>
          </div>

          {/* Service 6: Data Analytics */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-chart-line text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Analytics</h3>
            <p className="text-gray-700">
              Unlock the potential of your data with powerful analytics and insights to drive growth.
            </p>
          </div>

          {/* Service 7: DevOps */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-cogs text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">DevOps</h3>
            <p className="text-gray-700">
              Streamline your development and operations processes with efficient DevOps strategies.
            </p>
          </div>

          {/* Service 8: E-commerce Solutions */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-shopping-cart text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">E-commerce Solutions</h3>
            <p className="text-gray-700">
              Build robust and feature-rich e-commerce platforms to grow your online business.
            </p>
          </div>

          {/* Service 9: Blockchain Development */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105">
            <i className="fas fa-cogs text-purple-600 w-20 h-20 mb-4 mx-auto"></i>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Blockchain Development</h3>
            <p className="text-gray-700">
              Innovate with blockchain technology for secure and transparent digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-[#8a6ba5] container mx-auto mt-16 pt-8 px-10 rounded-xl shadow-lg">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feature 1 */}
          <div className="flex items-center hover:bg-white hover:shadow-xl transition duration-300 p-6 rounded-lg group">
            <div className="bg-[#3B1E54] text-white rounded-full h-16 w-16 flex items-center justify-center transition-transform transform group-hover:scale-110">
              <span className="text-2xl font-bold">1</span>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-600">Expert Team</h3>
              <p className="text-gray-200 group-hover:text-gray-700">
                Our team consists of skilled professionals with years of experience in delivering high-quality IT solutions.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center hover:bg-white hover:shadow-xl transition duration-300 p-6 rounded-lg group">
            <div className="bg-[#3B1E54] text-white rounded-full h-16 w-16 flex items-center justify-center transition-transform transform group-hover:scale-110">
              <span className="text-2xl font-bold">2</span>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-600">Cutting-edge Technology</h3>
              <p className="text-gray-200 group-hover:text-gray-700">
                We leverage the latest technologies to ensure your business stays ahead of the curve.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center hover:bg-white hover:shadow-xl transition duration-300 p-6 rounded-lg group">
            <div className="bg-[#3B1E54] text-white rounded-full h-16 w-16 flex items-center justify-center transition-transform transform group-hover:scale-110">
              <span className="text-2xl font-bold">3</span>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-600">Client-Centric Approach</h3>
              <p className="text-gray-200 group-hover:text-gray-700">
                Your satisfaction is our top priority. We work closely with you to meet your unique needs.
              </p>
            </div>
            <br/>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center hover:bg-white hover:shadow-xl transition duration-300 p-6 rounded-lg group">
            <div className="bg-[#3B1E54] text-white rounded-full h-16 w-16 flex items-center justify-center transition-transform transform group-hover:scale-110">
              <span className="text-2xl font-bold">4</span>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-purple-600">Proven Results</h3>
              <p className="text-gray-200 group-hover:text-gray-700">
                We have a track record of successful projects that have helped businesses grow and succeed.
              </p>
            </div>
          </div>
          <br/>
        </div>
      </section>

      <br />
    </div>
  );
}
