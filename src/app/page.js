export default function Home() {
  return (
    <>
      <div className="font-sans bg-[#ffffff] text-[#171717]">
        
        {/* Hero Section */}
        <section className="relative bg-[#3B1E54] text-white py-16 px-8 mt-16">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/assets/hero-bg.jpg)' }}></div>
          <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#ffffff] mb-4">Building Your Digital Future</h1>
            <p className="text-xl text-[#D4BEE4] mb-8">Innovative solutions for your business growth, powered by technology and creativity.</p>
            <a href="#services" className="bg-[#9B7EBD] text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#3B1E54] transition">Discover Our Services</a>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-[#D4BEE4]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#3B1E54] mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Web Development",
                  description: "Custom websites built to provide a seamless experience across all devices and platforms.",
                  icon: "🌐",
                },
                {
                  title: "Mobile App Development",
                  description: "Build mobile apps that engage users and drive business growth with intuitive design and functionality.",
                  icon: "📱",
                },
                {
                  title: "Branding & Design",
                  description: "Develop a strong brand identity and a creative design strategy that resonates with your target audience.",
                  icon: "🎨",
                },
              ].map((service, index) => (
                <div key={index} className="group bg-white p-8 rounded-lg shadow-lg border border-[#D4BEE4] transform transition hover:scale-105 hover:shadow-2xl">
                  <div className="text-5xl mb-4 text-[#9B7EBD] group-hover:scale-125 transition">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#3B1E54] group-hover:text-[#9B7EBD] transition">{service.title}</h3>
                  <p className="text-[#171717] mb-6">{service.description}</p>
                  <button className="py-2 px-6 bg-[#9B7EBD] text-white rounded-full hover:bg-[#3B1E54] transition">Learn More</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-[#9B7EBD]">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-[#ffffff] mb-8">Who We Are</h2>
            <p className="text-lg text-[#ffffff] max-w-2xl mx-auto leading-relaxed">
              We are a team of passionate developers, designers, and strategists working together to create exceptional digital experiences. From innovative web solutions to impactful branding, we bring your vision to life with creativity and precision.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-[#D4BEE4]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#3B1E54] mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  name: "Jane Doe",
                  role: "Lead Developer",
                  image: "/assets/team1.jpg",
                },
                {
                  name: "John Smith",
                  role: "UI/UX Designer",
                  image: "/assets/team2.jpg",
                },
                {
                  name: "Sarah Lee",
                  role: "Project Manager",
                  image: "/assets/team3.jpg",
                },
                {
                  name: "Alex Brown",
                  role: "Marketing Strategist",
                  image: "/assets/team4.jpg",
                },
              ].map((member, index) => (
                <div key={index} className="bg-[#ffffff] p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
                  <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-[#9B7EBD]" />
                  <h3 className="text-xl font-semibold text-[#3B1E54]">{member.name}</h3>
                  <p className="text-[#171717]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-[#9B7EBD]">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#3B1E54] mb-12">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {[
                {
                  quote: '"This team helped us develop an amazing website that has increased our business leads by over 40%. Highly recommend!"',
                  name: "Emily Johnson",
                  position: "CEO, Tech Enterprises",
                },
                {
                  quote: '"Professional, efficient, and talented. They took our ideas and turned them into reality. Great experience!"',
                  name: "Mark Williams",
                  position: "Founder, Innovators Co.",
                },
                {
                  quote: '"A truly exceptional team that goes above and beyond. The project was delivered on time, and the results speak for themselves."',
                  name: "Samantha Lee",
                  position: "Marketing Director, Creative Solutions",
                },
                {
                  quote: '"We trusted them with our brand and they exceeded expectations. Excellent communication and top-notch service."',
                  name: "David Martinez",
                  position: "Founder, GlobalTech",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-[#3B1E54] p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105">
                  <p className="text-lg italic text-[#ffffff] mb-6">{testimonial.quote}</p>
                  <h4 className="text-xl font-semibold text-[#D4BEE4]">{testimonial.name}</h4>
                  <p className="text-[#9B7EBD]">{testimonial.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-[#3B1E54] text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-lg mb-6">Ready to take your project to the next level? Reach out to us today and let's make it happen!</p>
            <a href="mailto:contact@youragency.com" className="bg-[#9B7EBD] text-white px-6 py-3 text-lg font-semibold rounded-full hover:bg-[#3B1E54] transition">Contact Us</a>
          </div>
        </section>
        
      </div>
    </>
  );
}
