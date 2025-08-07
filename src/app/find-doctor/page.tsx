'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FindDoctorPage() {
  const doctors = [
    {
      name: "Dr. Manoj Yadav",
      specialty: "MS MCH Nephrologist",
      experience: "15+ years experience",
      initials: "MY",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      rating: 5,
      patients: "500+",
      availability: "Mon-Fri"
    },
    {
      name: "Dr. Anjani",
      specialty: "MBBS and MS", 
      experience: "12+ years experience",
      initials: "DA",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      rating: 5,
      patients: "400+",
      availability: "Mon-Sat"
    },
    {
      name: "Dr. Tanu",
      specialty: "BDS",
      experience: "8+ years experience", 
      initials: "DT",
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      rating: 5,
      patients: "300+",
      availability: "Tue-Sat"
    },
    {
      name: "Dr. Karna",
      specialty: "MBBS Resident Orthopedic Surgeon",
      experience: "5+ years experience",
      initials: "DK",
      color: "from-red-500 to-pink-500", 
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      rating: 5,
      patients: "200+",
      availability: "Mon-Fri"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header currentPage="find-doctor" />
      
      <main className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Expert Medical Team
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Expert Doctors
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced healthcare professionals dedicated to providing world-class medical care
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {doctors.map((doctor, index) => (
              <div 
                key={index} 
                className={`group relative ${doctor.bgColor} border-2 ${doctor.borderColor} rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${doctor.color} opacity-10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500`}></div>
                
                {/* Header Section */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  {/* Doctor Avatar */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${doctor.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <div className="text-2xl font-black text-white">
                      {doctor.initials}
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex space-x-1">
                    {[...Array(doctor.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Doctor Info */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <div className={`text-sm font-semibold bg-gradient-to-r ${doctor.color} bg-clip-text text-transparent mb-3`}>
                    {doctor.specialty}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {doctor.experience}
                  </p>
                  
                  {/* Stats Row */}
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${doctor.color} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{doctor.patients} Patients</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-gradient-to-r ${doctor.color} rounded-full`}></div>
                      <span className="text-sm font-medium text-gray-700">{doctor.availability}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="relative z-10 space-y-3">
                  <button 
                    className={`group/btn relative w-full py-3 px-6 bg-gradient-to-r ${doctor.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden`}
                    type="button"
                    suppressHydrationWarning
                  >
                    <span className="relative z-10">Book Appointment</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                  </button>
                  <button 
                    className="group/btn relative w-full py-3 px-6 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300"
                    type="button"
                    suppressHydrationWarning
                  >
                    View Profile
                  </button>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${doctor.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-sm text-gray-600">Expert Doctors</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-green-600 mb-2">1400+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-32 -translate-y-32 opacity-10"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white rounded-full translate-x-24 translate-y-24 opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Need to See a Specialist?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Our team of expert doctors is here to provide you with the best medical care. Book your appointment today and take the first step towards better health.
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
                  View All Doctors
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