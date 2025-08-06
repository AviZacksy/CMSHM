import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EmergencyContact from '@/components/EmergencyContact';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="contact" />

      {/* Hero Section */}
      <HeroSection 
        title="Contact Us"
        subtitle="Get in touch with us for appointments, inquiries, or emergency care. We&apos;re here to help you 24/7."
        showButtons={false}
      />

      {/* Emergency Contact */}
      <EmergencyContact />

      {/* Contact Information */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Get In Touch</h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Address</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      123 Medical Center Drive<br />
                      Healthcare District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Phone Numbers</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      General: +91-22-61305000<br />
                      Emergency: +91-22-61305005<br />
                      Toll Free: 1-800-221-166<br />
                      WhatsApp: +91-9137943057
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Email</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      info@medicare.com<br />
                      appointments@medicare.com<br />
                      emergency@medicare.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-xl sm:text-2xl">🕒</div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Working Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      OPD: Monday - Saturday: 8:00 AM - 8:00 PM<br />
                      Emergency: 24/7<br />
                      Sunday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg sm:text-xl text-gray-600">Visit our hospital for world-class healthcare services</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-200 rounded-lg h-64 sm:h-80 lg:h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-6xl mb-4">🗺️</div>
                    <p className="text-base sm:text-lg text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Map integration would go here</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-4">How to Reach</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">🚇 By Metro</h4>
                    <p className="text-sm sm:text-base text-gray-600">Nearest station: Medical Center Metro (Line 1)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">🚌 By Bus</h4>
                    <p className="text-sm sm:text-base text-gray-600">Bus routes: 101, 205, 308</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">🚗 By Car</h4>
                    <p className="text-sm sm:text-base text-gray-600">Parking available on premises</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">🚕 By Taxi</h4>
                    <p className="text-sm sm:text-base text-gray-600">Direct access from main road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 