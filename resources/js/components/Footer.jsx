import React from "react";

const Footer = ({ currentColor }) => {
  const footerSections = [
    {
      icon: "📍",
      title: "Find Us",
      content: "5649 Prefontaine Avenue, Regina SK",
      bgColor: "purple-600"
    },
    {
      icon: "🕐",
      title: "Open Hours",
      content: "Mon - Fri: 9AM - 8PM\nSaturday: 8AM - 9PM\nSunday: 10AM - 6PM",
      bgColor: "cyan-600"
    },
    {
      icon: "💬",
      title: "Connect",
      content: "📱 +1 (306) 216-7657, +1 (306) 550-6583 \n✉️ hello@chaxx.ng\n📸 @chaxxbarbershop",
      bgColor: "emerald-600"
    }
  ];

  return (
    <footer className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-cyan-600 rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className={`w-20 h-20 bg-${currentColor.primary} rounded-3xl flex items-center justify-center shadow-xl transform rotate-12 hover:rotate-45 transition-all duration-500 cursor-pointer`}>
              <span className="text-white text-3xl transform -rotate-12">✂️</span>
            </div>
            <div>
              <h4 className={`text-4xl font-black text-${currentColor.primary} transition-all duration-1000`}>CHAXX BARBERSHOP</h4>
            </div>
          </div>
          <p className="text-gray-300 text-xl font-medium">Where creativity meets craftsmanship ✨</p>
        </div>
        
        <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {footerSections.map((section, index) => (
            <div key={index} className={`bg-${section.bgColor} p-8 rounded-3xl text-white shadow-xl transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer`}>
              <div className="text-4xl mb-4">{section.icon}</div>
              <h4 className="text-2xl font-black mb-4">{section.title}</h4>
              <p className="font-medium leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-700 mt-16 pt-10 text-center">
          <p className="text-gray-400 font-medium">© 2025. Spreading good vibes, one cut at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;