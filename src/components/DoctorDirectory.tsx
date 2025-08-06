'use client';

export default function DoctorDirectory() {
  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "15+ years experience",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurologist", 
      experience: "12+ years experience",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatrician",
      experience: "10+ years experience", 
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    },
    {
      name: "Dr. David Kim",
      specialty: "Orthopedic Surgeon",
      experience: "18+ years experience",
      color: "from-purple-500 to-purple-600", 
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Expert Doctors
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our team of experienced healthcare professionals
          </p>
        </div>

        {/* Doctors Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-4 lg:hidden scrollbar-hide">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex-shrink-0 w-72"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${doctor.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-gray-600">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent mb-2`}>
                      {doctor.specialty}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {doctor.experience}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      className={`w-full py-3 px-6 bg-gradient-to-r ${doctor.color} ${doctor.hoverColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      type="button"
                    >
                      Book Appointment
                    </button>
                    <button 
                      className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                      type="button"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${doctor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${doctor.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="text-2xl font-bold text-gray-600">
                        {doctor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {doctor.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent mb-2`}>
                      {doctor.specialty}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {doctor.experience}
                    </p>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button 
                      className={`w-full py-3 px-6 bg-gradient-to-r ${doctor.color} ${doctor.hoverColor} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                      type="button"
                    >
                      Book Appointment
                    </button>
                    <button 
                      className="w-full py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300"
                      type="button"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${doctor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex space-x-2">
              {doctors.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need to See a Specialist?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of expert doctors is here to provide you with the best medical care. Book your appointment today and take the first step towards better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                Book Appointment
              </button>
              <button 
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
              >
                View All Doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 