
import { Clock, MapPin } from 'lucide-react';

const OrderInfoSection = () => {
  return (
    <section id="order" className="py-20 bg-cafe-warm-white">
      <div className="section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-6">
            How to Order
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Dine-In Option */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift animate-slide-up">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-cafe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-cafe-dark-brown" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-cafe-dark-brown mb-4">
                Dine-In Experience
              </h3>
              <p className="text-cafe-brown text-lg">
                Visit us for the full artisan café experience
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cafe-gold mr-3" />
                <span className="text-cafe-brown">Open Daily: 7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cafe-gold mr-3" />
                <span className="text-cafe-brown">123 Artisan Street, Coffee District</span>
              </div>
            </div>

            <button className="w-full mt-6 py-3 bg-cafe-brown text-white rounded-lg font-semibold hover:bg-cafe-dark-brown transition-all duration-300 hover:scale-105">
              View Location on Map
            </button>
          </div>

          {/* Coming Soon Delivery */}
          <div className="bg-gradient-to-br from-cafe-forest-green to-cafe-brown rounded-2xl p-8 shadow-lg hover-lift animate-slide-up animation-delay-300 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cafe-gold/20 rounded-full -translate-y-16 translate-x-16 animate-float" />
            
            <div className="text-center mb-6 relative z-10">
              <div className="w-20 h-20 bg-cafe-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl animate-gentle-bounce">🚀</div>
              </div>
              <h3 className="font-playfair text-3xl font-bold mb-4">
                Coming Soon: Delivery
              </h3>
              <p className="text-cafe-cream text-lg">
                Order from the comfort of your home
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-4 mb-6 backdrop-blur-sm">
              <p className="text-center text-cafe-cream">
                We're working hard to bring our artisan coffee directly to your doorstep. 
                Stay tuned for updates!
              </p>
            </div>

            <button className="w-full py-3 bg-cafe-gold text-cafe-dark-brown rounded-lg font-semibold hover:bg-cafe-gold/90 transition-all duration-300 hover:scale-105">
              Notify Me When Available
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderInfoSection;
