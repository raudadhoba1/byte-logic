export default function ContactUs() {
  return (
    <div className="bg-[#D4BEE4] pt-20 px-8">
      <section className="container mx-auto py-16 px-8">
  <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-[#3B1E54] text-center">
    Contact Us
  </h1>
  <p className="text-lg text-[#3B1E54] text-center mb-12 max-w-3xl mx-auto">
    We’d love to hear from you! Get in touch with us for inquiries, collaborations, or support.
  </p>

  <div className="flex flex-wrap md:flex-nowrap gap-12">
    {/* Contact Form - Left */}
    <div className="w-full md:w-1/2 bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
      <h3 className="text-3xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
      <form>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-5 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-5 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-5 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows="5"
            placeholder="Your Message"
          />
        </div>

        <button className="bg-gradient-to-r from-purple-400 to-purple-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:opacity-90 transition">
          Submit
        </button>
      </form>
    </div>

    {/* Contact Info - Right */}
    <div className="w-full md:w-1/2 bg-[#9B7EBD] rounded-xl shadow-md text-white p-8">
      <h3 className="text-3xl font-semibold mb-6">Reach Out to Us</h3>
      <p className="mb-4">
        <strong>Address:</strong> 123 Innovation Drive, Tech City, TX
      </p>
      <p className="mb-4">
        <strong>Phone:</strong> (123) 456-7890
      </p>
      <p className="mb-4">
        <strong>Email:</strong> contact@bytelogic.com
      </p>
      <p className="mb-6">
        Follow us on social media for updates and insights!
      </p>

      <div className="flex gap-4">
        {/* Example social media icons */}
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-200">
          <i className="fab fa-instagram text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
