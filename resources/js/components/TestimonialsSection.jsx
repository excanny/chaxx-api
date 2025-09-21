import SectionHeader from "./SectionHeader";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    { name: "Alex K.", rating: 5, text: "OMG! They totally transformed my look. I feel like a completely new person! The colors are incredible! 🔥", color: "purple-500" },
    { name: "Jordan M.", rating: 5, text: "Best barbershop in Lagos! The vibe is amazing and my fade is absolutely perfect. Will definitely be back! ✨", color: "cyan-500" },
    { name: "Sam O.", rating: 5, text: "I was nervous about trying something bold, but they made me feel so comfortable. Love my new style! 💫", color: "emerald-500" }
  ];

  return (
    <section className="py-28 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader 
          badge="💬 Happy Vibes"
          title="Client Love"
          subtitle=""
          badgeColor="pink-500"
          titleColor="pink-600"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;