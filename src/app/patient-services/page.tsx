import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

export default function PatientServicesPage() {
  const services = [
    {
      category: "Appointment Services",
      icon: "📅",
      services: [
        {
          name: "Online Appointment Booking",
          description: "Book appointments with specialists through our user-friendly online portal",
          features: ["24/7 availability", "Instant confirmation", "Reminder notifications"]
        },
        {
          name: "Telemedicine Consultations",
          description: "Virtual consultations with doctors from the comfort of your home",
          features: ["Video consultations", "Prescription delivery", "Follow-up care"]
        },
        {
          name: "Emergency Appointments",
          description: "Priority booking for urgent medical consultations",
          features: ["Same-day appointments", "Emergency hotline", "Quick response"]
        }
      ]
    },
    {
      category: "Patient Care Services",
      icon: "🏥",
      services: [
        {
          name: "Patient Navigation",
          description: "Dedicated patient navigators to guide you through your healthcare journey",
          features: ["Personal assistance", "Appointment coordination", "Insurance support"]
        },
        {
          name: "Health Checkup Packages",
          description: "Comprehensive health screening packages for different age groups",
          features: ["Preventive care", "Early detection", "Detailed reports"]
        },
        {
          name: "Home Healthcare",
          description: "Professional medical care services delivered at your doorstep",
          features: ["Nursing care", "Physiotherapy", "Medical equipment"]
        }
      ]
    },
    {
      category: "Support Services",
      icon: "🤝",
      services: [
        {
          name: "Patient Education",
          description: "Educational resources and programs to help patients understand their health",
          features: ["Health workshops", "Educational materials", "Support groups"]
        },
        {
          name: "Financial Assistance",
          description: "Support with medical expenses and insurance claims",
          features: ["Insurance guidance", "Payment plans", "Financial counseling"]
        },
        {
          name: "Language Support",
          description: "Multilingual support for international and diverse patients",
          features: ["Translation services", "Multilingual staff", "Cultural sensitivity"]
        }
      ]
    }
  ];

  const visitorInfo = [
    {
      title: "Visiting Hours",
      icon: "🕒",
      details: [
        "General Visitors: 10:00 AM - 8:00 PM",
        "ICU Visitors: 11:00 AM - 12:00 PM, 5:00 PM - 6:00 PM",
        "Pediatric Ward: Parents allowed 24/7",
        "Emergency: Immediate family only"
      ]
    },
    {
      title: "Hospital Amenities",
      icon: "🏢",
      details: [
        "Cafeteria & Food Services",
        "ATM & Banking Services",
        "Pharmacy (24/7)",
        "Gift Shop & Convenience Store",
        "Wi-Fi Access",
        "Prayer Rooms",
        "Parking Facilities"
      ]
    },
    {
      title: "Patient Accommodation",
      icon: "🛏️",
      details: [
        "Private Rooms with AC",
        "Semi-Private Rooms",
        "General Wards",
        "ICU & CCU Beds",
        "Family Accommodation",
        "Room Service Available"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="patient-services" />
      
      <HeroSection 
        title="Patient Care Services"
        subtitle="Comprehensive healthcare services designed to provide exceptional patient experience and support throughout your medical journey."
        showButtons={false}
      />

      {/* Quick Actions */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: "📱", title: "Book Appointment", desc: "Online appointment booking" },
              { icon: "📋", title: "Patient Portal", desc: "Access your medical records" },
              { icon: "📞", title: "24/7 Helpline", desc: "Emergency support available" },
              { icon: "🏥", title: "Find Department", desc: "Locate hospital departments" }
            ].map((action, index) => (
              <div key={index} className="card text-center">
                <div className="text-3xl sm:text-4xl mb-4">{action.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-2">{action.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{action.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Patient Services</h2>
            <p className="text-lg sm:text-xl text-gray-600">Comprehensive care and support for all our patients</p>
          </div>
          
          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl sm:text-4xl mr-4">{category.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                            <span className="text-green-500 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visitor Information</h2>
            <p className="text-lg sm:text-xl text-gray-600">Everything you need to know for your hospital visit</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {visitorInfo.map((info, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="text-2xl sm:text-3xl mr-3">{info.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{info.title}</h3>
                </div>
                <ul className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Rights & Responsibilities */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patient Rights & Responsibilities</h2>
            <p className="text-lg sm:text-xl text-gray-600">Understanding your rights and responsibilities as a patient</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Patient Rights</h3>
              <ul className="space-y-3">
                {[
                  "Right to receive quality healthcare",
                  "Right to be informed about treatment options",
                  "Right to privacy and confidentiality",
                  "Right to refuse treatment",
                  "Right to file complaints",
                  "Right to access medical records",
                  "Right to choose healthcare providers",
                  "Right to emergency care"
                ].map((right, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">{right}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Patient Responsibilities</h3>
              <ul className="space-y-3">
                {[
                  "Provide accurate medical history",
                  "Follow prescribed treatment plans",
                  "Respect hospital policies and staff",
                  "Pay medical bills promptly",
                  "Keep appointments or cancel in advance",
                  "Inform about changes in health status",
                  "Respect other patients' privacy",
                  "Maintain hospital property"
                ].map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Need Help?</h2>
            <p className="text-lg sm:text-xl text-gray-600">Our patient support team is here to help you</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📞",
                title: "Patient Helpline",
                contact: "+91-22-61305000",
                description: "24/7 patient support and assistance"
              },
              {
                icon: "📧",
                title: "Email Support",
                contact: "patientcare@medicare.com",
                description: "Send us your queries and feedback"
              },
              {
                icon: "💬",
                title: "Live Chat",
                contact: "Available on website",
                description: "Real-time chat with our support team"
              }
            ].map((support, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-4">{support.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{support.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{support.contact}</p>
                <p className="text-sm text-gray-600">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 