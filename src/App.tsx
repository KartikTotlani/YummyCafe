
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Lazy load pages
const Index = lazy(() => import("./pages/Index"));
const FavoritesList = lazy(() => import("./pages/FavoritesList"));
const ChefRecipes = lazy(() => import("./pages/ChefRecipes"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-cafe-warm-white flex items-center justify-center">
          <div className="text-cafe-brown text-xl">Loading...</div>
        </div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/chef-recipes" element={<ChefRecipes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
