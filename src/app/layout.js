'use client';

import "./globals.css";
import Footer from"./Footer"
import Header from"./Header"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
