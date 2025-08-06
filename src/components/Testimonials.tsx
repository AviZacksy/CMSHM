'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const testimonials = [
    {
      name: "Niranjan Salunke",
      text: "MediCare Hospital is a God gift for us. Although it's expensive, it deserves because from Entry section to ICU department everything is full of all facilities.",
      rating: 5,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Radhika Kerkar",
      text: "One of the best in the city. Thank you for a seamless process and excellent care throughout my treatment.",
      rating: 5,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      name: "Dr. Amit Patel",
      text: "As a healthcare professional, I can confidently say that the medical standards and patient care here are exceptional. The team's dedication is remarkable.",
      rating: 5,
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    }
  ];

  // Show loading state during SSR
  if (!isClient) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Patient Testimonials
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              What our patients say about us
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full max-w-4xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            What our patients say about us
          </p>
        </div>

        {/* Testimonials Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-4 lg:hidden scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex-shrink-0 w-80"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${testimonial.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg italic text-center">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Patient Info */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-xl font-bold text-gray-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Satisfied Patient
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${testimonial.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Quote Icon */}
                  <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  {/* Testimonial Text */}
                  <div className="mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg italic text-center">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  
                  {/* Patient Info */}
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-xl font-bold text-gray-600">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Satisfied Patient
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We value your feedback. Share your healthcare journey with us and help others make informed decisions about their medical care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
                suppressHydrationWarning
              >
                Write a Review
              </button>
              <button 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
                suppressHydrationWarning
              >
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
