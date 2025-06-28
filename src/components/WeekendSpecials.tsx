
import { Clock, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const weekendSpecials = [
  {
    id: 1,
    name: 'Weekend Platter Supreme',
    description: 'A combination of our best dishes including Devil Momos, Manchurian, and Special Rolls.',
    originalPrice: '₹300',
    specialPrice: '₹220',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3',
    discount: '25% OFF'
  },
  {
    id: 2,
    name: 'Chef\'s Weekend Special Coffee',
    description: 'Premium blend coffee with a hint of cardamom and cinnamon, served with complimentary cookies.',
    originalPrice: '₹120',
    specialPrice: '₹80',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    discount: '35% OFF'
  }
];

const WeekendSpecials = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const dayOfWeek = now.getDay();
      const currentHour = now.getHours();
      
      // Calculate time until Monday 12 AM (end of weekend)
      let targetTime;
      if (dayOfWeek === 0) { // Sunday
        targetTime = new Date(now);
        targetTime.setDate(now.getDate() + 1);
        targetTime.setHours(0, 0, 0, 0);
      } else if (dayOfWeek === 6) { // Saturday
        targetTime = new Date(now);
        targetTime.setDate(now.getDate() + 2);
        targetTime.setHours(0, 0, 0, 0);
      } else {
        // If it's not weekend, show time until next Saturday
        targetTime = new Date(now);
        targetTime.setDate(now.getDate() + (6 - dayOfWeek));
        targetTime.setHours(0, 0, 0, 0);
      }

      const difference = targetTime.getTime() - now.getTime();
      
      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft({ hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const isWeekend = () => {
    const today = new Date().getDay();
    return today === 0 || today === 6; // Sunday or Saturday
  };

  return (
    <section id="weekend-specials" className="py-20 bg-gradient-to-br from-cafe-brown/10 to-cafe-gold/10">
      <div className="section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-6">
            Weekend Specials
          </h2>
          <p className="text-xl text-cafe-brown max-w-3xl mx-auto mb-8">
            Exclusive weekend treats crafted specially for you by Chef Anshu
          </p>
          
          {isWeekend() ? (
            <div className="bg-white rounded-2xl p-6 max-w-md mx-auto shadow-lg animate-pulse">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-cafe-gold mr-2" />
                <span className="font-semibold text-cafe-dark-brown">Weekend Special Ends In:</span>
              </div>
              <div className="flex justify-center space-x-4 text-2xl font-bold text-cafe-brown">
                <div className="text-center">
                  <div className="bg-cafe-gold text-white px-3 py-2 rounded-lg">{timeLeft.hours}</div>
                  <div className="text-sm mt-1">Hours</div>
                </div>
                <div className="text-center">
                  <div className="bg-cafe-gold text-white px-3 py-2 rounded-lg">{timeLeft.minutes}</div>
                  <div className="text-sm mt-1">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="bg-cafe-gold text-white px-3 py-2 rounded-lg">{timeLeft.seconds}</div>
                  <div className="text-sm mt-1">Seconds</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-cafe-gold text-cafe-dark-brown px-6 py-3 rounded-full inline-block font-semibold animate-gentle-bounce">
              Next Weekend Special starts in {timeLeft.hours} hours!
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {weekendSpecials.map((special, index) => (
            <div 
              key={special.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative">
                <img 
                  src={special.image} 
                  alt={special.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold animate-float">
                  {special.discount}
                </div>
                <div className="absolute top-4 right-4 bg-cafe-gold text-cafe-dark-brown px-3 py-1 rounded-full text-sm font-semibold flex items-center animate-gentle-bounce">
                  <Star className="w-4 h-4 mr-1" />
                  Weekend Only
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-cafe-dark-brown mb-3 group-hover:text-cafe-gold transition-colors duration-300">
                  {special.name}
                </h3>
                <p className="text-cafe-brown leading-relaxed mb-4">
                  {special.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500 line-through text-lg">
                      {special.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-red-500">
                      {special.specialPrice}
                    </span>
                  </div>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-cafe-gold to-yellow-400 text-cafe-dark-brown font-bold rounded-lg hover:from-yellow-400 hover:to-cafe-gold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Order Weekend Special
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeekendSpecials;
