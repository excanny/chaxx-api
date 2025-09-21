const GalleryItem = ({ item, index }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-500 shadow-xl hover:shadow-2xl cursor-pointer">
      <img 
        src={item.image} 
        alt={item.title} 
        className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500">
        <div className="absolute bottom-8 left-8 right-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h4 className={`text-3xl font-black text-${item.color} mb-4`}>{item.title}</h4>
          <button className={`bg-${item.color} text-white px-8 py-4 rounded-full font-black hover:shadow-xl transition-all transform hover:scale-110`}>
            Book This Style 🎯
          </button>
        </div>
      </div>
      <div className={`absolute top-4 right-4 w-8 h-8 bg-${item.color} rounded-full flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity`}>
        ✨
      </div>
    </div>
  );
};

export default GalleryItem;