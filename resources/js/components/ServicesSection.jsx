import SectionHeader from "./SectionHeader";
import ServiceCard from "./ServiceCard";
 

const ServicesSection = ({ currentColor }) => {
  const services = [
    { 
      name: "Haircuts", 
      price: "$20", 
      time: "60 min", 
      color: "purple-500", 
      emoji: "🔥", 
      desc: "Modern cuts with creative flair and personality",
      features: ["Style consultation", "Premium products", "Photo session"]
    },
    { 
      name: "Shaving & Beard Care", 
      price: "$25", 
      time: "90 min", 
      color: "cyan-500", 
      emoji: "🎨", 
      desc: "Bold colors and artistic styling that turns heads",
      features: ["Color matching", "Artistic design", "Maintenance kit"]
    },
    { 
      name: "Hair Dye", 
      price: "$15", 
      time: "45 min", 
      color: "emerald-500", 
      emoji: "⚡", 
      desc: "Crisp fades with modern twists and clean lines",
      features: ["Precision cutting", "Beard styling", "Hot towel finish"]
    },
    { 
      name: "Facial & Grooming Extras", 
      price: "$35", 
      time: "120 min", 
      color: "orange-500", 
      emoji: "✨", 
      desc: "Complete style transformation that changes everything",
      features: ["Full consultation", "Cut & color", "Styling tutorial", "Product bundle"]
    }
  ];

  return (
    <section id="services" className="pt-19 bg-white relative overflow-hidden mb-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-cyan-400 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-pink-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader 
          badge="Choose Your Vibe"
          title="Signature Services"
          subtitle="From classic cuts to wild transformations – we've got the skills to match your wildest dreams! 🎨"
          badgeColor={currentColor.primary}
          titleColor={currentColor.primary}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8">
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;