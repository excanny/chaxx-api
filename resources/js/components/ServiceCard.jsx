const ServiceCard = ({ service }) => {


     // Universal smooth scroll function for any hash link
  const smoothScrollTo = (targetId, e) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  };


  return (
    <div className="group relative bg-gradient-to-br from-white via-gray-50/30 to-white p-6 rounded-2xl hover:shadow-2xl hover:shadow-black/10 transition-all duration-700 transform hover:-translate-y-3 hover:rotate-1 border border-gray-300 overflow-hidden h-full flex flex-col">
      {/* Animated gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/0 via-${service.color}/5 to-${service.color}/10 opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
      
      {/* Floating accent elements */}
      <div className={`absolute top-4 right-4 w-2 h-2 bg-${service.color} rounded-full opacity-20 group-hover:opacity-60 group-hover:scale-150 transition-all duration-500`}></div>
      <div className={`absolute bottom-8 left-6 w-1 h-1 bg-${service.color} rounded-full opacity-30 group-hover:opacity-80 group-hover:scale-200 transition-all duration-700`}></div>
      
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and header section */}
        <div className="text-center mb-4">
          <div className={`relative w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-${service.color}/90 to-${service.color} shadow-lg shadow-${service.color}/25 flex items-center justify-center group-hover:shadow-xl group-hover:shadow-${service.color}/40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}>
            <div className={`absolute inset-0 bg-${service.color} rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
            <span className="relative text-2xl filter drop-shadow-sm">{service.emoji}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {service.desc}
          </p>
        </div>

        {/* Features - grows to fill space */}
        <div className="flex-grow mb-4">
          <div className="space-y-2">
            {service.features.slice(0, 2).map((feature, idx) => (
              <div 
                key={idx}
                className="flex items-start text-gray-700 text-xs group-hover:translate-x-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className={`w-1.5 h-1.5 bg-${service.color} rounded-full mt-1.5 mr-3 flex-shrink-0 group-hover:shadow-lg group-hover:shadow-${service.color}/50 transition-all duration-300`}></div>
                <span className="leading-relaxed font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Time badge */}
        <div className="flex justify-center mb-4">
          <span className={`inline-flex items-center px-3 py-1 bg-${service.color}/10 text-${service.color} text-xs font-bold rounded-full border border-${service.color}/20 group-hover:bg-${service.color}/15 group-hover:border-${service.color}/30 transition-all duration-300`}>
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {service.time}
          </span>
        </div>

        {/* Price section - always at bottom */}
        <div className="mt-auto">
          <div className="text-center">
            <div className={`text-4xl font-black text-${service.color} mb-4 group-hover:scale-105 transition-all duration-300 filter drop-shadow-sm`}>
              {service.price}
            </div>
            
            {/* CTA button */}
            <button onClick={(e) => smoothScrollTo('book', e)} className={`w-full py-3 px-6 bg-gradient-to-r from-${service.color}/90 to-${service.color} text-white font-bold rounded-xl shadow-lg shadow-${service.color}/25 hover:shadow-xl hover:shadow-${service.color}/40 transform hover:scale-105 active:scale-95 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;