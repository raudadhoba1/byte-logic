import Link from 'next/link';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaFacebookF, 
  FaDiscord, 
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#1B1833] text-[#fafafb] py-12">
      <div className="container mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div className='px-8'>
          <h3 className="text-xl font-semibold mb-4 ">About ByteLogic</h3>
          <p className="text-gray-300 leading-relaxed">
            ByteLogic is dedicated to delivering innovative IT solutions that empower businesses worldwide.
            We believe in technology that drives success and shapes the future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-500 transition">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-500 transition">Services</a>
            </li>
            
            <li>
              <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt />
              <span>Kamothe , Navi Mumbai</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaPhone />
              <a href="tel:+917894355607" className="hover:text-yellow-500 transition">+91 7894355607</a>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope />
              <a href="mailto:info@bytelogic.com" className="hover:text-yellow-500 transition">bytelogic@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6 text-2xl text-[#fafafb]">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a> */}

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            {/* <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="Discord"
            >
              <FaDiscord />
            </a> */}

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © 2025 ByteLogic. All rights reserved.
      </div>
    </footer>
  );
}
