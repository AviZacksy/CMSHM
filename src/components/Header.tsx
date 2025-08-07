'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  currentPage?: 'home' | 'about' | 'doctors' | 'specialties' | 'patient-services' | 'international' | 'healthcare-professionals' | 'academics' | 'events' | 'blog' | 'contact' | 'find-doctor' | 'get-care' | 'locations' | 'records-billing' | 'signin' | 'patients' | 'providers' | 'university';
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  // currentPage prop is available for future use in highlighting active navigation
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };

  return (
    <>
      <header className="bg-white shadow-lg relative overflow-x-hidden">
        {/* Desktop Top Bar */}
        <div className="hidden sm:block bg-white border-t border-gray-200">
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 sm:py-3">
              {/* Left side links */}
              <div className="flex space-x-6 text-sm font-semibold">
                <Link href="/patients" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 group">
                  For Patients
                  <div className="h-1 bg-transparent group-hover:bg-red-500 transition-all duration-200 mt-1 rounded-full"></div>
                </Link>
                <Link href="/providers" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 group">
                  For Providers
                  <div className="h-1 bg-transparent group-hover:bg-red-500 transition-all duration-200 mt-1 rounded-full"></div>
                </Link>
                <Link href="/university" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 group">
                  Health Sciences University
                  <div className="h-1 bg-transparent group-hover:bg-red-500 transition-all duration-200 mt-1 rounded-full"></div>
                </Link>
              </div>
              
              {/* Right side - Hospital Name */}
              <div className="flex items-center space-x-3">
                {/* Hospital Name */}
                <div className="flex flex-col items-end">
                  <div className="text-xl font-bold text-gray-800">
                    CMSHM
                  </div>
                  <div className="text-xs text-gray-600">
                    Credence Multi Specialist Health Management
                  </div>
                </div>
                
                {/* Professional Logo */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Middle Divider */}
        <div className="hidden sm:block w-full border-t border-gray-200"></div>
        
        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center py-3 sm:py-4 lg:py-6">
            {/* Mobile - Single Header */}
            <div className="xl:hidden flex items-center space-x-4 w-full">
              {/* Hospital Name and Logo */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-xl font-bold text-gray-800">
                  CMSHM
                </div>
              </div>
            
              {/* Spacer */}
              <div className="flex-1"></div>
              
              {/* Search Icon */}
              <button className="p-3 transition-all duration-300 hover:scale-105">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
             
              {/* Hamburger Menu */}
              <button 
                onClick={toggleMobileMenu}
                className="p-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-600/20 transition-all duration-300 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Desktop Navigation - Main Links */}
            <nav className="hidden xl:flex space-x-8 -ml-2 sm:-ml-4 lg:-ml-60">
              <Link href="/get-care" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Get Care
              </Link>
              <Link href="/find-doctor" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Find a Doctor
              </Link>
              <Link href="/locations" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Locations
              </Link>
              <Link href="/specialties" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Specialties
              </Link>
              <Link href="/records-billing" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Records & Billing
              </Link>
              <Link href="/signin" className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-bold text-xl">
                Sign In
              </Link>
            </nav>
           
            {/* Desktop Search Icon */}
            <div className="hidden xl:flex space-x-3 flex-shrink-0 ml-4">
              <button className="p-3 transition-all duration-300 hover:scale-105">
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Header End Divider */}
        <div className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex justify-between items-center py-0">
              {/* Header end separator */}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar - Completely Removed */}
      
      {/* Mobile Navigation Menu - Enhanced Design */}
      <div className={`xl:hidden fixed top-0 left-0 w-80 h-full bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Overlay with Blur */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content with Enhanced Design */}
        <div className="relative h-full bg-white overflow-y-auto border-r border-gray-200">
          {/* Enhanced Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            {/* Hospital Name and Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="text-xl font-bold text-gray-800">
                CMSHM
              </div>
            </div>
        
            {/* Spacer for right side */}
            <div></div>
          </div>
        
          {/* Navigation Links */}
          <nav className="p-4 space-y-3">
            <Link href="/get-care" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Get Care
            </Link>
            <Link href="/find-doctor" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Find a Doctor
            </Link>
            <Link href="/locations" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Locations
            </Link>
            <Link href="/specialties" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Specialties
            </Link>
            <Link href="/records-billing" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Records & Billing
            </Link>
            <Link href="/signin" className="block text-gray-800 hover:text-blue-600 transition-colors duration-200 font-semibold text-lg py-2 border-b border-gray-100">
              Sign In
            </Link>
          </nav>
          
          {/* Top Bar Links */}
          <div className="p-4 border-t border-gray-200 space-y-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
            <Link href="/patients" className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm py-2">
              For Patients
            </Link>
            <Link href="/providers" className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm py-2">
              For Providers
            </Link>
            <Link href="/university" className="block text-gray-700 hover:text-gray-900 transition-colors duration-200 font-semibold text-sm py-2">
              Health Sciences University
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}