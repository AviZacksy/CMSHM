'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SpecialtiesPage() {
  const specialties = [
    {
      title: "Cardiology",
      subtitle: "Heart Care",
      description: "Comprehensive heart care with advanced diagnostic and treatment facilities for all cardiac conditions.",
      icon: "❤️",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      features: ["Echocardiography", "Angioplasty", "Heart Surgery", "Cardiac Rehabilitation"],
      doctors: "3 Specialists",
      experience: "25+ Years"
    },
    {
      title: "Neurology",
      subtitle: "Brain & Nerve Care",
      description: "Expert care for neurological disorders, stroke treatment, and comprehensive brain health management.",
      icon: "🧠",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: ["Stroke Care", "Epilepsy Treatment", "Brain Imaging", "Neurological Surgery"],
      doctors: "2 Specialists",
      experience: "20+ Years"
    },
    {
      title: "Orthopedics",
      subtitle: "Bone & Joint Care",
      description: "Advanced bone and joint care with surgical expertise for fractures, replacements, and sports injuries.",
      icon: "🦴",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Rehabilitation"],
      doctors: "4 Specialists",
      experience: "30+ Years"
    },
    {
      title: "Oncology",
      subtitle: "Cancer Care",
      description: "Comprehensive cancer care with cutting-edge treatments, chemotherapy, and radiation therapy.",
      icon: "🩺",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: ["Chemotherapy", "Radiation Therapy", "Surgical Oncology", "Palliative Care"],
      doctors: "2 Specialists",
      experience: "18+ Years"
    },
    {
      title: "Pediatrics",
      subtitle: "Child Care",
      description: "Specialized care for children from birth to adolescence with child-friendly medical approaches.",
      icon: "👶",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
      features: ["Child Development", "Vaccination", "Growth Monitoring", "Child Psychology"],
      doctors: "3 Specialists",
      experience: "15+ Years"
    },
    {
      title: "Dermatology",
      subtitle: "Skin Care",
      description: "Expert skin care and treatment for all skin conditions, cosmetic procedures, and dermatological surgery.",
      icon: "🩹",
      color: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: ["Skin Surgery", "Cosmetic Procedures", "Allergy Testing", "Laser Treatment"],
      doctors: "2 Specialists",
      experience: "12+ Years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header currentPage="specialties" />
      
      <main className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Medical Specialties
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Specialties
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care across all major specialties with world-class expertise and advanced treatments
            </p>
          </div>

          {/* Specialties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <div 
                key={index} 
                className={`group relative ${specialty.bgColor} border-2 ${specialty.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${specialty.color} opacity-10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Header Section */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  {/* Specialty Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${specialty.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-3xl">
                      {specialty.icon}
                    </div>
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="text-right">
                    <div className="text-sm font-semibold text-gray-600">{specialty.doctors}</div>
                    <div className="text-xs text-gray-500">{specialty.experience}</div>
                  </div>
                </div>
                
                {/* Specialty Info */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {specialty.title}
                  </h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${specialty.color} bg-clip-text text-transparent mb-3`}>
                    {specialty.subtitle}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {specialty.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {specialty.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 bg-gradient-to-r ${specialty.color} rounded-full`}></div>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="relative z-10 space-y-3">
                  <button 
                    className={`group/btn relative w-full py-3 px-6 bg-gradient-to-r ${specialty.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden`}
                    type="button"
                    suppressHydrationWarning
                  >
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button 
                    className="group/btn relative w-full py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    type="button"
                    suppressHydrationWarning
                  >
                    Find Doctors
                  </button>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${specialty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-sm text-gray-600">Medical Specialties</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">16</div>
              <div className="text-sm text-gray-600">Expert Specialists</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">120+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency Care</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24 opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Need a Specific Specialist?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Our team of specialists is here to provide expert care in every medical field. Find the right specialist for your health needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
                  type="button"
                  suppressHydrationWarning
                >
                  Find Specialist
                </button>
                <button 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                  type="button"
                  suppressHydrationWarning
                >
                  View All Specialties
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