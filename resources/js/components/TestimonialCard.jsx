const TestimonialCard = ({ testimonial }) => {
  return (
    <div className={`bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border-2 border-transparent hover:border-gray-200 overflow-hidden group cursor-pointer`}>
      <div className={`absolute inset-0 bg-${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
      <div className="relative z-10 text-center">
        <div className={`w-20 h-20 bg-${testimonial.color} rounded-full flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
          😍
        </div>
        <div className="flex justify-center mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl hover:scale-125 transition-transform cursor-pointer">⭐</span>
          ))}
        </div>
      </div>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed italic font-medium">"{testimonial.text}"</p>
      <div className="text-center">
        <p className={`font-black text-xl text-${testimonial.color}`}>— {testimonial.name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;