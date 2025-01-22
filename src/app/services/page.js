export default function Services() {
    return (
      <div className="bg-gray-200 pt-20 px-8">
        {/* Header Section */}
        <section className="container mx-auto text-center">
          <h1 className="text-6xl md:text-5xl font-bold mb-8 text-gray-800">Our Services</h1>
          <p className="text-lg text-gray-700 mb-12">
            Explore the diverse range of IT services we offer to help businesses thrive in today's fast-paced digital world.
          </p>
        </section>
  
        {/* Services Grid */}
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Web Development</h3>
              <p className="text-gray-700">
                Build responsive, scalable, and visually appealing websites tailored to your unique business needs.
              </p>
            </div>
  
            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mobile App Development</h3>
              <p className="text-gray-700">
                Create user-friendly mobile applications with seamless functionality and cutting-edge technology.
              </p>
            </div>
  
            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cloud Solutions</h3>
              <p className="text-gray-700">
                Leverage the power of the cloud to enhance your business's efficiency, scalability, and security.
              </p>
            </div>
  
            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Artificial Intelligence</h3>
              <p className="text-gray-700">
                Integrate AI-driven solutions to automate processes, gain insights, and improve decision-making.
              </p>
            </div>
  
            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cybersecurity</h3>
              <p className="text-gray-700">
                Protect your business from cyber threats with advanced security measures and risk assessments.
              </p>
            </div>
  
            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Analytics</h3>
              <p className="text-gray-700">
                Unlock the potential of your data with powerful analytics and insights to drive growth.
              </p>
            </div>
  
            {/* Service 7 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">DevOps</h3>
              <p className="text-gray-700">
                Streamline your development and operations processes with efficient DevOps strategies.
              </p>
            </div>
  
            {/* Service 8 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">E-commerce Solutions</h3>
              <p className="text-gray-700">
                Build robust and feature-rich e-commerce platforms to grow your online business.
              </p>
            </div>
  
            {/* Service 9 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Blockchain Development</h3>
              <p className="text-gray-700">
                Innovate with blockchain technology for secure and transparent digital solutions.
              </p>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us Section */}
        <section className="container mx-auto mt-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">Expert Team</h3>
                <p className="text-gray-700">
                  Our team consists of skilled professionals with years of experience in delivering high-quality IT solutions.
                </p>
              </div>
            </div>
  
            {/* Feature 2 */}
            <div className="flex">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold">2</span>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">Cutting-edge Technology</h3>
                <p className="text-gray-700">
                  We leverage the latest technologies to ensure your business stays ahead of the curve.
                </p>
              </div>
            </div>
  
            {/* Feature 3 */}
            <div className="flex">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold">3</span>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">Client-Centric Approach</h3>
                <p className="text-gray-700">
                  Your satisfaction is our top priority. We work closely with you to meet your unique needs.
                </p>
              </div>
            </div>
  
            {/* Feature 4 */}
            <div className="flex">
              <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">Proven Results</h3>
                <p className="text-gray-700">
                  We have a track record of successful projects that have helped businesses grow and succeed.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  