import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroImageSlider = ({ images, autoPlay = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlay || isDragging) return;
    
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, isAutoPlay, interval, isDragging]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

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
    <div className="relative w-full mx-auto bg-white overflow-hidden shadow-2xl">
      {/* Main Slider Container */}
      <div 
        ref={sliderRef}
        className="relative h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[430px] overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Container */}
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover select-none"
                draggable={false}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute top-8 sm:top-12 md:top-16 lg:top-20 left-0 right-0 px-4 sm:px-6 md:px-8 text-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-1 leading-tight">
                    {image.caption}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed mb-2 sm:mb-3 md:mb-4 max-w-2xl mx-auto">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Action Buttons */}
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-0 right-0 px-4 sm:px-6 md:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <button 
                 onClick={(e) => smoothScrollTo('book', e)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              >
                ✂️ Book Appointment
              </button>
              <button onClick={(e) => smoothScrollTo('gallery', e)} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105">
                🎨 View Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-6 top-[50%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-6 top-[50%] -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
        >
          {isAutoPlay ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
          )}
        </button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white px-4 sm:px-6 md:px-8 pt-3 sm:pt-2.5">
        {/* Dots Indicator */}
        <div className="flex items-center justify-center space-x-1 mb-2 sm:mb-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-4 sm:w-6 h-3 bg-gradient-to-r from-purple-500 to-pink-600'
                  : 'w-4 sm:w-6 h-3 sm:h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            >
              {index === currentIndex && (
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
                  style={{
                    width: '100%',
                    animation:
                      isAutoPlay && !isDragging ? `progress ${interval}ms linear` : 'none',
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default HeroImageSlider;