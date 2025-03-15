
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from './AnimatedSection';

const LivestockSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("bovins");
  
  const livestockTypes = [
    {
      id: "bovins",
      title: "Élevage Bovin",
      description: "L'élevage des bovins constitue le pilier de l'activité pastorale au Cameroun, particulièrement dans les régions septentrionales. Les races locales comme la Gudali, la Fulani Rouge et la Red Bororo sont parfaitement adaptées aux conditions climatiques du pays.",
      image: "https://images.unsplash.com/photo-1545486332-9e0999c535b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "7.2 millions" },
        { label: "Races principales", value: "Gudali, Fulani, Red Bororo" },
        { label: "Régions clés", value: "Nord, Extrême-Nord, Adamaoua" },
      ],
      facts: [
        "La transhumance reste une pratique courante dans les régions du nord avec des parcours de plus de 300 km",
        "L'embouche bovine se développe rapidement autour des centres urbains avec plus de 200 unités modernes",
        "Les marchés à bétail comme celui de Ngaoundéré et Adoumri sont parmi les plus importants d'Afrique centrale"
      ]
    },
    {
      id: "caprins",
      title: "Élevage Caprin",
      description: "Les chèvres sont présentes dans presque toutes les régions du Cameroun, avec une prédominance dans les zones rurales. Leur résistance aux maladies et leur capacité d'adaptation en font un bétail privilégié pour les petits exploitants et l'agriculture familiale.",
      image: "https://images.unsplash.com/photo-1560695559-d7cdb4970079?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "8.3 millions" },
        { label: "Races principales", value: "Chèvre naine, Kirdi, Sahélienne" },
        { label: "Régions clés", value: "National, avec concentration à l'Ouest" },
      ],
      facts: [
        "L'élevage caprin est souvent géré par les femmes dans les zones rurales, représentant 65% des éleveurs",
        "La viande de chèvre est particulièrement prisée lors des cérémonies traditionnelles comme le mariage",
        "La production de lait de chèvre atteint désormais 1.2 million de litres annuellement, en hausse de 15%"
      ]
    },
    {
      id: "ovins",
      title: "Élevage Ovin",
      description: "Les moutons camerounais, résistants et bien adaptés à leur environnement, sont élevés principalement pour leur viande. Cet élevage revêt une importance particulière lors des fêtes religieuses musulmanes comme la Tabaski, où la demande peut tripler.",
      image: "https://images.unsplash.com/photo-1613092355949-5502fa197115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "4.2 millions" },
        { label: "Races principales", value: "Djallonké, Oudah, Poulfouli" },
        { label: "Régions clés", value: "Nord, Nord-Ouest, Ouest" },
      ],
      facts: [
        "La demande en moutons peut atteindre 800,000 têtes pendant la Tabaski, doublant les prix du marché",
        "La race Djallonké est particulièrement appréciée pour sa résistance aux parasites et sa prolificité",
        "Des programmes d'amélioration génétique ont permis d'augmenter le poids moyen de 25% en 10 ans"
      ]
    },
    {
      id: "porcins",
      title: "Élevage Porcin",
      description: "L'élevage porcin s'est considérablement développé dans les régions non musulmanes du Cameroun. Cette filière connaît une croissance rapide de 12% annuellement grâce à la forte demande urbaine et aux initiatives entrepreneuriales des jeunes agriculteurs.",
      image: "https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "3.5 millions" },
        { label: "Races principales", value: "Locale, Large White, Landrace" },
        { label: "Régions clés", value: "Ouest, Centre, Littoral" },
      ],
      facts: [
        "La production porcine connaît une croissance annuelle de près de 12%, la plus rapide du secteur",
        "Plus de 1,500 fermes semi-industrielles ont été créées depuis 2019, principalement par des jeunes",
        "La modernisation des abattoirs a permis d'augmenter la qualité sanitaire et la durée de conservation"
      ]
    },
    {
      id: "volaille",
      title: "Aviculture",
      description: "L'élevage de volailles représente le secteur le plus dynamique avec plus de 50 millions d'oiseaux. Des grands complexes avicoles industriels aux petites exploitations familiales, ce secteur est en pleine expansion et contribue significativement à la sécurité alimentaire nationale.",
      image: "https://images.unsplash.com/photo-1569013034332-a1a6474a2f48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: ">50 millions" },
        { label: "Types", value: "Poulets, pintades, canards, dindes" },
        { label: "Régions clés", value: "National, avec concentration au Centre et Littoral" },
      ],
      facts: [
        "L'aviculture traditionnelle représente 65% de la production nationale, contre 75% il y a cinq ans",
        "La production d'œufs atteint 1.8 milliard par an, couvrant 85% des besoins nationaux",
        "Plus de 20 couvoirs industriels produisent maintenant 15 millions de poussins annuellement"
      ]
    }
  ];
  
  const findTypeById = (id: string) => livestockTypes.find(type => type.id === id) || livestockTypes[0];
  const activeType = findTypeById(activeTab);
  
  return (
    <section id="livestock" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Diversité
            </span>
            <h2 className="section-heading mt-4 after:left-1/3 after:right-1/3 after:mx-auto">Types d'élevage au Cameroun</h2>
            <p className="text-muted-foreground text-pretty text-lg">
              Le Cameroun abrite une grande variété de pratiques d'élevage, adaptées aux différents 
              écosystèmes du pays, des plaines sahéliennes du nord aux régions forestières du sud, avec 
              des techniques spécifiques à chaque région.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <Tabs defaultValue="bovins" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-muted/50 p-1 rounded-xl">
                {livestockTypes.map(type => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id}
                    className="data-[state=active]:bg-white data-[state=active]:text-cameroon-green px-6 py-3 rounded-lg"
                  >
                    {type.title.split(" ")[1]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {livestockTypes.map(type => (
              <TabsContent key={type.id} value={type.id} className="mt-4">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -left-6 -top-6 right-6 bottom-6 bg-cameroon-green/10 rounded-xl -z-10"></div>
                      <img
                        src={type.image}
                        alt={type.title}
                        className="rounded-xl shadow-lg w-full h-[450px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">{type.title}</h3>
                    <p className="text-muted-foreground mb-8 text-pretty text-lg">{type.description}</p>
                    
                    <div className="bg-secondary/40 rounded-xl p-6 mb-8">
                      <h4 className="font-semibold mb-6 text-lg">Statistiques clés</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {type.stats.map(stat => (
                          <div key={stat.label} className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="font-semibold text-cameroon-green text-lg">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4 text-lg">Points importants</h4>
                      <ul className="space-y-3">
                        {type.facts.map((fact, index) => (
                          <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                            <span className="text-cameroon-green mr-2 text-xl">•</span>
                            <span className="text-muted-foreground">{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LivestockSection;
