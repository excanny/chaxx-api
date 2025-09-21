const CTASection = ({ currentColor }) => (
  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
    <button className={`bg-${currentColor.primary} hover:bg-${currentColor.secondary} text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
      Book Now ✂️
    </button>
    <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-4 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300">
      View Gallery 📸
    </button>
  </div>
);

export default CTASection;