// components/footer.js
export default function Footer() {
    return (
      <footer className="bg-[#1B1833] text-white py-8">
        <div className="container mx-auto text-center">
          
          <div className="space-x-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <svg className="w-6 h-6 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM12 14a6 6 0 01-6 6 6 6 0 016 6 6 6 0 010-12z"></path>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <svg className="w-6 h-6 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 4.01a8.15 8.15 0 01-2.357.645A4.058 4.058 0 0021.437 3a8.065 8.065 0 01-2.54.96A4.033 4.033 0 0015.5 3c-2.254 0-4.083 1.818-4.083 4.084 0 .318.035.63.1.928-3.388-.17-6.405-1.793-8.42-4.267-.35.6-.55 1.298-.55 2.042 0 1.41.72 2.65 1.814 3.377a4.05 4.05 0 01-1.85-.513v.051c0 2.089 1.483 3.834 3.465 4.23-.363.098-.746.148-1.14.148-.28 0-.553-.027-.822-.079.552 1.736 2.155 3 4.058 3.031A8.084 8.084 0 012 19.629a11.42 11.42 0 006.29 1.85c7.553 0 11.688-6.262 11.688-11.688 0-.177-.003-.354-.01-.53A8.34 8.34 0 0022 4.01z"></path>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition">
              <svg className="w-6 h-6 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.478 2 2 6.478 2 12c0 4.418 3.2 8.144 7.618 9.46.56.103.764-.248.764-.552 0-.275-.01-1.02-.015-2.008-2.767.603-3.351-1.333-3.351-1.333-.453-.92-.878-1.16-.878-1.16-.715-.49.054-.48.054-.48.791.055 1.207.855 1.207.855.7 1.207 1.791.855 2.029.658 1.438-1.307-.062-2.404-.29-2.715-2.53-.835-.497-1.607-.945-2.389-1.423-.453-.285-.639-.722-.639-1.245 0-1.111.793-1.945 1.852-1.945 1.084 0 1.781.815 1.781 1.716 0 1.256-.891 2.415-2.027 2.731.063-.62-.196-.596-.635-.596-1.075 0-1.957.836-1.957 1.916 0 2.234 1.559 3.556 3.13 3.555 2.379 0 4.284-1.673 4.284-4.003 0-1.002-.371-2.004-.979-2.674-2.325-.032-3.627-.807-3.627-1.497-.024-.477.429-1.084.754-1.084.684 0 1.461 1.052 2.459.451 1.107-.67 2.717-2.356 2.717-3.16 0-3.779-2.464-6.614-6.323-6.614-3.385 0-6.06 2.316-6.06 4.99 0 .442-.036.874-.107 1.299-.005 1.571 1.741 2.834 3.278 2.834 1.76 0 2.728-1.22 2.728-2.36 0-.697-.035-1.257-.515-1.893-.92-.238-1.315.331-1.256.969-.013 2.08-.063 3.619-.063 3.619z"></path>
              </svg>
            </a>
          </div>

          <p className="text-lg mb-4">© 2025 ByteLogic  . All rights reserved.</p>
        </div>
      </footer>
    );
  }
  