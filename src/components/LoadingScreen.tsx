
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [fillPercent, setFillPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFillPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cafe-brown via-cafe-dark-brown to-cafe-forest-green flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-cafe-gold/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-cafe-gold rounded-full animate-spin"></div>
            
            {/* Coffee Cup Animation */}
            <div className="absolute inset-4 bg-cafe-cream rounded-full flex items-center justify-center">
              <div 
                className="w-16 h-12 bg-cafe-brown rounded-b-full transition-all duration-100 ease-out"
                style={{ 
                  height: `${fillPercent * 0.48}px`,
                  maxHeight: '48px'
                }}
              ></div>
            </div>
          </div>
          
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-gold mb-4 animate-pulse">
            Yummy Cafe
          </h1>
          <p className="text-cafe-cream text-xl animate-fade-in">
            Taking you to the world of Chef Anshu...
          </p>
        </div>
        
        <div className="w-64 h-2 bg-cafe-brown/30 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cafe-gold to-yellow-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${fillPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
