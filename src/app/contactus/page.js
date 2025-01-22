export default function ContactUs() {
    return (
      <div className="bg-gray-200 pt-20 px-8">
        <section className="container mx-auto">
          <h1 className="text-6xl md:text-5xl font-bold mb-8 text-gray-800 text-center">Contact Us</h1>
          <p className="text-lg text-gray-700 text-center mb-12">
            We’d love to hear from you! Get in touch with us for inquiries, collaborations, or support.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Your Name"
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-lg"
                    placeholder="Your Email"
                  />
                </div>
  
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border rounded-lg"
                    rows="4"
                    placeholder="Your Message"
                  />
                </div>
  
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Submit
                </button>
              </form>
            </div>
  
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Reach Out to Us</h3>
              <p className="text-gray-700 mb-4">
                Address: 123 Innovation Drive, Tech City, TX
              </p>
              <p className="text-gray-700 mb-4">Phone: (123) 456-7890</p>
              <p className="text-gray-700 mb-4">Email: contact@bytelogic.com</p>
              <p className="text-gray-700">Follow us on social media for updates and insights!</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
  