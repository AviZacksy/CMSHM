'use client';

export default function QuickActions() {
  const actions = [
    {
      title: "Book Appointment",
      subtitle: "Online Consultation",
      description: "Schedule your consultation with our expert doctors online",
      href: "/appointment",
      accent: "01",
      position: "left"
    },
    {
      title: "Patient Portal",
      subtitle: "Digital Records",
      description: "Access your medical records and test results securely",
      href: "/portal",
      accent: "02",
      position: "right"
    },
    {
      title: "Emergency Care",
      subtitle: "24/7 Support",
      description: "24/7 emergency medical services and ambulance support",
      href: "/emergency",
      accent: "03",
      position: "left"
    },
    {
      title: "Lab Services",
      subtitle: "Diagnostics",
      description: "Comprehensive diagnostic and laboratory testing services",
      href: "/lab-services",
      accent: "04",
      position: "right"
    },
    {
      title: "Pharmacy",
      subtitle: "Medications",
      description: "In-house pharmacy with prescription and OTC medications",
      href: "/pharmacy",
      accent: "05",
      position: "left"
    },
    {
      title: "Telemedicine",
      subtitle: "Virtual Care",
      description: "Virtual consultations with our healthcare professionals",
      href: "/telemedicine",
      accent: "06",
      position: "right"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-4 text-xs font-mono text-gray-400 tracking-widest uppercase mb-6">
            <div className="w-8 h-px bg-gray-300"></div>
            <span>Healthcare Services</span>
            <div className="w-8 h-px bg-gray-300"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-none">
            Quick Actions
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our healthcare services quickly and easily
          </p>
        </div>

        {/* Actions Grid - Asymmetric Layout */}
        <div className="space-y-16">
                     {/* Mobile Grid Layout */}
           <div className="lg:hidden">
             <div className="grid grid-cols-1 gap-4">
               {actions.map((action, index) => (
                 <div 
                   key={index} 
                   className="group bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-all duration-300"
                 >
                   {/* Content */}
                   <div className="flex items-center justify-between mb-3">
                     <div>
                       <h3 className="text-lg font-semibold text-gray-900">
                         {action.title}
                       </h3>
                       <div className="text-xs text-gray-500">
                         {action.subtitle}
                       </div>
                     </div>
                     <div className="text-2xl font-bold text-gray-300">
                       {action.accent}
                     </div>
                   </div>
                   
                   {/* Description */}
                   <p className="text-gray-600 text-sm mb-4">
                     {action.description}
                   </p>
                   
                   {/* Simple Button */}
                   <button 
                     className="w-full py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors duration-300"
                     type="button"
                     suppressHydrationWarning
                   >
                     Get Started
                   </button>
                 </div>
               ))}
             </div>
           </div>

          {/* Desktop Asymmetric Layout */}
          <div className="hidden lg:block space-y-16">
            {actions.map((action, index) => (
              <div 
                key={index} 
                className={`group relative ${action.position === 'right' ? 'lg:ml-32' : 'lg:mr-32'}`}
              >
                {/* Card Container */}
                <div className={`relative bg-white border-2 border-gray-100 rounded-3xl p-12 hover:border-gray-300 hover:shadow-2xl transition-all duration-700 overflow-hidden ${action.position === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex flex-col lg:flex-row lg:items-center lg:gap-16`}>
                  
                  {/* Background Pattern */}
                  <div className={`absolute top-0 ${action.position === 'right' ? 'left-0' : 'right-0'} w-64 h-64 bg-gray-50 rounded-full -translate-y-32 ${action.position === 'right' ? '-translate-x-32' : 'translate-x-32'} group-hover:scale-125 transition-transform duration-700`}></div>
                  
                  {/* Content Side */}
                  <div className={`relative z-10 flex-1 ${action.position === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Accent Number */}
                    <div className="text-8xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500 mb-6">
                      {action.accent}
                    </div>
                    
                    {/* Title and Subtitle */}
                    <div className="mb-6">
                      <h3 className="text-3xl font-black text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                        {action.title}
                      </h3>
                      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                        {action.subtitle}
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                      {action.description}
                    </p>
                    
                    {/* Creative Button */}
                    <div className="relative">
                      <button 
                        className="group/btn relative px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-500 overflow-hidden"
                        type="button"
                        suppressHydrationWarning
                      >
                        <span className="relative z-10">Get Started</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"></div>
                      </button>
                      
                      {/* Button Accent Line */}
                      <div className="absolute -bottom-2 left-0 w-0 h-1 bg-gray-900 group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                  
                  {/* Visual Side */}
                  <div className={`relative z-10 flex-1 ${action.position === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Creative Visual Element */}
                    <div className="relative">
                      <div className={`w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl group-hover:scale-105 transition-transform duration-700 ${action.position === 'right' ? 'lg:ml-8' : 'lg:mr-8'}`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-6xl font-black text-gray-300 group-hover:text-gray-400 transition-colors duration-500">
                            {action.accent}
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className={`absolute top-4 ${action.position === 'right' ? 'left-4' : 'right-4'} w-8 h-8 bg-gray-300 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                      <div className={`absolute bottom-4 ${action.position === 'right' ? 'right-4' : 'left-4'} w-6 h-6 bg-gray-400 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100`}></div>
                    </div>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/0 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-20 border-2 border-gray-200 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full translate-x-40 translate-y-40 opacity-20"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-4 text-xs font-mono text-gray-400 tracking-widest uppercase mb-6">
                <div className="w-6 h-px bg-gray-300"></div>
                <span>Need Assistance?</span>
                <div className="w-6 h-px bg-gray-300"></div>
              </div>
              <h3 className="text-4xl font-black text-gray-900 mb-8">
                Need Help Getting Started?
              </h3>
              <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-xl">
                Our patient care team is here to help you navigate our services and get the care you need.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button 
                  className="group relative px-12 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all duration-500 overflow-hidden"
                  type="button"
                  suppressHydrationWarning
                >
                  <span className="relative z-10">Contact Support</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
                <button 
                  className="group relative px-12 py-5 border-2 border-gray-900 text-gray-900 font-bold rounded-2xl hover:bg-gray-900 hover:text-white transition-all duration-500 overflow-hidden"
                  type="button"
                  suppressHydrationWarning
                >
                  <span className="relative z-10">View All Services</span>
                  <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 