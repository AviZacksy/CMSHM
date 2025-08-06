import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="about" />

      {/* Hero Section */}
      <HeroSection 
        title="About MediCare Hospital"
        subtitle="Leading the way in healthcare innovation with world-class medical services and compassionate care."
        showButtons={false}
      />

      {/* About Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                To provide exceptional healthcare services that improve the quality of life for our patients through advanced medical technology, expert healthcare professionals, and compassionate care.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                We are committed to delivering world-class medical care with the highest standards of safety, quality, and patient satisfaction.
              </p>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm sm:text-base text-gray-600">Expert Doctors</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm sm:text-base text-gray-600">Specialties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-sm sm:text-base text-gray-600">Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <div className="text-4xl sm:text-6xl mb-4 text-center">🏥</div>
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-4">State-of-the-Art Facilities</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">Advanced Medical Equipment</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">24/7 Emergency Services</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">Modern Operating Theaters</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">Intensive Care Units</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">Diagnostic Imaging Center</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-sm sm:text-base">Laboratory Services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600">The principles that guide our healthcare delivery</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Excellence",
                icon: "⭐",
                description: "We strive for excellence in every aspect of patient care and medical services."
              },
              {
                title: "Compassion",
                icon: "❤️",
                description: "We treat every patient with empathy, respect, and understanding."
              },
              {
                title: "Innovation",
                icon: "🔬",
                description: "We embrace the latest medical technologies and treatment methods."
              }
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl sm:text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-600">Meet the experts leading our healthcare institution</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Dr. Robert Wilson",
                position: "Chief Executive Officer",
                image: "👨‍⚕️",
                experience: "30+ years in healthcare management"
              },
              {
                name: "Dr. Emily Chen",
                position: "Chief Medical Officer",
                image: "👩‍⚕️",
                experience: "25+ years in clinical practice"
              },
              {
                name: "Dr. James Rodriguez",
                position: "Chief of Surgery",
                image: "👨‍⚕️",
                experience: "20+ years in surgical procedures"
              }
            ].map((member, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl sm:text-6xl mb-4">{member.image}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.position}</p>
                <p className="text-sm sm:text-base text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 