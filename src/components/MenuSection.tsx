
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: 1,
    name: 'Manchurian Gravy',
    description: 'Delicious Indo-Chinese dish with perfectly spiced vegetable balls in a rich, flavorful gravy.',
    price: '₹80',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3',
    isChefsFavorite: false,
    category: 'main-course',
    isVeg: true,
  },
  {
    id: 2,
    name: 'Devil Momos',
    description: 'Chef Anshu\'s signature spicy momos with a fiery filling that will awaken your taste buds.',
    price: '₹120',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3',
    isChefsFavorite: true,
    category: 'appetizer',
    isVeg: false,
  },
  {
    id: 3,
    name: 'Soya Chilli',
    description: 'Crispy soya chunks tossed in tangy chilli sauce with bell peppers and onions.',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3',
    isChefsFavorite: false,
    category: 'main-course',
    isVeg: true,
  },
  {
    id: 4,
    name: 'Special Coffee',
    description: 'Freshly brewed aromatic coffee made from premium beans, perfect to start your day.',
    price: '₹60',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    isChefsFavorite: false,
    category: 'beverages',
    isVeg: true,
  },
  {
    id: 5,
    name: 'Chocolate Brownie',
    description: 'Rich, fudgy brownie with a gooey center, served warm with a scoop of vanilla ice cream.',
    price: '₹110',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3',
    isChefsFavorite: true,
    category: 'dessert',
    isVeg: true,
  },
  {
    id: 6,
    name: 'Chicken Shawarma',
    description: 'Tender marinated chicken wrapped in soft pita bread with fresh vegetables and tahini sauce.',
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3',
    isChefsFavorite: false,
    category: 'main-course',
    isVeg: false,
  },
];

const MenuSection = () => {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filter, setFilter] = useState<'all' | 'veg' | 'non-veg'>('all');

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const filteredItems = menuItems.filter(item => {
    if (filter === 'veg') return item.isVeg;
    if (filter === 'non-veg') return !item.isVeg;
    return true;
  });

  return (
    <section id="menu" className="py-20 bg-cafe-cream">
      <div className="section-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-cafe-dark-brown mb-6">
            Chef Anshu's Special Menu
          </h2>
          <p className="text-lg sm:text-xl text-cafe-brown max-w-3xl mx-auto">
            Discover our carefully crafted dishes, each prepared with love and authentic flavors
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'all'
                ? 'bg-cafe-gold text-cafe-dark-brown'
                : 'bg-white text-cafe-brown hover:bg-cafe-gold/20'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setFilter('veg')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'veg'
                ? 'bg-green-500 text-white'
                : 'bg-white text-cafe-brown hover:bg-green-100'
            }`}
          >
            Vegetarian
          </button>
          <button
            onClick={() => setFilter('non-veg')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              filter === 'non-veg'
                ? 'bg-red-500 text-white'
                : 'bg-white text-cafe-brown hover:bg-red-100'
            }`}
          >
            Non-Vegetarian
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg menu-item-hover animate-slide-up group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Veg/Non-Veg Tag */}
                <div className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-bold ${
                  item.isVeg 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  {item.isVeg ? 'VEG' : 'NON-VEG'}
                </div>
                
                {item.isChefsFavorite && (
                  <div className="absolute top-4 right-4 chef-badge">
                    Chef's Favorite
                  </div>
                )}
                
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className="absolute bottom-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                >
                  <Heart 
                    className={`w-5 h-5 transition-all duration-300 ${
                      favorites.includes(item.id) 
                        ? 'text-red-500 fill-red-500 animate-pulse' 
                        : 'text-cafe-brown hover:text-red-500'
                    }`}
                  />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-cafe-dark-brown group-hover:text-cafe-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-xl sm:text-2xl font-bold text-cafe-gold">
                    {item.price}
                  </span>
                </div>
                <p className="text-cafe-brown leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="w-full py-3 bg-cafe-brown text-white rounded-lg font-semibold hover:bg-cafe-dark-brown transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {favorites.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-cafe-brown mb-4">
              You have {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}!
            </p>
            <Link 
              to="/favorites"
              className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-105"
            >
              View Favorites ({favorites.length})
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
