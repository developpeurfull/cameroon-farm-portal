
import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="bg-cameroon-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white rounded-lg w-10 h-10 flex items-center justify-center">
                <span className="text-cameroon-green font-display text-lg font-bold">EC</span>
              </div>
              <div className="font-display font-semibold text-xl tracking-tight">
                ÉlevageCam
              </div>
            </div>
            <p className="text-white/80 mb-6">
              Votre source d'information sur l'élevage au Cameroun, ses traditions, 
              ses innovations et son rôle dans l'économie nationale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Liens rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#livestock" className="text-white/80 hover:text-white transition-colors">
                  Types d'élevage
                </a>
              </li>
              <li>
                <a href="#statistics" className="text-white/80 hover:text-white transition-colors">
                  Statistiques
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Guide de l'éleveur
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Subventions & Financements
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Santé animale
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Réglementations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Formations
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Abonnez-vous pour recevoir les dernières nouvelles et mises à jour.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/10 text-white placeholder:text-white/60 px-4 py-2 rounded-l-lg flex-grow focus:outline-none focus:bg-white/20"
              />
              <button className="bg-cameroon-yellow text-cameroon-green px-4 py-2 rounded-r-lg font-medium hover:bg-cameroon-yellow/90 transition-colors">
                S'abonner
              </button>
            </div>
            <p className="text-xs text-white/60">
              En vous inscrivant, vous acceptez notre politique de confidentialité.
            </p>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ÉlevageCam. Tous droits réservés.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-cameroon-green p-3 rounded-full shadow-lg hover:bg-cameroon-green/90 transition-colors z-50"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
