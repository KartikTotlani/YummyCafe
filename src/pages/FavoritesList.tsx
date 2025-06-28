
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));

const FavoritesList = () => {
  // This would typically come from context or state management
  const favoriteItems = [
    {
      id: 2,
      name: 'Devil Momos',
      description: 'Chef Anshu\'s signature spicy momos with a fiery filling that will awaken your taste buds.',
      price: '₹120',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3',
      isVeg: false,
    },
    {
      id: 5,
      name: 'Chocolate Brownie',
      description: 'Rich, fudgy brownie with a gooey center, served warm with a scoop of vanilla ice cream.',
      price: '₹110',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3',
      isVeg: true,
    },
  ];

  return (
    <div className="min-h-screen bg-cafe-warm-white">
      <Suspense fallback={<div className="h-20 bg-cafe-warm-white" />}>
        <Navigation />
      </Suspense>
      
      <div className="pt-24 section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Link 
              to="/" 
              className="mr-4 p-2 rounded-full bg-cafe-brown text-white hover:bg-cafe-dark-brown transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-dark-brown">
              Your Favorites
            </h1>
          </div>

          {favoriteItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-cafe-brown mx-auto mb-4" />
              <h2 className="text-2xl font-playfair text-cafe-brown mb-4">No favorites yet</h2>
              <p className="text-cafe-brown mb-8">Start adding items to your favorites from our menu!</p>
              <Link 
                to="/" 
                className="inline-block px-6 py-3 bg-cafe-gold text-cafe-dark-brown rounded-full hover:bg-cafe-gold/90 transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteItems.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-bold ${
                      item.isVeg 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {item.isVeg ? 'VEG' : 'NON-VEG'}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-playfair text-xl font-semibold text-cafe-dark-brown">
                        {item.name}
                      </h3>
                      <span className="text-xl font-bold text-cafe-gold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-cafe-brown mb-4">
                      {item.description}
                    </p>
                    <button className="w-full py-2 bg-cafe-brown text-white rounded-lg hover:bg-cafe-dark-brown transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
