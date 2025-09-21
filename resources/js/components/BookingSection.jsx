import SectionHeader from "./SectionHeader";
import BookingForm from "./BookingForm";

const BookingSection = ({ selectedDate, setSelectedDate, preferredTime, setPreferredTime, handleSubmit }) => {
  return (
    <section id="book" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader 
          badge="📅 Let's Create Magic"
          title="Book Your Slot"
          subtitle="Ready for your transformation? Pick your date and time! ⚡"
          badgeColor="emerald-500"
          titleColor="emerald-600"
        />

        <BookingForm 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          preferredTime={preferredTime}
          setPreferredTime={setPreferredTime}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default BookingSection;