import FloatingIcons from "./FloatingIcons";
import ColorfulDivider from "./ColorfulDivider";
import CTASection from "./CTASection";
import SocialProofAvatars from "./SocialProofAvatars";
import HeroImageSlider from "./HeroImageSlider";


const HeroSection = ({ 
  currentColor = { primary: 'purple-600', secondary: 'purple-700' }, 
  colorCombos = ['from-purple-400 to-pink-400', 'from-blue-400 to-cyan-400', 'from-green-400 to-teal-400', 'from-orange-400 to-red-400', 'from-indigo-400 to-purple-400']
}) => {
  // Hero slider images combining best work, team, and transformations
  const heroImages = [
    {
      src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Master Barber at Work",
      caption: "Master Craftsmanship",
      description: "15+ years of perfecting the art of barbering"
    },
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop&crop=face",
      alt: "Perfect Fade Transformation",
      caption: "Flawless Transformations",
      description: "From classic to contemporary - your perfect look awaits"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
      alt: "Modern Pompadour Style",
      caption: "Trending Styles",
      description: "Stay ahead with the latest cuts and techniques"
    },
    {
      src: "https://media.istockphoto.com/id/466956444/photo/little-boy-getting-his-hair-cut-in-barber-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=GZs6nudGJ0P7PLrsS1eRcpZt6wZ_7UIce47HR2zpHyM=",
      alt: "Professional Barbershop Environment",
      caption: "Premium Experience",
      description: "Luxury service in a welcoming atmosphere"
    },
    {
      src: "https://media.istockphoto.com/id/1973194125/photo/hairdresser-shaping-eyebrows-of-man-client-using-razor-in-barbershop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aO_xLIVQ2a2LJ_U56cwUlH9DcIbj1jwxnKAPsh8CBnc=",
      alt: "Beard Grooming Service",
      caption: "Complete Grooming",
      description: "From cuts to beard styling - we perfect every detail"
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden h-85 bg-white">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Floating Icons */}
      <FloatingIcons />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="text-center">
         
          {/* Hero Image Slider replacing main heading */}
          <div className="mb-12">
            <HeroImageSlider 
              images={heroImages}
              autoPlay={true}
              interval={5000}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
