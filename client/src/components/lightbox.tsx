import { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox() {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    }
  };

  return (
    <div 
      id="lightbox" 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 hidden items-center justify-center p-4"
      onClick={closeLightbox}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={closeLightbox}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10"
        >
          <X size={24} />
        </button>
        <img 
          id="lightbox-image" 
          src="" 
          alt="" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
}
