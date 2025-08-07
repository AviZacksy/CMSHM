import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import QuickActions from '@/components/QuickActions';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header currentPage="home" />

      {/* Hero Section */}
      <HeroSection 
        title="World-Class Healthcare at Your Doorstep"
        subtitle="Experience advanced medical care with state-of-the-art technology and compassionate healthcare professionals."
      />

      {/* Quick Actions */}
      <QuickActions />





      {/* Events & Updates */}
      <Events />

      {/* Patient Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}
