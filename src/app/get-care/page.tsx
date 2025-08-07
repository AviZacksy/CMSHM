'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GetCarePage() {
  const careServices = [
    {
      title: "Primary Care",
      subtitle: "Comprehensive Health",
      description: "Complete primary care services for all ages with preventive care, routine check-ups, and chronic disease management.",
      icon: "👨‍⚕️",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: ["Annual Check-ups", "Vaccinations", "Health Screenings", "Chronic Care"]
    },
    {
      title: "Specialized Care",
      subtitle: "Expert Treatment",
      description: "Advanced specialized care in cardiology, neurology, oncology, orthopedics, and other medical specialties.",
      icon: "🏥",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: ["Cardiology", "Neurology", "Oncology", "Orthopedics"]
    },
    {
      title: "Emergency Care",
      subtitle: "24/7 Support",
      description: "Round-the-clock emergency medical services with immediate response and critical care when you need it most.",
      icon: "🚑",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      features: ["Trauma Care", "Critical Care", "Ambulance", "Emergency Surgery"]
    },
    {
      title: "Diagnostic Services",
      subtitle: "Advanced Testing",
      description: "State-of-the-art diagnostic services including imaging, laboratory testing, and specialized medical procedures.",
      icon: "🔬",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: ["MRI & CT Scans", "Blood Tests", "X-Rays", "Ultrasound"]
    },
    {
      title: "Surgical Care",
      subtitle: "Expert Procedures",
      description: "Comprehensive surgical services with experienced surgeons and advanced operating room facilities.",
      icon: "⚕️",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: ["General Surgery", "Minimally Invasive", "Robotic Surgery", "Post-op Care"]
    },
    {
      title: "Rehabilitation",
      subtitle: "Recovery Support",
      description: "Comprehensive rehabilitation services including physical therapy, occupational therapy, and recovery programs.",
      icon: "💪",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      features: ["Physical Therapy", "Occupational Therapy", "Speech Therapy", "Sports Medicine"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header currentPage="get-care" />
      
      <main className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Healthcare Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Get Care
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive healthcare services tailored to your needs. From routine check-ups to specialized treatments, we&apos;re here for you.
            </p>
          </div>

          {/* Care Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {careServices.map((service, index) => (
              <div 
                key={index} 
                className={`group relative ${service.bgColor} border-2 ${service.borderColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Service Icon */}
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-3xl">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                    {service.subtitle}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      className={`group/btn relative w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden`}
                      type="button"
                      suppressHydrationWarning
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                    </button>
                    <button 
                      className="group/btn relative w-full py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                      type="button"
                      suppressHydrationWarning
                    >
                      Learn More
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">Medical Specialists</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Care</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24 opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your Healthcare Journey?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Our comprehensive healthcare services are designed to meet all your medical needs. Book an appointment or contact us to get started.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                  type="button"
                  suppressHydrationWarning
                >
                  Book Appointment
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  type="button"
                  suppressHydrationWarning
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 