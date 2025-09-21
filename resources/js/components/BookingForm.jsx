const BookingForm = ({ selectedDate, setSelectedDate, preferredTime, setPreferredTime, handleSubmit }) => {
  const dailySlots = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00"];
  const bookedSlots = {
    "2025-09-17": ["11:00", "15:00"],
    "2025-09-18": ["10:00", "14:00"],
  };

  const availableSlots = dailySlots.map((time) => {
    const isBooked = bookedSlots[selectedDate]?.includes(time);
    return { time, isBooked };
  });

  return (
    <div className="bg-gray-50 rounded-3xl p-12 shadow-2xl border-4 border-gray-200 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-6 left-6 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Date Selection */}
      <div className="mb-10 relative z-10">
        <label className={`block text-2xl font-black text-purple-600 mb-4`}>
          🗓️ Pick Your Date
        </label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => {
            setSelectedDate(e.target.value);
            setPreferredTime("");
          }}
          className="w-full border-4 border-purple-200 rounded-2xl px-8 py-5 text-xl font-bold focus:border-purple-500 focus:outline-none transition-all bg-white shadow-lg hover:shadow-xl transform hover:scale-105"
        />
      </div>

      {/* Time Slots */}
      {selectedDate && (
        <div className="mb-12 relative z-10">
          <label className={`block text-2xl font-black text-cyan-600 mb-6`}>
            ⏰ Choose Your Time
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {availableSlots.map(({ time, isBooked }) => (
              <button
                key={time}
                disabled={isBooked}
                onClick={() => setPreferredTime(time)}
                className={`px-6 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-110 ${
                  isBooked
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : preferredTime === time
                    ? "bg-purple-500 text-white shadow-xl scale-110 rotate-3"
                    : "bg-white border-4 border-purple-200 text-purple-600 hover:border-purple-500 hover:bg-purple-50 shadow-lg hover:shadow-xl hover:rotate-1"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="space-y-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-xl font-black text-gray-800 mb-4">✨ Your Name</label>
            <input
              type="text"
              placeholder="What should we call you?"
              className="w-full border-4 border-cyan-200 rounded-2xl px-8 py-5 text-xl font-bold focus:border-cyan-500 focus:outline-none transition-all bg-white shadow-lg hover:shadow-xl transform hover:scale-105"
            />
          </div>
          <div>
            <label className="block text-xl font-black text-gray-800 mb-4">📱 Phone Number</label>
            <input
              type="tel"
              placeholder="+234 xxx xxx xxxx"
              className="w-full border-4 border-cyan-200 rounded-2xl px-8 py-5 text-xl font-bold focus:border-cyan-500 focus:outline-none transition-all bg-white shadow-lg hover:shadow-xl transform hover:scale-105"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-xl font-black text-gray-800 mb-4">🕐 Your Selected Time</label>
          <input
            type="text"
            readOnly
            value={preferredTime}
            placeholder="Pick a time slot from above"
            className="w-full bg-gray-100 border-4 border-gray-300 rounded-2xl px-8 py-5 text-xl font-bold cursor-not-allowed shadow-lg"
          />
        </div>

        <div className="pt-10 text-center">
          <button 
            onClick={handleSubmit}
            className={`group relative bg-emerald-500 hover:bg-emerald-600 text-white px-16 py-6 rounded-full font-black text-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-2xl hover:shadow-3xl cursor-pointer`}
          >
            <span className="relative z-10">Book My Transformation 🚀</span>
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-xl transition-all duration-500"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          </button>
          <p className="text-gray-600 mt-6 font-medium">We'll confirm within 30 minutes! 💫</p>
        </div>
      </div>
    </div>
  );
};


export default BookingForm;