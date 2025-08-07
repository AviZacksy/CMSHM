'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          
          {/* Hospital Info - Mobile: 2 cols, Desktop: 2 cols */}
          <div className="col-span-2">
            <div className="mb-3 sm:mb-4">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3">
                Multi Specialist Health Management
              </h3>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm lg:text-base">
                Providing world-class healthcare services with compassion and excellence. 
                Your health is our priority.
              </p>
            </div>
            
            {/* Contact Info - Horizontal on mobile */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3">Emergency Contact</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm lg:text-base">
                  <div>9795231331</div>
                  <div>9795231331</div>
                  <div>+91-9795231331</div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-3">General Contact</h4>
                <div className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm lg:text-base">
                  <div>jy920476@gmail.com</div>
                  <div>Sigra, Mor Lanka, Varanasi - 221010</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Mobile: 2 cols, Desktop: 1 col */}
          <div className="col-span-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-4 lg:mb-6">Main Links</h4>
            <div className="space-y-1 sm:space-y-2 lg:space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                About Us
              </Link>
              <Link href="/specialties" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                Specialties
              </Link>
              <Link href="/doctors" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                Doctors
              </Link>
              <Link href="/find-doctor" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                Find Doctor
              </Link>
              <Link href="/get-care" className="block text-gray-300 hover:text-white transition-colors duration-200 text-xs sm:text-sm lg:text-base">
                Get Care
              </Link>
            </div>
          </div>

          {/* Download App - Mobile: 2 cols, Desktop: 1 col */}
          <div className="col-span-1">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-2 sm:mb-4 lg:mb-6">Download App</h4>
            <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base">
              Get our mobile app for easy appointment booking.
            </p>
            
            {/* App Store Buttons */}
            <div className="space-y-2 sm:space-y-3">
              <button 
                className="w-full bg-white text-gray-900 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                type="button"
                suppressHydrationWarning
              >
                App Store
              </button>
              
              <button 
                className="w-full bg-white text-gray-900 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 lg:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-xs sm:text-sm lg:text-base"
                type="button"
                suppressHydrationWarning
              >
                Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6 lg:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Multi Specialist Health Management. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded-full hover:bg-white/10 text-xs sm:text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded-full hover:bg-white/10 text-xs sm:text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded-full hover:bg-white/10 text-xs sm:text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 px-2 py-1 rounded-full hover:bg-white/10 text-xs sm:text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 