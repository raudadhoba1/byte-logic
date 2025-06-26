'use client';

import "./globals.css";
import Footer from"./Footer"
import Header from"./Header"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">  {/* Body as flex container with full viewport height */}
        <Header />
        <main className="flex-grow"> {/* Main content grows to fill space */}
          {children}
        </main>
        <Footer /> {/* Footer at the bottom of the page */}
      </body>
    </html>
  );
}
