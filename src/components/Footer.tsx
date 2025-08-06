'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          
          {/* Hospital Info */}
          <div className="sm:col-span-2">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Credence Multi Specialist Health Management
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Providing world-class healthcare services with compassion and excellence. 
                Your health is our priority, and we are committed to delivering the highest 
                standards of medical care.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Emergency Contact</h4>
                <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>022-61305005</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>1-800-221-166</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                    <span>+91-9137943057</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">General Contact</h4>
                <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="break-all">info@medicare.com</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 mr-3 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Main Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-blue-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Home</span>
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-green-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>About Us</span>
              </Link>
              <Link href="/specialties" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-purple-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Clinical Departments</span>
              </Link>
              <Link href="/doctors" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-red-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Medical Team</span>
              </Link>
              <Link href="/patient-services" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-orange-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Patient Services</span>
              </Link>
              <Link href="/international" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-indigo-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Global Patients</span>
              </Link>
              <Link href="/healthcare-professionals" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-pink-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Medical Staff</span>
              </Link>
              <Link href="/academics" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-teal-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Education & Research</span>
              </Link>
              <Link href="/events" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-yellow-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Medical Events</span>
              </Link>
              <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-cyan-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Health Blog</span>
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-200 flex items-center group text-sm sm:text-base">
                <div className="w-1 h-1 bg-emerald-500 rounded-full mr-3 group-hover:bg-white transition-colors flex-shrink-0"></div>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Download App */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Download App</h4>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Get our mobile app for easy appointment booking and healthcare management.
            </p>
            
            {/* App Store Buttons */}
            <div className="space-y-3">
              <button 
                className="w-full bg-white text-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center group text-sm sm:text-base"
                type="button"
                suppressHydrationWarning
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              
              <button 
                className="w-full bg-white text-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200 flex items-center justify-center group text-sm sm:text-base"
                type="button"
                suppressHydrationWarning
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © 2025 Credence Multi Specialist Health Management. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 