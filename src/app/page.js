

export default function Home() {
  return (

    <>
   
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-[#3B1E54] text-white py-16 px-8 mt-16">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}></div>
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Building Your Digital Future</h1>
          <p className="text-xl mb-8">Innovative solutions for your business growth, powered by technology and creativity.</p>
          <a href="#services" className="bg-yellow-500 text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-400 transition">Discover Our Services</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#D4BEE4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            We are a team of passionate developers, designers, and strategists who work with businesses of all sizes to deliver
            top-notch digital experiences. Whether it's web development, mobile apps, or branding, we bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 p-4 font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#9B7EBD] p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-700">Custom websites built to provide a seamless experience across all devices and platforms.</p>
            </div>
            <div className="bg-[#9B7EBD] p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Mobile App Development</h3>
              <p className="text-gray-700">Build mobile apps that engage users and drive business growth with intuitive design and functionality.</p>
            </div>
            <div className="bg-[#9B7EBD] p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Branding & Design</h3>
              <p className="text-gray-700">Develop a strong brand identity and a creative design strategy that resonates with your target audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-[#D4BEE4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-48 text-center">
              <img src="/assets/team1.jpg" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="font-semibold">Jane Doe</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
            <div className="w-48 text-center">
              <img src="/assets/team2.jpg" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="font-semibold">John Smith</h3>
              <p className="text-gray-600">UI/UX Designer</p>
            </div>
            <div className="w-48 text-center">
              <img src="/assets/team3.jpg" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="font-semibold">Sarah Lee</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            <div className="bg-[#9B7EBD] p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-700">"This team helped us develop an amazing website that has increased our business leads by over 40%. Highly recommend!"</p>
              <h4 className="mt-4 font-semibold">Emily Johnson</h4>
              <p className="text-gray-600">CEO, Tech Enterprises</p>
            </div>
            <div className="bg-[#9B7EBD] p-8 rounded-lg shadow-lg">
              <p className="text-lg italic text-gray-700">"Professional, efficient, and talented. They took our ideas and turned them into reality. Great experience!"</p>
              <h4 className="mt-4 font-semibold">Mark Williams</h4>
              <p className="text-gray-600">Founder, Innovators Co.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#3B1E54] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-lg mb-6">Ready to take your project to the next level? Reach out to us today and let's make it happen!</p>
          <a href="mailto:contact@youragency.com" className="bg-yellow-500 text-gray-900 px-6 py-3 text-lg font-semibold rounded-full hover:bg-yellow-400 transition">Contact Us</a>
        </div>
      </section>
    </div>


    </>
    
  );
}
