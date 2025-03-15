
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const GallerySection: React.FC = () => {
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  
  const galleryImages = [
    {
      id: "img1",
      src: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Élevage porcin au Cameroun",
      category: "Porcins",
      size: "lg",
    },
    {
      id: "img2",
      src: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Troupeau de bovins dans l'Adamaoua",
      category: "Bovins",
      size: "sm",
    },
    {
      id: "img3",
      src: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Élevage de volailles",
      category: "Volailles",
      size: "md",
    },
    {
      id: "img4",
      src: "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Chèvres dans la région du Nord",
      category: "Caprins",
      size: "md",
    },
    {
      id: "img5",
      src: "https://images.unsplash.com/photo-1559060017-445fb9722f2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Berger peul avec son troupeau",
      category: "Tradition",
      size: "sm",
    },
    {
      id: "img6",
      src: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Élevage ovin dans les hauts plateaux",
      category: "Ovins",
      size: "lg",
    },
    {
      id: "img7",
      src: "https://images.unsplash.com/photo-1589923188651-268a9765e432?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Marché à bétail dans le Grand-Nord",
      category: "Marché",
      size: "sm",
    },
    {
      id: "img8",
      src: "https://images.unsplash.com/photo-1604848698039-86efb0e0c0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Apiculture dans la région de l'Ouest",
      category: "Apiculture",
      size: "md",
    },
  ];
  
  const handleImageLoad = (id: string) => {
    setLoaded(prev => ({ ...prev, [id]: true }));
  };
  
  useEffect(() => {
    // Preload images
    galleryImages.forEach(img => {
      const image = new Image();
      image.src = img.src;
      image.onload = () => handleImageLoad(img.id);
    });
  }, []);
  
  return (
    <section id="gallery" className="section-padding">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Galerie
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              L'élevage camerounais en images
            </h2>
            <p className="text-muted-foreground text-pretty">
              Découvrez la beauté et la diversité de l'élevage au Cameroun à travers 
              cette sélection de photographies prises à travers le pays.
            </p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="scale-up" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`relative overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl group ${
                  image.size === 'lg' ? 'lg:col-span-2 lg:row-span-2' : 
                  image.size === 'md' ? 'lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center px-4">
                    <span className="inline-block px-3 py-1 bg-cameroon-green/90 text-white text-sm rounded-full mb-2">
                      {image.category}
                    </span>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
                <img 
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    loaded[image.id] ? 'img-lazy-loaded' : 'img-lazy-load'
                  }`}
                  style={{ 
                    height: image.size === 'lg' ? '600px' : image.size === 'md' ? '500px' : '300px'
                  }}
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GallerySection;
