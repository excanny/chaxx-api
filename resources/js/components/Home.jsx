
import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import ServicesSection from "./ServicesSection";
import GallerySection from "./GallerySection";
import BookingSection from "./BookingSection";
import TestimonialsSection from "./TestimonialsSection";
import Footer from "./Footer";
import CustomStyles from "./CustomStyles";

  

const useColorAnimation = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  
  const colorCombos = [
    { primary: "purple-600", accent: "purple-500", light: "purple-100" },
    { primary: "blue-600", accent: "blue-500", light: "blue-100" },
    { primary: "emerald-600", accent: "emerald-500", light: "emerald-100" },
    { primary: "orange-600", accent: "orange-500", light: "orange-100" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prev) => (prev + 1) % colorCombos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return colorCombos[currentColorIndex];
};

export default function Home() {
  const [selectedDate, setSelectedDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const currentColor = useColorAnimation();
  
  const colorCombos = [
    { primary: "purple-600", accent: "purple-500", light: "purple-100" },
    { primary: "blue-600", accent: "blue-500", light: "blue-100" },
    { primary: "emerald-600", accent: "emerald-500", light: "emerald-100" },
    { primary: "orange-600", accent: "orange-500", light: "orange-100" }
  ];

  const handleSubmit = () => {
    if (!preferredTime) {
      alert("🎨 Please select an available time slot before booking!");
    } else {
      alert("🎉 Awesome! Your booking is confirmed! We'll contact you shortly.");
    }
  };

  return (
    <div className="bg-indigo-50 text-gray-900 font-sans overflow-hidden">
      <Navigation currentColor={currentColor} />
      <HeroSection currentColor={currentColor} colorCombos={colorCombos} />
      <ServicesSection currentColor={currentColor} />
      <GallerySection />
      <BookingSection 
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        preferredTime={preferredTime}
        setPreferredTime={setPreferredTime}
        handleSubmit={handleSubmit}
      />
      <TestimonialsSection />
      <Footer currentColor={currentColor} />
      <CustomStyles />
    </div>
  );
}