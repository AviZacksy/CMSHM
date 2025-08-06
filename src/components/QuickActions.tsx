'use client';

export default function QuickActions() {
  const actions = [
    {
      icon: "🏥",
      title: "Book Appointment",
      description: "Schedule your consultation with our expert doctors online",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: "📋",
      title: "Patient Portal",
      description: "Access your medical records and test results securely",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      icon: "📞",
      title: "Emergency Care",
      description: "24/7 emergency medical services and ambulance support",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700"
    },
    {
      icon: "🔬",
      title: "Lab Services",
      description: "Comprehensive diagnostic and laboratory testing services",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    },
    {
      icon: "💊",
      title: "Pharmacy",
      description: "In-house pharmacy with prescription and OTC medications",
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700"
    },
    {
      icon: "📱",
      title: "Telemedicine",
      description: "Virtual consultations with our healthcare professionals",
      color: "from-indigo-500 to-indigo-600",
      hoverColor: "hover:from-indigo-600 hover:to-indigo-700"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Actions Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with our healthcare services quickly and easily
          </p>
        </div>

        {/* Actions Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-4 lg:hidden scrollbar-hide">
            {actions.map((action, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex-shrink-0 w-80"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{action.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors text-center">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {action.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    className={`w-full py-3 px-6 bg-gradient-to-r ${action.color} ${action.hoverColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {actions.map((action, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{action.icon}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors text-center">
                      {action.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {action.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <button 
                    className={`w-full py-3 px-6 bg-gradient-to-r ${action.color} ${action.hoverColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex space-x-2">
              {actions.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Getting Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our patient care team is here to help you navigate our services and get the care you need. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                Contact Support
              </button>
              <button 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 