
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-semibold text-cameroon-green bg-cameroon-green/10 px-3 py-1 rounded-full">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Nous contacter</h2>
            <p className="text-muted-foreground text-pretty">
              Vous souhaitez en savoir plus sur l'élevage au Cameroun ou avez des questions spécifiques ? 
              N'hésitez pas à nous contacter, nous serons ravis de vous aider.
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-left">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom complet
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Votre nom" 
                      className="border-muted-foreground/20 focus:border-cameroon-green focus:ring-cameroon-green/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Adresse e-mail
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      className="border-muted-foreground/20 focus:border-cameroon-green focus:ring-cameroon-green/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="Sujet de votre message" 
                    className="border-muted-foreground/20 focus:border-cameroon-green focus:ring-cameroon-green/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Votre message ici..." 
                    rows={5} 
                    className="border-muted-foreground/20 focus:border-cameroon-green focus:ring-cameroon-green/20 resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-cameroon-green hover:bg-cameroon-green/90 text-white font-medium py-3 rounded-lg shadow-sm hover-lift"
                >
                  Envoyer le message
                </Button>
              </form>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-right">
            <div className="h-full flex flex-col">
              <div className="bg-cameroon-green text-white rounded-xl shadow-sm p-8">
                <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 rounded-full p-2">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Adresse</h4>
                      <p className="text-white/80">
                        Avenue de l'Indépendance, Yaoundé<br />
                        Cameroun
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 rounded-full p-2">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Téléphone</h4>
                      <p className="text-white/80">+237 233 42 56 78</p>
                      <p className="text-white/80">+237 699 87 65 43</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 rounded-full p-2">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-white/80">info@elevagecam.cm</p>
                      <p className="text-white/80">contact@elevagecam.cm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 rounded-full p-2">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Heures d'ouverture</h4>
                      <p className="text-white/80">Lundi - Vendredi: 8h00 - 17h00</p>
                      <p className="text-white/80">Samedi: 9h00 - 13h00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-white rounded-xl shadow-sm p-6 flex-1">
                <h3 className="text-xl font-bold mb-4">Ministère de l'Élevage</h3>
                <p className="text-muted-foreground mb-4">
                  Le Ministère de l'Élevage, des Pêches et des Industries Animales (MINEPIA) est 
                  chargé de l'élaboration et de la mise en œuvre de la politique du gouvernement 
                  en matière d'élevage, de pêche et de développement des industries animales.
                </p>
                <a 
                  href="https://www.minepia.gov.cm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-cameroon-green font-medium hover:text-cameroon-green/80 transition-colors"
                >
                  Visiter le site officiel →
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
