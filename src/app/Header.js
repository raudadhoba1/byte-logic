// components/header.js
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
<header className="bg-[--header] text-white py-4 px-6 shadow-md w-full z-50">
      <div className="container bg-fixed mx-auto flex justify-between items-center">
         <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-500 transition">
          ByteLogic
        </Link>

       
         <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
          <Link href="/aboutus" className="hover:text-yellow-500 transition">About</Link>
          <Link href="/product" className="hover:text-yellow-500 transition">Product</Link>
          <Link href="/services" className="hover:text-yellow-500 transition">Services</Link>
          <Link href="/contactus" className="hover:text-yellow-500 transition">Contact</Link>
        </nav> 

        {/* Mobile Menu Button */}
         <button 
          className="md:hidden text-white" 
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>  

      
      {isMobileMenuOpen && (
  <div className="md:hidden mt-4 mx-4 rounded-lg border border-white bg-blue-700 shadow-lg px-6 py-4 space-y-4 transition-all duration-300">
    <Link href="/" className="block text-white hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Home</Link>
    <Link href="/product" className="block text-white hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Product</Link>
    <Link href="/aboutus" className="block text-white hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>About</Link>
    <Link href="/services" className="block text-white hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Services</Link>
    <Link href="/contactus" className="block text-white hover:text-yellow-400" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
  </div>
)}


     
    </header>
  );
}
