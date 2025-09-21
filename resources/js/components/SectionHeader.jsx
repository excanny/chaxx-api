const SectionHeader = ({ badge, title, subtitle, badgeColor, titleColor }) => {
  return (
    <div className="text-center mb-20">
      <div className={`inline-block bg-${badgeColor} text-white px-10 py-4 rounded-full font-black text-xl mb-8 transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-xl cursor-pointer`}>
        {badge}
      </div>
      <h3 className={`text-6xl font-black text-${titleColor} mb-6`}>
        {title}
      </h3>
      <p className="text-gray-600 text-xl max-w-3xl mx-auto font-medium">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;