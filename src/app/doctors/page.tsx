import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function DoctorsPage() {
  const departments = [
    "All Departments",
    "Cardiology",
    "Oncology", 
    "Neurology",
    "Orthopaedics",
    "Pediatrics",
    "Dermatology",
    "Psychiatry",
    "Emergency Medicine"
  ];

  const doctors = [
    {
      name: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      department: "Cardiology",
      experience: "18+ years",
      qualifications: "MBBS, MD (Cardiology), FSCAI",
      image: "👨‍⚕️",
      description: "Leading interventional cardiologist with expertise in complex cardiac procedures",
      languages: ["English", "Hindi", "Marathi"],
      availability: "Mon-Fri: 9 AM - 5 PM"
    },
    {
      name: "Dr. Priya Sharma",
      specialty: "Oncologist",
      department: "Oncology",
      experience: "15+ years",
      qualifications: "MBBS, MD (Oncology), Fellowship in Medical Oncology",
      image: "👩‍⚕️",
      description: "Specialized in breast cancer and hematological malignancies",
      languages: ["English", "Hindi", "Gujarati"],
      availability: "Mon-Sat: 10 AM - 6 PM"
    },
    {
      name: "Dr. Amit Patel",
      specialty: "Neurologist",
      department: "Neurology",
      experience: "20+ years",
      qualifications: "MBBS, MD (Neurology), DM (Neurology)",
      image: "👨‍⚕️",
      description: "Expert in stroke management and neurological disorders",
      languages: ["English", "Hindi", "Marathi"],
      availability: "Mon-Fri: 8 AM - 4 PM"
    },
    {
      name: "Dr. Sneha Reddy",
      specialty: "Orthopedic Surgeon",
      department: "Orthopaedics",
      experience: "12+ years",
      qualifications: "MBBS, MS (Orthopaedics), Fellowship in Joint Replacement",
      image: "👩‍⚕️",
      description: "Specialized in joint replacement and sports medicine",
      languages: ["English", "Hindi", "Telugu"],
      availability: "Mon-Sat: 9 AM - 7 PM"
    },
    {
      name: "Dr. Karan Singh",
      specialty: "Pediatrician",
      department: "Pediatrics",
      experience: "14+ years",
      qualifications: "MBBS, MD (Pediatrics), Fellowship in Neonatology",
      image: "👨‍⚕️",
      description: "Expert in neonatal care and pediatric critical care",
      languages: ["English", "Hindi", "Punjabi"],
      availability: "Mon-Sat: 8 AM - 6 PM"
    },
    {
      name: "Dr. Meera Iyer",
      specialty: "Dermatologist",
      department: "Dermatology",
      experience: "16+ years",
      qualifications: "MBBS, MD (Dermatology), Fellowship in Cosmetic Dermatology",
      image: "👩‍⚕️",
      description: "Specialized in cosmetic dermatology and skin cancer treatment",
      languages: ["English", "Hindi", "Malayalam"],
      availability: "Mon-Fri: 10 AM - 8 PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="doctors" />
      
      <HeroSection 
        title="Meet Our Medical Team"
        subtitle="Expert healthcare professionals dedicated to providing world-class medical care with compassion and excellence."
        showButtons={false}
      />

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Find Your Doctor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  {departments.map((dept, index) => (
                    <option key={index}>{dept}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialty</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Specialties</option>
                  <option>Cardiologist</option>
                  <option>Oncologist</option>
                  <option>Neurologist</option>
                  <option>Orthopedic Surgeon</option>
                  <option>Pediatrician</option>
                  <option>Dermatologist</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Any Experience</option>
                  <option>5+ years</option>
                  <option>10+ years</option>
                  <option>15+ years</option>
                  <option>20+ years</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="btn-primary w-full">Search Doctors</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Medical Team</h2>
            <p className="text-lg sm:text-xl text-gray-600">Meet our expert healthcare professionals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6">
                    <div className="text-6xl sm:text-8xl mb-4">{doctor.image}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-1">{doctor.specialty}</p>
                    <p className="text-gray-600 text-sm mb-3">{doctor.department}</p>
                    <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {doctor.experience}</span>
                      <span>🕒 {doctor.availability}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Qualifications</h4>
                      <p className="text-sm text-gray-600">{doctor.qualifications}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                      <p className="text-sm text-gray-600">{doctor.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Languages</h4>
                      <p className="text-sm text-gray-600">{doctor.languages.join(", ")}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <button className="btn-primary w-full text-sm">Book Appointment</button>
                    <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Doctors */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Medical Team</h2>
            <p className="text-lg sm:text-xl text-gray-600">Excellence in healthcare delivery</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🎓",
                title: "Expert Qualifications",
                description: "All doctors are highly qualified with advanced degrees and specialized training"
              },
              {
                icon: "🌍",
                title: "International Experience",
                description: "Many doctors have trained and worked at prestigious international institutions"
              },
              {
                icon: "🔬",
                title: "Research Focus",
                description: "Active participation in medical research and clinical trials"
              },
              {
                icon: "❤️",
                title: "Patient-Centered Care",
                description: "Compassionate approach with focus on individual patient needs"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 