
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'));

const ChefRecipes = () => {
  const recipes = [
    {
      id: 1,
      name: 'Secret Devil Momos Recipe',
      difficulty: 'Expert',
      time: '45 mins',
      description: 'Learn Chef Anshu\'s signature spicy momos with the perfect blend of spices.',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3',
      ingredients: [
        '2 cups all-purpose flour',
        '1 lb ground chicken',
        '2 tbsp ghost pepper paste',
        '1 tbsp ginger-garlic paste',
        'Assorted spices'
      ],
      steps: [
        'Prepare the dough with flour and water',
        'Mix chicken with spices and ghost pepper paste',
        'Roll out thin circles and fill with mixture',
        'Steam for 15-20 minutes',
        'Serve hot with special sauce'
      ]
    },
    {
      id: 2,
      name: 'Chocolate Brownie Delight',
      difficulty: 'Medium',
      time: '35 mins',
      description: 'Rich, fudgy brownies with a secret ingredient that makes them irresistible.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3',
      ingredients: [
        '200g dark chocolate',
        '150g butter',
        '200g sugar',
        '3 eggs',
        '1 cup flour',
        'Secret ingredient: espresso powder'
      ],
      steps: [
        'Melt chocolate and butter together',
        'Whisk in sugar and eggs',
        'Fold in flour and espresso powder',
        'Bake at 180°C for 25 minutes',
        'Cool and serve with ice cream'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-cafe-cream">
      <Suspense fallback={<div className="h-20 bg-cafe-cream" />}>
        <Navigation />
      </Suspense>
      
      <div className="pt-24 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Link 
              to="/" 
              className="mr-4 p-2 rounded-full bg-cafe-brown text-white hover:bg-cafe-dark-brown transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-cafe-dark-brown mb-2">
                Chef's Secret Recipes
              </h1>
              <p className="text-cafe-brown text-lg">
                Discover the secrets behind Chef Anshu's most beloved dishes
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div>
                    <img 
                      src={recipe.image} 
                      alt={recipe.name}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <div className="flex gap-4 mt-4">
                      <span className="px-3 py-1 bg-cafe-gold text-cafe-dark-brown rounded-full text-sm font-semibold">
                        {recipe.difficulty}
                      </span>
                      <span className="px-3 py-1 bg-cafe-brown text-white rounded-full text-sm font-semibold">
                        {recipe.time}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-cafe-dark-brown mb-4">
                      {recipe.name}
                    </h2>
                    <p className="text-cafe-brown mb-6">
                      {recipe.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="font-playfair text-xl font-semibold text-cafe-dark-brown mb-3">
                        Ingredients:
                      </h3>
                      <ul className="space-y-2">
                        {recipe.ingredients.map((ingredient, index) => (
                          <li key={index} className="flex items-center text-cafe-brown">
                            <span className="w-2 h-2 bg-cafe-gold rounded-full mr-3"></span>
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-cafe-dark-brown mb-3">
                        Instructions:
                      </h3>
                      <ol className="space-y-2">
                        {recipe.steps.map((step, index) => (
                          <li key={index} className="flex text-cafe-brown">
                            <span className="font-bold text-cafe-gold mr-3">{index + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
