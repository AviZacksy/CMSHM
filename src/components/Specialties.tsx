'use client';

export default function Specialties() {
  const specialties = [
    {
      name: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic and treatment facilities",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700"
    },
    {
      name: "Neurology",
      description: "Expert care for neurological disorders and brain health",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Orthopedics",
      description: "Advanced bone and joint care with surgical expertise",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      name: "Oncology",
      description: "Comprehensive cancer care with cutting-edge treatments",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    },
    {
      name: "Pediatrics",
      description: "Specialized care for children from birth to adolescence",
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700"
    },
    {
      name: "Dermatology",
      description: "Expert skin care and treatment for all skin conditions",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Specialties
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive medical care across all major specialties
          </p>
        </div>

        {/* Specialties Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-4 lg:hidden scrollbar-hide">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex-shrink-0 w-80"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${specialty.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <button className={`w-full py-3 px-6 bg-gradient-to-r ${specialty.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${specialty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${specialty.color}`}></div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6">
                    <button className={`w-full py-3 px-6 bg-gradient-to-r ${specialty.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${specialty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex space-x-2">
              {specialties.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Specific Specialist?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of specialists is here to provide expert care in every medical field. Find the right specialist for your health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                Find Specialist
              </button>
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                View All Specialties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 