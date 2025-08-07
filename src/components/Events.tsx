'use client';

export default function Events() {
  const events = [
    {
      date: "5 May",
          title: "World Parkinson&apos;s Day Seminar",
    description: "Educational seminar on Parkinson&apos;s disease management",
      color: "from-purple-500 to-purple-600",
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    },
    {
      date: "5 Apr",
      title: "Breast Radiotherapy Workshop",
      description: "Advanced techniques in breast cancer treatment",
      color: "from-pink-500 to-pink-600",
      hoverColor: "hover:from-pink-600 hover:to-pink-700"
    },
    {
      date: "23 Mar",
      title: "Hematology Educational Series",
      description: "Understanding blood disorders and treatments",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:from-red-600 hover:to-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Events & Updates
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest events and medical news
          </p>
        </div>

        {/* Events Grid - Horizontal Scroll on Mobile */}
        <div className="relative">
          {/* Mobile Scroll Container */}
          <div className="flex overflow-x-auto gap-6 pb-4 lg:hidden scrollbar-hide">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden flex-shrink-0 w-80"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${event.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Date Badge */}
                  <div className={`inline-block bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    Event {event.date}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button 
                      className={`inline-flex items-center bg-gradient-to-r ${event.color} ${event.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                      type="button"
                      suppressHydrationWarning
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold">Upcoming</div>
                      <div>Medical Event</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient Header */}
                <div className={`h-3 bg-gradient-to-r ${event.color}`}></div>
                
                {/* Content */}
                <div className="p-6">
                  {/* Date Badge */}
                  <div className={`inline-block bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                    Event {event.date}
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button 
                      className={`inline-flex items-center bg-gradient-to-r ${event.color} ${event.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg`}
                      type="button"
                      suppressHydrationWarning
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="text-sm text-gray-500">
                      <div className="font-semibold">Upcoming</div>
                      <div>Medical Event</div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators for Mobile */}
          <div className="flex justify-center mt-6 lg:hidden">
            <div className="flex space-x-2">
              {events.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected with Medical Updates
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest medical news, event updates, and healthcare insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                suppressHydrationWarning
              />
              <button 
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                type="button"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Annual Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">1000+</div>
            <div className="text-gray-600">Participants</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600">Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
} 