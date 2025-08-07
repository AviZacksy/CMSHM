import Link from 'next/link';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  showButtons?: boolean;
}

export default function HeroSection({ 
  title = "World-Class Healthcare at Your Doorstep",
  subtitle = "Experience advanced medical care with state-of-the-art technology and compassionate healthcare professionals.",
  showButtons = true 
}: HeroSectionProps) {
  return (
         <section className="relative bg-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-8 w-24 h-24 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-16 left-1/3 w-12 h-12 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-purple-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-5 w-16 h-16 bg-blue-200 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-32 right-8 w-24 h-24 bg-indigo-200 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-16 left-1/3 w-12 h-12 bg-blue-200 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
             <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                                               {/* Doctor Image - Mobile First */}
             <div className="lg:hidden flex justify-center mb-8 -mt-8">
               <div className="w-full h-100 shadow-2xl">
                 <img 
                   src="/photos/doctor.webp" 
                   alt="Medical Doctor" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
           
           {/* Content */}
           <div className="text-center lg:text-left">
            <div className="mb-6 sm:mb-8">
              {/* Animated Badge */}
              <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                🏆 Leading Healthcare Provider
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {title}
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {subtitle}
              </p>
            </div>
            
                         {showButtons && (
               <div className="flex flex-row gap-3 justify-center lg:justify-start">
                 <Link 
                   href="/appointment" 
                   className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-sm sm:text-base rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                 >
                   <span className="relative z-10">Schedule Appointment</span>
                   <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </Link>
                 <Link 
                   href="/doctors" 
                   className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-transparent text-blue-600 font-semibold text-sm sm:text-base rounded-xl border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl overflow-hidden"
                 >
                   <span className="relative z-10">Find Doctor</span>
                   <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 </Link>
               </div>
             )}
            
            {/* Mobile Stats */}
            <div className="mt-8 sm:hidden grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Expert Doctors</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
            </div>
          </div>
          
                                                                                       {/* Doctor Image - Desktop Only */}
             <div className="hidden lg:flex relative justify-center">
               <div className="w-[500px] h-[500px] shadow-2xl">
                 <img 
                   src="/photos/doctor.webp" 
                   alt="Medical Doctor" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
        </div>
        
        {/* Desktop Stats */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 lg:mt-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Expert Doctors</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Specialties</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-gray-600 font-medium">Happy Patients</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Emergency Care</div>
          </div>
        </div>
      </div>
    </section>
  );
} 