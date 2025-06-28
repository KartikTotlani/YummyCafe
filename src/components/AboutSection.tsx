
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cafe-cream">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Owner Photo */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3"
                    alt="Café Owner"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cafe-gold rounded-full animate-gentle-bounce" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cafe-brown rounded-full animate-float" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cafe-forest-green rounded-full animate-gentle-bounce animation-delay-500" />
              </div>
            </div>

            {/* Story Content */}
            <div className="animate-slide-up animation-delay-300">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-8">
                Our Story
              </h2>
              
              <div className="space-y-6 text-lg text-cafe-brown leading-relaxed">
                <p>
                  Welcome to Artisan Café, where passion meets perfection in every cup. 
                  Founded by Maria Santos, a third-generation coffee roaster, our café 
                  represents decades of dedication to the craft of exceptional coffee.
                </p>
                
                <p>
                  Maria's journey began in the coffee plantations of her grandmother's 
                  homeland, where she learned that great coffee is not just about the bean—it's 
                  about the story, the care, and the love that goes into every step of the process.
                </p>
                
                <p>
                  Today, we source our beans directly from small-scale farmers who share 
                  our commitment to quality and sustainability. Every cup we serve is a 
                  testament to this partnership and our unwavering dedication to excellence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce" />
                  <span className="text-cafe-brown font-semibold">Est. 2018</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce animation-delay-200" />
                  <span className="text-cafe-brown font-semibold">Ethically Sourced</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce animation-delay-400" />
                  <span className="text-cafe-brown font-semibold">Family Owned</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
