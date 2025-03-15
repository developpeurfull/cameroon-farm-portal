
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-black/60 to-transparent transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-xl">
          <span 
            className={`inline-block px-4 py-2 rounded-full bg-cameroon-yellow text-cameroon-green text-sm font-semibold mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Le Cameroun et son agriculture
          </span>
          
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Découvrez <span className="text-cameroon-yellow">L'Élevage</span> au Cameroun
          </h1>
          
          <p 
            className={`text-lg text-white/90 mb-8 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Explorez la richesse et la diversité du secteur de l'élevage camerounais, 
            pilier économique et culturel au cœur de l'Afrique centrale.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#about" 
              className="px-6 py-3 bg-cameroon-green text-white rounded-lg font-medium hover:bg-cameroon-green/90 transition-colors shadow-lg hover-lift"
            >
              En savoir plus
            </a>
            <a 
              href="#livestock" 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-colors hover-lift"
            >
              Types d'élevage
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white transition-all duration-700 delay-500 animate-float ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
