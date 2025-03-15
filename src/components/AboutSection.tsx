
import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC = () => {
  const features = [
    {
      title: "Tradition et Héritage",
      description: "Des pratiques d'élevage transmises de génération en génération, préservant un patrimoine culturel unique.",
      icon: "🏺"
    },
    {
      title: "Innovation Agricole",
      description: "Adoption de technologies modernes pour améliorer la productivité et la durabilité des élevages.",
      icon: "🔬"
    },
    {
      title: "Biodiversité",
      description: "Une richesse exceptionnelle d'espèces animales adaptées aux divers écosystèmes camerounais.",
      icon: "🦓"
    },
    {
      title: "Économie Locale",
      description: "Un pilier fondamental pour l'économie rurale et la sécurité alimentaire nationale.",
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
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">L'élevage au cœur de l'identité camerounaise</h2>
              <p className="text-muted-foreground mb-8 text-pretty">
                Au Cameroun, l'élevage n'est pas qu'une simple activité économique, c'est un art de vivre, 
                un héritage culturel qui se transmet depuis des générations. Situé à la croisée des influences 
                sahéliennes et équatoriales, le pays bénéficie d'une diversité écologique exceptionnelle qui permet 
                le développement de multiples formes d'élevage.
              </p>
              <p className="text-muted-foreground mb-8 text-pretty">
                Des vastes pâturages du nord aux régions forestières du sud, les éleveurs camerounais ont su adapter 
                leurs pratiques aux conditions locales, créant ainsi une mosaïque de savoir-faire qui contribue à la 
                richesse culturelle et économique du pays.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg shadow-sm p-4 w-36">
                  <p className="text-2xl font-bold text-cameroon-green">5.8M</p>
                  <p className="text-sm text-muted-foreground">Têtes de bovins</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 w-36">
                  <p className="text-2xl font-bold text-cameroon-green">8.3M</p>
                  <p className="text-sm text-muted-foreground">Petits ruminants</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4 w-36">
                  <p className="text-2xl font-bold text-cameroon-green">15%</p>
                  <p className="text-sm text-muted-foreground">du PIB national</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute -left-5 -top-5 w-24 h-24 bg-cameroon-green rounded-full opacity-20"></div>
              <div className="absolute -right-3 -bottom-3 w-32 h-32 bg-cameroon-yellow rounded-full opacity-20"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560599549-212aa42d0a61?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Éleveur camerounais avec son troupeau"
                  className="w-full h-auto object-cover clip-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Caractéristiques
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-6">
              Ce qui distingue l'élevage camerounais
            </h2>
            <p className="text-muted-foreground text-pretty">
              Découvrez les aspects uniques qui font de l'élevage au Cameroun une pratique riche et diversifiée, 
              alliant traditions ancestrales et approches modernes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection 
                key={feature.title} 
                animation="scale-up" 
                delay={index * 100}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-muted"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-cameroon-green/10 text-cameroon-green mb-4">
                  <span className="text-2xl">{feature.icon}</span>
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
