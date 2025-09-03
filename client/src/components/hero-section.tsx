import background from '../assets/background.jpg';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fadeInUp">
          ilPlettro
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fadeInUp">
          Orchestra e Scuola di Musica
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fadeInUp">
          Dove la passione per la musica tradizionale italiana incontra l'eccellenza artistica
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
          <button
            onClick={() => scrollToSection('eventi')}
            className="bg-burgundy hover:bg-burgundy/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Prossimi Eventi
          </button>
          <button
            onClick={() => scrollToSection('membri')}
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Conosci l'Orchestra
          </button>
        </div>
      </div>
    </section>
  );
}
