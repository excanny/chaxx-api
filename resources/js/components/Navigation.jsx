
const Navigation = ({ currentColor }) => {
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
    <nav className="bg-white bg-opacity-95 backdrop-blur-md border-b-2 border-purple-200 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
  <div className="flex items-center space-x-2"> {/* reduced from space-x-4 */}
  <div className="relative group">
    <div className="w-20 h-20 flex items-center justify-center p-2">
      <img
        src="assets/images/ChaxxLogo2cropped.png"
        alt="Logo"
        className="w-20 h-20 object-contain transform -rotate-12 group-hover:-rotate-45 transition-transform"
      />
    </div>
  </div>

  <div className="flex items-center">
    <h1 className={`text-3xl font-extrabold text-${currentColor.primary} transition-all duration-1000`}>
      CHAXX
    </h1>
    <p className="ml-1 text-sm text-gray-600 uppercase tracking-widest font-bold">
      BARBERSHOP
    </p>
  </div>
</div>


        <ul className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={(e) => smoothScrollTo(item.toLowerCase(), e)}
                className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-bold text-lg group"
              >
                {item}
                <div className={`absolute -bottom-2 left-0 w-0 h-1 bg-${currentColor.primary} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
              </button>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-purple-600 text-3xl hover:rotate-90 transition-transform">🌈</button>
      </div>
    </nav>
  );
};

export default Navigation;