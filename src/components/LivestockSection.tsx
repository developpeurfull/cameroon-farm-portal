
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedSection from './AnimatedSection';

const LivestockSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("bovins");
  
  const livestockTypes = [
    {
      id: "bovins",
      title: "Élevage Bovin",
      description: "L'élevage des bovins constitue le pilier de l'activité pastorale au Cameroun, particulièrement dans les régions septentrionales. Les races locales comme la Gudali et la Fulani Rouge sont parfaitement adaptées aux conditions climatiques du pays.",
      image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "5.8 millions" },
        { label: "Races principales", value: "Gudali, Fulani, Kapsiki" },
        { label: "Régions clés", value: "Nord, Extrême-Nord, Adamaoua" },
      ],
      facts: [
        "La transhumance reste une pratique courante dans les régions du nord",
        "L'embouche bovine se développe autour des centres urbains",
        "Les marchés à bétail sont des lieux d'échanges économiques et culturels importants"
      ]
    },
    {
      id: "caprins",
      title: "Élevage Caprin",
      description: "Les chèvres sont présentes dans presque toutes les régions du Cameroun, avec une prédominance dans les zones rurales. Leur résistance aux maladies et leur capacité d'adaptation en font un bétail privilégié pour les petits exploitants.",
      image: "https://images.unsplash.com/photo-1598715685267-0f45317b8713?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "6.2 millions" },
        { label: "Races principales", value: "Chèvre naine, Kirdi, Sahélienne" },
        { label: "Régions clés", value: "National, avec concentration à l'Ouest" },
      ],
      facts: [
        "L'élevage caprin est souvent géré par les femmes dans les zones rurales",
        "La viande de chèvre est particulièrement prisée lors des cérémonies traditionnelles",
        "La production de lait de chèvre se développe progressivement"
      ]
    },
    {
      id: "ovins",
      title: "Élevage Ovin",
      description: "Les moutons camerounais, résistants et bien adaptés à leur environnement, sont élevés principalement pour leur viande. Cet élevage revêt une importance particulière lors des fêtes religieuses musulmanes comme la Tabaski.",
      image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "3.1 millions" },
        { label: "Races principales", value: "Djallonké, Oudah, Poulfouli" },
        { label: "Régions clés", value: "Nord, Nord-Ouest, Ouest" },
      ],
      facts: [
        "La demande en moutons explose pendant les périodes de fêtes religieuses",
        "La race Djallonké est particulièrement appréciée pour sa résistance aux parasites",
        "Des programmes d'amélioration génétique sont en cours pour augmenter la productivité"
      ]
    },
    {
      id: "porcins",
      title: "Élevage Porcin",
      description: "L'élevage porcin s'est considérablement développé dans les régions non musulmanes du Cameroun. Cette filière connaît une croissance rapide grâce à la forte demande urbaine et à la facilité d'élevage des porcs.",
      image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: "2.9 millions" },
        { label: "Races principales", value: "Locale, Large White, Landrace" },
        { label: "Régions clés", value: "Ouest, Centre, Littoral" },
      ],
      facts: [
        "La production porcine connaît une croissance annuelle de près de 7%",
        "Les systèmes d'élevage vont de l'élevage traditionnel aux fermes semi-industrielles",
        "La peste porcine africaine reste un défi majeur pour cette filière"
      ]
    },
    {
      id: "volaille",
      title: "Aviculture",
      description: "L'élevage de volailles est présent à travers tout le pays, allant de la basse-cour familiale aux exploitations industrielles. C'est un secteur en pleine expansion qui contribue significativement à la sécurité alimentaire.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      stats: [
        { label: "Population", value: ">45 millions" },
        { label: "Types", value: "Poulets, pintades, canards, dindes" },
        { label: "Régions clés", value: "National, avec concentration au Centre et Littoral" },
      ],
      facts: [
        "L'aviculture traditionnelle représente plus de 70% de la production nationale",
        "La production d'œufs est en forte croissance autour des grandes villes",
        "Des initiatives de vaccination à grande échelle ont permis de réduire l'impact des maladies aviaires"
      ]
    }
  ];
  
  const findTypeById = (id: string) => livestockTypes.find(type => type.id === id) || livestockTypes[0];
  const activeType = findTypeById(activeTab);
  
  return (
    <section id="livestock" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Diversité
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Types d'élevage au Cameroun</h2>
            <p className="text-muted-foreground text-pretty">
              Le Cameroun abrite une grande variété de pratiques d'élevage, adaptées aux différents 
              écosystèmes du pays, des plaines sahéliennes du nord aux régions forestières du sud.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={200}>
          <Tabs defaultValue="bovins" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50 p-1">
                {livestockTypes.map(type => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id}
                    className="data-[state=active]:bg-white data-[state=active]:text-cameroon-green px-4 py-2"
                  >
                    {type.title.split(" ")[1]}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {livestockTypes.map(type => (
              <TabsContent key={type.id} value={type.id} className="mt-2">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/2">
                    <div className="relative">
                      <div className="absolute -left-4 -top-4 right-4 bottom-4 bg-cameroon-green/10 rounded-xl -z-10"></div>
                      <img
                        src={type.image}
                        alt={type.title}
                        className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{type.title}</h3>
                    <p className="text-muted-foreground mb-6 text-pretty">{type.description}</p>
                    
                    <div className="bg-secondary/40 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold mb-4">Statistiques clés</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {type.stats.map(stat => (
                          <div key={stat.label} className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="text-sm text-muted-foreground">{stat.label}</p>
                            <p className="font-semibold text-cameroon-green">{stat.value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Points importants</h4>
                      <ul className="space-y-2">
                        {type.facts.map((fact, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-cameroon-green mr-2">•</span>
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
