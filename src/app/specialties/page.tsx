import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function SpecialtiesPage() {
  const specialties = [
    {
      name: "Cardiovascular Sciences",
      icon: "❤️",
      description: "Comprehensive heart care with advanced cardiac procedures",
      services: [
        "Interventional Cardiology",
        "Cardiac Surgery",
        "Electrophysiology",
        "Heart Failure Management",
        "Preventive Cardiology"
      ],
      equipment: "3D Echocardiography, Cardiac CT, Cardiac MRI",
      doctors: "8 Specialist Doctors",
      procedures: "500+ procedures annually"
    },
    {
      name: "Oncology & Cancer Care",
      icon: "🔬",
      description: "Multidisciplinary approach to cancer treatment and care",
      services: [
        "Medical Oncology",
        "Radiation Oncology",
        "Surgical Oncology",
        "Hematology",
        "Palliative Care"
      ],
      equipment: "Linear Accelerator, PET-CT, CyberKnife",
      doctors: "12 Specialist Doctors",
      procedures: "1000+ treatments annually"
    },
    {
      name: "Neurological Sciences",
      icon: "🧠",
      description: "Advanced treatment for brain and nervous system disorders",
      services: [
        "Neurology",
        "Neurosurgery",
        "Neurointervention",
        "Epilepsy Management",
        "Movement Disorders"
      ],
      equipment: "3T MRI, Neuro Navigation, EEG Lab",
      doctors: "10 Specialist Doctors",
      procedures: "300+ surgeries annually"
    },
    {
      name: "Orthopedics & Joint Care",
      icon: "🦴",
      description: "Comprehensive bone and joint care with advanced surgical techniques",
      services: [
        "Joint Replacement",
        "Spine Surgery",
        "Sports Medicine",
        "Trauma Care",
        "Pediatric Orthopedics"
      ],
      equipment: "Robotic Surgery System, 3D Imaging, Arthroscopy",
      doctors: "15 Specialist Doctors",
      procedures: "800+ surgeries annually"
    },
    {
      name: "Pediatric Care",
      icon: "👶",
      description: "Specialized healthcare for children from birth to adolescence",
      services: [
        "General Pediatrics",
        "Neonatology",
        "Pediatric Surgery",
        "Child Development",
        "Pediatric Emergency"
      ],
      equipment: "NICU, PICU, Pediatric Imaging",
      doctors: "20 Specialist Doctors",
      procedures: "1200+ consultations monthly"
    },
    {
      name: "Dermatology & Aesthetics",
      icon: "✨",
      description: "Comprehensive skin care and cosmetic procedures",
      services: [
        "Medical Dermatology",
        "Cosmetic Dermatology",
        "Dermatosurgery",
        "Laser Therapy",
        "Skin Cancer Treatment"
      ],
      equipment: "CO2 Laser, IPL, Dermoscopy",
      doctors: "6 Specialist Doctors",
      procedures: "2000+ treatments annually"
    },
    {
      name: "Psychiatry & Mental Health",
      icon: "🧘",
      description: "Comprehensive mental health care and psychological support",
      services: [
        "Adult Psychiatry",
        "Child Psychiatry",
        "Addiction Medicine",
        "Psychotherapy",
        "Rehabilitation"
      ],
      equipment: "TMS, EEG, Psychological Testing",
      doctors: "8 Specialist Doctors",
      procedures: "1500+ consultations monthly"
    },
    {
      name: "Emergency Medicine",
      icon: "🚨",
      description: "24/7 emergency care with rapid response and critical care",
      services: [
        "Trauma Care",
        "Critical Care",
        "Emergency Surgery",
        "Ambulance Services",
        "Disaster Management"
      ],
      equipment: "ECMO, Ventilators, CT Scan",
      doctors: "25 Specialist Doctors",
      procedures: "24/7 Emergency Services"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="specialties" />
      
      <HeroSection 
        title="Clinical Departments"
        subtitle="Comprehensive medical specialties providing world-class healthcare across all major disciplines."
        showButtons={false}
      />

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Clinical Excellence</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive medical care across 8 major clinical departments, each staffed with expert specialists 
              and equipped with state-of-the-art technology to provide the highest quality healthcare services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: "8", label: "Clinical Departments" },
              { number: "100+", label: "Specialist Doctors" },
              { number: "5000+", label: "Annual Procedures" },
              { number: "24/7", label: "Emergency Care" }
            ].map((stat, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6">
                <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Clinical Departments</h2>
            <p className="text-lg sm:text-xl text-gray-600">Expert care across all major medical specialties</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-4xl sm:text-5xl">{specialty.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
                      <p className="text-gray-600">{specialty.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Services Offered</h4>
                      <ul className="space-y-1">
                        {specialty.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Information</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Equipment:</span>
                          <span className="font-medium">{specialty.equipment}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Specialists:</span>
                          <span className="font-medium">{specialty.doctors}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Procedures:</span>
                          <span className="font-medium">{specialty.procedures}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <button className="btn-primary flex-1 text-sm">Book Consultation</button>
                    <button className="flex-1 py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced Technology & Innovation</h2>
            <p className="text-lg sm:text-xl text-gray-600">State-of-the-art medical equipment and cutting-edge procedures</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🤖",
                title: "Robotic Surgery",
                description: "Advanced robotic-assisted surgical procedures for precision and faster recovery"
              },
              {
                icon: "🔬",
                title: "3D Imaging",
                description: "High-resolution 3D imaging for accurate diagnosis and treatment planning"
              },
              {
                icon: "💊",
                title: "Precision Medicine",
                description: "Personalized treatment approaches based on genetic and molecular profiling"
              },
              {
                icon: "📱",
                title: "Digital Health",
                description: "Integrated digital health solutions for better patient care and monitoring"
              },
              {
                icon: "🧬",
                title: "Genetic Testing",
                description: "Advanced genetic testing for early detection and personalized treatment"
              },
              {
                icon: "⚡",
                title: "AI Diagnostics",
                description: "Artificial intelligence-powered diagnostic tools for enhanced accuracy"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-4xl sm:text-5xl mb-4">{tech.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{tech.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 