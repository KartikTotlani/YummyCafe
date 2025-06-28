
import { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    
    if (!isHomePage) {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const NavLinks = ({ mobile = false }) => (
    <div className={`${mobile ? 'flex flex-col space-y-6' : 'hidden md:flex space-x-8'}`}>
      <button
        onClick={() => scrollToSection('home')}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Home
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </button>
      
      <button
        onClick={() => scrollToSection('menu')}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Menu
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </button>
      
      <button
        onClick={() => scrollToSection('weekend-specials')}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Weekend Specials
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </button>
      
      <Link
        to="/chef-recipes"
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Chef's Recipes
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </Link>
      
      <button
        onClick={() => scrollToSection('chef-corner')}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Chef's Corner
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </button>
      
      <button
        onClick={() => scrollToSection('contact')}
        className="text-cafe-brown hover:text-cafe-gold transition-colors duration-300 font-medium relative group"
      >
        Contact
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-gold transition-all duration-300 group-hover:w-full" />
      </button>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-cafe-warm-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="section-padding py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-playfair text-2xl font-bold text-cafe-dark-brown">
            Yummy Cafe
          </Link>
          
          {/* Desktop Navigation */}
          <NavLinks />

          {/* Mobile Navigation and Icons */}
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-cafe-brown hover:text-red-500 transition-colors duration-300 cursor-pointer hover:scale-110 transform" />
            <ShoppingCart className="w-6 h-6 text-cafe-brown hover:text-cafe-gold transition-colors duration-300 cursor-pointer hover:scale-110 transform" />
            
            {/* Mobile Menu Trigger */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger className="md:hidden">
                <Menu className="w-6 h-6 text-cafe-brown hover:text-cafe-gold transition-colors duration-300" />
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-cafe-warm-white">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-playfair text-xl font-bold text-cafe-dark-brown">
                      Menu
                    </span>
                  </div>
                  <NavLinks mobile />
                  <div className="mt-auto flex justify-center space-x-6 pb-8">
                    <Heart className="w-8 h-8 text-cafe-brown hover:text-red-500 transition-colors duration-300 cursor-pointer" />
                    <ShoppingCart className="w-8 h-8 text-cafe-brown hover:text-cafe-gold transition-colors duration-300 cursor-pointer" />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
