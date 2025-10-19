import { useState } from "react";
import { groupImages } from "@/data/group-images";
import { X, Download } from "lucide-react";

export default function StoriaSection() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

const handleDownload = async (url: string, filename: string) => {
  try {
    const res = await fetch(url);
    const blob = await res.blob();

    // Su mobile: usa Web Share API (l'utente può scegliere "Salva immagine")
    if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      const file = new File([blob], filename, { type: blob.type });
      
      if (navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: 'Salva immagine',
          text: 'Scarica immagine'
        });
        return;
      }
    }

    // Fallback per desktop o browser che non supportano share
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
    
  } catch (err) {
    console.error("Download fallito", err);
  }
};

  return (
    <section id="storia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titolo */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">La nostra storia</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Testo della storia */}
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

          {/* Galleria immagini */}
          <div className="py-2">
            <div className="flex gap-4 overflow-x-auto scrollbar-hide lg:hidden">
              {/* Versione mobile - scrollabile */}
              {groupImages.map((e) => (
                <img
                  key={e.id}
                  src={e.posterUrl}
                  alt={`Foto ${e.id}`}
                  className="flex-shrink-0 w-48 h-48 object-cover rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setLightboxImage(e.posterUrl)}
                />
              ))}
            </div>

            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
              {/* Versione desktop - griglia */}
              {groupImages.map((e) => (
                <img
                  key={e.id}
                  src={e.posterUrl}
                  alt={`Foto ${e.id}`}
                  className="w-full h-48 object-cover rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setLightboxImage(e.posterUrl)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-[90%] max-h-[80%] md:max-w-lg">
              <img
                src={lightboxImage}
                alt="Foto"
                className="max-w-full max-h-full rounded shadow-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                className="absolute top-2 right-2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(null);
                }}
              >
                <X className="w-4 h-4" />
              </button>
              <button
                className="absolute bottom-2 right-2 bg-white text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(lightboxImage, "foto.jpg");
                }}
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
