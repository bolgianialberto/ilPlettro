import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-burgundy">ilPlettro</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('storia')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                La nostra storia
              </button>
              <button 
                onClick={() => scrollToSection('membri')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Membri
              </button>
              <button 
                onClick={() => scrollToSection('eventi')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Eventi
              </button>
              <button 
                onClick={() => scrollToSection('media')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Media
              </button>
              <button 
                onClick={() => scrollToSection('contatti')}
                className="text-charcoal hover:text-burgundy px-3 py-2 text-sm font-medium transition-colors"
              >
                Contatti
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-burgundy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('storia')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              La nostra storia
            </button>
            <button 
              onClick={() => scrollToSection('membri')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              Membri
            </button>
            <button 
              onClick={() => scrollToSection('eventi')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              Eventi
            </button>
            <button 
              onClick={() => scrollToSection('media')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              Media
            </button>
            <button 
              onClick={() => scrollToSection('contatti')}
              className="block w-full text-left px-3 py-2 text-base font-medium text-charcoal hover:text-burgundy"
            >
              Contatti
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
