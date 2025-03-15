
import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

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
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent transition-opacity duration-1000 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-2xl">
          <span 
            className={`inline-block px-4 py-2 rounded-full bg-cameroon-yellow text-cameroon-forest text-sm font-semibold mb-6 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            L'agriculture et l'élevage camerounais
          </span>
          
          <h1 
            className={`text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Découvrez <span className="text-cameroon-yellow">L'Élevage</span> au Cameroun
          </h1>
          
          <p 
            className={`text-xl text-white/90 mb-8 transition-all duration-700 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Explorez la richesse et la diversité du secteur de l'élevage camerounais, 
            pilier économique et culturel au cœur de l'Afrique centrale avec plus de 7 millions 
            de bovins et 12 millions de petits ruminants.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a 
              href="#about" 
              className="btn-primary"
            >
              En savoir plus <ArrowRight size={18} />
            </a>
            <a 
              href="#livestock" 
              className="btn-secondary"
            >
              Types d'élevage
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white transition-all duration-700 delay-500 animate-bounce ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Défiler vers le bas"
      >
        <ChevronDown size={36} strokeWidth={1.5} />
      </a>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
