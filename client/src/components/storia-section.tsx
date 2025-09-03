import taormina from '../assets/taormina.jpg';
import ponte from '../assets/ponte.jpg';
import prato from '../assets/prato.jpg';
import vecchia from '../assets/vecchia.jpg';
import chiesa from '../assets/chiesa.jpg';
import tampa from '../assets/tampa.jpg';
import loggia from '../assets/loggia.jpg';
import forno from '../assets/forno.jpg';

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
              Fondata nel 1982 da Giovanni “Gianni” Ora, considerato il vero e proprio "papà" degli orchestrali, l’orchestra ha saputo distinguersi fin da subito grazie a un intenso lavoro di formazione e preparazione degli strumentisti. Nel corso degli anni ha raggiunto un alto livello artistico, partecipando con successo a numerosi concorsi, festival e rassegne in Italia e all’estero.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Tra i riconoscimenti più significativi si segnalano il Primo Premio al concorso "Suona con noi" di Pesaro, il Secondo Premio al Concorso Internazionale "Città di Stresa", la partecipazione al Festival Internazionale di Musica Universitaria di Belfort (Francia), alla Seconda Rassegna Mandolinistica organizzata dall’Associazione "Salvatore Converso" di Sorrento e alla Quinta Settimana del Mandolino a Tarbes (Francia).
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Nel dicembre 2002, l’orchestra si è aggiudicata il Primo Premio con votazione 98/100 al 3° Concorso Musicale Internazionale "Francesco Forgione", organizzato dall’Associazione Musicale "Dino Ciani" a Verbania – Intra (VB). Nel 2011 ha ottenuto il premio per la miglior interpretazione del brano d’obbligo al Concorso Internazionale per Orchestre a Plettro “Siegfried Behrend” di Schweinfurt (Germania). Nel settembre 2012 è stata invitata a esibirsi nel prestigioso Teatro Antico di Taormina, nell’ambito della stagione artistica promossa dalla società “Taormina Arte”.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Grazie alla posizione di rilievo raggiunta, l’orchestra è oggi riconosciuta come una benemerita istituzione, insignita di riconoscimenti ufficiali da parte delle autorità per il suo impegno nella salvaguardia del patrimonio musicale italiano, in particolare nella valorizzazione degli strumenti a plettro, espressione della tradizione popolare e colta del nostro Paese.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Attualmente l’orchestra è composta da 32 strumentisti ed è diretta dal Maestro Alberto Bugatti. Il presidente in carica è Piercesare Cordini, mentre il fondatore Gianni Ora continua a essere un punto di riferimento storico e affettivo per tutta la compagine orchestrale.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src={vecchia}
              alt="Orchestra storica" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={taormina}
              alt="Taormina" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={ponte}
              alt="Foto di gruppo" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={prato}
              alt="Foto di gruppo" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={chiesa}
              alt="Foto di gruppo" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={tampa}
              alt="Tampalini" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={loggia}
              alt="Piazza della Loggia" 
              className="rounded-lg shadow-lg"
            />
            <img 
              src={forno}
              alt="Tavernole" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
