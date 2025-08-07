'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: "Niranjan Salunke",
      initials: "NS",
      text: "MediCare Hospital is a God gift for us. Although it's expensive, it deserves because from Entry section to ICU department everything is full of all facilities.",
      rating: 5,
      position: "left",
      accent: "01"
    },
    {
      name: "Radhika Kerkar",
      initials: "RK",
      text: "One of the best in the city. Thank you for a seamless process and excellent care throughout my treatment.",
      rating: 5,
      position: "right",
      accent: "02"
    },
    {
      name: "Dr. Amit Patel",
      initials: "DAP",
      text: "As a healthcare professional, I can confidently say that the medical standards and patient care here are exceptional. The team's dedication is remarkable.",
      rating: 5,
      position: "left",
      accent: "03"
    }
  ];

  // Show loading state during SSR
  if (!isClient) {
    return (
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-4 text-xs font-mono text-gray-400 tracking-widest uppercase mb-6">
              <div className="w-8 h-px bg-gray-300"></div>
              <span>Patient Stories</span>
              <div className="w-8 h-px bg-gray-300"></div>
            </div>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-none">
              Patient Testimonials
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mx-auto mb-12"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What our patients say about us
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-200 rounded-3xl h-96 w-full max-w-6xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 text-xs font-mono text-gray-400 tracking-widest uppercase mb-6">
            <div className="w-8 h-px bg-gray-300"></div>
            <span>Patient Stories</span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-none">
            Patient Testimonials
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What our patients say about us
          </p>
        </div>

        {/* Testimonials - Asymmetric Layout */}
        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`group relative ${testimonial.position === 'right' ? 'lg:ml-32' : 'lg:mr-32'}`}
            >
              {/* Card Container */}
              <div className={`relative bg-white border-2 border-gray-100 rounded-3xl p-12 hover:border-gray-300 hover:shadow-2xl transition-all duration-700 overflow-hidden ${testimonial.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col lg:flex-row lg:items-center lg:gap-16`}>
                
                {/* Background Pattern */}
                <div className={`absolute top-0 ${testimonial.position === 'right' ? 'left-0' : 'right-0'} w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-y-32 ${testimonial.position === 'right' ? '-translate-x-32' : 'translate-x-32'} group-hover:scale-125 transition-transform duration-700`}></div>
                
                {/* Content Side */}
                <div className={`relative z-10 flex-1 ${testimonial.position === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Accent Number */}
                  <div className="text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 mb-6">
                    {testimonial.accent}
                  </div>
                  
                  {/* Quote Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mb-8">
                    <p className="text-gray-700 leading-relaxed text-xl italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Patient Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-2xl font-black text-blue-600">
                        {testimonial.initials}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        Satisfied Patient
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Visual Side */}
                <div className={`relative z-10 flex-1 ${testimonial.position === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Creative Visual Element */}
                  <div className="relative">
                    <div className={`w-full h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl group-hover:scale-105 transition-transform duration-700 ${testimonial.position === 'right' ? 'lg:ml-8' : 'lg:mr-8'}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-black text-blue-200 group-hover:text-blue-300 transition-colors duration-500">
                          {testimonial.accent}
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className={`absolute top-6 ${testimonial.position === 'right' ? 'left-6' : 'right-6'} w-12 h-12 bg-blue-200 rounded-full group-hover:scale-150 transition-transform duration-500 animate-bounce`}></div>
                    <div className={`absolute bottom-6 ${testimonial.position === 'right' ? 'right-6' : 'left-6'} w-8 h-8 bg-indigo-200 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100 animate-pulse`}></div>
                  </div>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-20 border-2 border-blue-200 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-4 text-xs font-mono text-gray-400 tracking-widest uppercase mb-6">
                <div className="w-6 h-px bg-gray-300"></div>
                <span>Share Your Story</span>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8">
                Share Your Experience
              </h3>
              <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-xl">
                We value your feedback. Share your healthcare journey with us and help others make informed decisions about their medical care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button 
                  className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 overflow-hidden"
                  type="button"
                >
                  <span className="relative z-10">Write a Review</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button 
                  className="group relative px-12 py-5 border-2 border-gray-900 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-500 overflow-hidden"
                  type="button"
                >
                  <span className="relative z-10">View All Reviews</span>
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
