import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Il Plettro</h3>
            <p className="text-gray-300 mb-4">
              Orchestra e Scuola di Musica dedicata alla tradizione mandolinistica italiana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('storia')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  La nostra storia
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('membri')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Membri
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('eventi')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Eventi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('media')}
                  className="text-gray-300 hover:text-gold transition-colors"
                >
                  Media
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-2 text-gray-300">
              <p>Via della Musica 15, Bologna</p>
              <p>info@ilplettro.it</p>
              <p>+39 051 123 4567</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ilPlettro. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
