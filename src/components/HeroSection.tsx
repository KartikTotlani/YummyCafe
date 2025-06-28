
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';

interface HeroSectionProps {
  scrollY: number;
}

const HeroSection = ({ scrollY }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-cafe-brown/30 to-amber-900/40"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Optimized Background Image with Parallax - Coffee and Rolls in Candlelit Setting */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Coffee and pastries in candlelit ambiance"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
          decoding="async"
        />
        
        {/* Candlelit overlay effect */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-amber-200/20 via-orange-300/10 to-transparent opacity-60"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding animate-fade-in">
        <h1 className="font-playfair text-4xl sm:text-6xl md:text-8xl font-bold text-cafe-dark-brown mb-6 animate-slide-up drop-shadow-lg">
          Yummy Cafe
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-cafe-brown mb-4 max-w-2xl mx-auto animate-fade-in animation-delay-300 drop-shadow-md">
          Welcome to Chef Anshu's culinary paradise
        </p>
        <p className="text-base sm:text-lg text-cafe-brown mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-500 drop-shadow-md">
          Where every dish tells a story of passion, flavor, and authentic taste
        </p>
        <button 
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-cafe-gold text-cafe-dark-brown font-semibold rounded-full hover:bg-cafe-gold/90 transition-all duration-300 hover:scale-105 animate-scale-in animation-delay-600 shadow-lg hover:shadow-xl"
        >
          Explore Our Menu
          <ArrowDown className="ml-2 w-5 h-5 animate-gentle-bounce" />
        </button>
      </div>

      {/* Enhanced Floating Food Elements with candlelit glow */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-400/30 rounded-full animate-float shadow-lg" 
           style={{ boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' }} />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-orange-400/30 rounded-full animate-float animation-delay-1000 shadow-lg" 
           style={{ boxShadow: '0 0 15px rgba(251, 146, 60, 0.3)' }} />
      <div className="absolute top-1/2 right-8 w-12 h-12 bg-yellow-500/30 rounded-full animate-gentle-bounce shadow-lg" 
           style={{ boxShadow: '0 0 12px rgba(234, 179, 8, 0.3)' }} />
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-red-500/30 rounded-full animate-float animation-delay-500 shadow-lg" />
      <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-amber-300/40 rounded-full animate-gentle-bounce animation-delay-800 shadow-lg" />
    </section>
  );
};

export default HeroSection;
