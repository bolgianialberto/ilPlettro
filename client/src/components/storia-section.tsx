export default function StoriaSection() {
  return (
    <section id="storia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">La nostra storia</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              L'Orchestra ilPlettro nasce nel 1987 dalla passione di un gruppo di musicisti amanti della tradizione mandolinistica italiana. 
              Da oltre trent'anni, portiamo avanti l'arte della musica per plettro, mantenendo viva una tradizione centenaria che affonda le sue radici nel cuore della cultura musicale italiana.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Composta da circa 30 membri tra chitarre classiche, mandolini, mandole e contrabbassi, l'orchestra si è esibita in numerosi concerti e rassegne musicali, 
              conquistando il pubblico con la sua interpretazione raffinata e appassionata del repertorio tradizionale e moderno.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Oltre all'attività concertistica, ilPlettro gestisce una scuola di musica che forma nuove generazioni di musicisti, 
              trasmettendo non solo la tecnica strumentale ma anche l'amore per questa meravigliosa tradizione musicale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Orchestra storica" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Strumenti tradizionali" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Scuola di musica" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Concerto" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
