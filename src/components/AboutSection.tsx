
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Tradition et Héritage",
      description: "Des pratiques d'élevage transmises de génération en génération depuis plus de 500 ans, préservant un patrimoine culturel unique.",
      icon: "🏺"
    },
    {
      title: "Innovation Agricole",
      description: "Adoption de technologies modernes comme l'insémination artificielle et la surveillance sanitaire pour améliorer la productivité et la durabilité.",
      icon: "🔬"
    },
    {
      title: "Biodiversité",
      description: "Plus de 20 races animales locales adaptées aux divers écosystèmes camerounais, du sahel au sud forestier.",
      icon: "🦓"
    },
    {
      title: "Économie Locale",
      description: "Contribue à 15% du PIB agricole et soutient directement plus de 30% de la population rurale camerounaise.",
      icon: "📈"
    }
  ];

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            <div className="md:w-1/2">
              <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
                Notre Histoire
              </span>
              <h2 className="section-heading mt-4">L'élevage au cœur de l'identité camerounaise</h2>
              <p className="text-muted-foreground mb-8 text-pretty text-lg">
                Au Cameroun, l'élevage n'est pas qu'une simple activité économique, c'est un art de vivre, 
                un héritage culturel qui se transmet depuis des générations. Situé à la croisée des influences 
                sahéliennes et équatoriales, le pays bénéficie d'une diversité écologique exceptionnelle qui permet 
                le développement de multiples formes d'élevage.
              </p>
              <p className="text-muted-foreground mb-8 text-pretty text-lg">
                Des vastes pâturages du nord aux régions forestières du sud, les éleveurs camerounais ont su adapter 
                leurs pratiques aux conditions locales, créant ainsi une mosaïque de savoir-faire qui contribue à la 
                richesse culturelle et économique du pays. Aujourd'hui, avec plus de 7 millions de bovins, le Cameroun 
                est l'un des leaders de l'élevage en Afrique centrale.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="stat-card">
                  <p className="text-2xl font-bold text-cameroon-green">7.2M</p>
                  <p className="text-sm text-muted-foreground">Têtes de bovins</p>
                </div>
                <div className="stat-card">
                  <p className="text-2xl font-bold text-cameroon-green">12.5M</p>
                  <p className="text-sm text-muted-foreground">Petits ruminants</p>
                </div>
                <div className="stat-card">
                  <p className="text-2xl font-bold text-cameroon-green">15%</p>
                  <p className="text-sm text-muted-foreground">du PIB agricole</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -left-5 -top-5 w-32 h-32 bg-cameroon-green rounded-full opacity-20"></div>
              <div className="absolute -right-3 -bottom-3 w-40 h-40 bg-cameroon-yellow rounded-full opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1605280263929-1c42c62ef169?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Éleveur camerounais avec son troupeau"
                  className="w-full h-auto object-cover clip-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Caractéristiques
            </span>
            <h2 className="section-heading mt-4 after:left-1/3 after:right-1/3 after:mx-auto">
              Ce qui distingue l'élevage camerounais
            </h2>
            <p className="text-muted-foreground text-pretty text-lg">
              Découvrez les aspects uniques qui font de l'élevage au Cameroun une pratique riche et diversifiée, 
              alliant traditions ancestrales et approches modernes adaptées aux défis contemporains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={feature.title} 
                animation="scale-up" 
                delay={index * 100}
                className="feature-card"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cameroon-green/10 text-cameroon-green mb-6">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
