
import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load all components
const Navigation = lazy(() => import('../components/Navigation'));
const LoadingScreen = lazy(() => import('../components/LoadingScreen'));
const HeroSection = lazy(() => import('../components/HeroSection'));
const MenuSection = lazy(() => import('../components/MenuSection'));
const WeekendSpecials = lazy(() => import('../components/WeekendSpecials'));
const OrderInfoSection = lazy(() => import('../components/OrderInfoSection'));
const ChefCorner = lazy(() => import('../components/ChefCorner'));
const ContactSection = lazy(() => import('../components/ContactSection'));

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Loading screen timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-cafe-brown" />}>
        <LoadingScreen />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-cafe-warm-white">
      <Suspense fallback={<div className="h-20 bg-cafe-warm-white" />}>
        <Navigation />
      </Suspense>
      
      <Suspense fallback={<div className="h-screen bg-cafe-warm-white" />}>
        <HeroSection scrollY={scrollY} />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-cafe-cream" />}>
        <MenuSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-cafe-warm-white" />}>
        <WeekendSpecials />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-cafe-cream" />}>
        <OrderInfoSection />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-cafe-warm-white" />}>
        <ChefCorner />
      </Suspense>
      
      <Suspense fallback={<div className="h-96 bg-cafe-cream" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Index;
