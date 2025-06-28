
import { lazy, Suspense } from 'react';

const ChefCorner = () => {
  const chefsFavoriteDishes = [
    {
      name: 'Devil Momos',
      description: 'My signature creation that started it all',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3'
    },
    {
      name: 'Chocolate Brownie',
      description: 'A dessert close to my heart',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3'
    },
    {
      name: 'Manchurian Gravy',
      description: 'Perfect blend of Indo-Chinese flavors',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3'
    }
  ];

  return (
    <section id="chef-corner" className="py-20 bg-cafe-warm-white">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-6">
              Chef's Corner
            </h2>
            <p className="text-xl text-cafe-brown max-w-3xl mx-auto">
              Step into the world of Chef Anshu - where passion meets flavor
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Chef Photo */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3"
                    alt="Chef Anshu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-cafe-gold rounded-full animate-gentle-bounce" />
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cafe-brown rounded-full animate-float" />
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-cafe-forest-green rounded-full animate-gentle-bounce animation-delay-500" />
              </div>
            </div>

            {/* Chef Story */}
            <div className="animate-slide-up animation-delay-300">
              <h3 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-dark-brown mb-8">
                Chef Anshu's Journey
              </h3>
              
              <div className="space-y-6 text-lg text-cafe-brown leading-relaxed">
                <p>
                  Welcome to my culinary world! I'm Chef Anshu, and my journey began in the bustling 
                  kitchens of my grandmother's home, where the aroma of authentic spices first 
                  captured my heart and soul.
                </p>
                
                <p>
                  After years of perfecting traditional recipes and experimenting with fusion flavors, 
                  I founded Yummy Cafe with a simple mission: to serve dishes that not only satisfy 
                  your hunger but also touch your heart with every bite.
                </p>
                
                <p>
                  My signature Devil Momos were born from a desire to create something uniquely bold 
                  and unforgettable. Each dish I create tells a story of tradition, innovation, 
                  and the endless pursuit of culinary excellence.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce" />
                  <span className="text-cafe-brown font-semibold">15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce animation-delay-200" />
                  <span className="text-cafe-brown font-semibold">Authentic Recipes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cafe-gold rounded-full mr-3 animate-gentle-bounce animation-delay-400" />
                  <span className="text-cafe-brown font-semibold">Innovation & Tradition</span>
                </div>
              </div>
            </div>
          </div>

          {/* Chef's Favorite Dishes */}
          <div className="border-t-2 border-cafe-gold pt-16">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cafe-dark-brown text-center mb-12">
              Chef's Personal Favorites
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {chefsFavoriteDishes.map((dish, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="font-playfair text-xl font-semibold text-cafe-dark-brown mb-2">
                      {dish.name}
                    </h4>
                    <p className="text-cafe-brown italic">
                      "{dish.description}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefCorner;
