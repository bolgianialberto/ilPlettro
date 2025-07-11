import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Music, Camera, Video, Play, PlayCircle } from "lucide-react";
import type { MediaItem } from "@shared/schema";

export default function MediaSection() {
  const [activeType, setActiveType] = useState<'audio' | 'photo' | 'video'>('audio');
  
  const { data: mediaItems, isLoading } = useQuery<MediaItem[]>({
    queryKey: ['/api/media', activeType],
  });

  const openLightbox = (imageUrl: string) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image') as HTMLImageElement;
    
    if (lightbox && lightboxImage) {
      lightboxImage.src = imageUrl;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    }
  };

  const mediaTypes = [
    { type: 'audio' as const, label: 'Audio', icon: Music },
    { type: 'photo' as const, label: 'Foto', icon: Camera },
    { type: 'video' as const, label: 'Video', icon: Video }
  ];

  return (
    <section id="media" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Media</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Esplora la nostra collezione di audio, foto e video
          </p>
        </div>

        {/* Media Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 flex items-center space-x-2 shadow-sm">
            {mediaTypes.map(({ type, label, icon: Icon }) => (
              <Button
                key={type}
                variant={activeType === type ? "default" : "ghost"}
                onClick={() => setActiveType(type)}
                className={activeType === type ? "bg-burgundy hover:bg-burgundy/90" : ""}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Media Content */}
        <div className="min-h-[400px]">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="bg-white">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-4">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <>
              {/* Audio Section */}
              {activeType === 'audio' && (
                <Card className="bg-white rounded-xl shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">Registrazioni Audio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mediaItems?.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                          <h4 className="font-semibold text-charcoal mb-2">{item.title}</h4>
                          <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="sm"
                              className="bg-burgundy text-white rounded-full w-10 h-10 p-0 hover:bg-burgundy/90"
                            >
                              <Play className="w-4 h-4" />
                            </Button>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-burgundy h-2 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <span className="text-sm text-gray-600">{item.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Photo Section */}
              {activeType === 'photo' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mediaItems?.map((item) => (
                    <img
                      key={item.id}
                      src={item.url}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-full h-64 object-cover cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => openLightbox(item.url)}
                    />
                  ))}
                </div>
              )}

              {/* Video Section */}
              {activeType === 'video' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mediaItems?.map((item) => (
                    <Card key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="aspect-video bg-gray-200 flex items-center justify-center">
                        <div className="text-center">
                          <PlayCircle className="w-16 h-16 text-burgundy mb-4 mx-auto" />
                          <p className="text-charcoal font-medium">{item.title}</p>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}

              {/* Empty State */}
              {mediaItems && mediaItems.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Nessun contenuto {activeType === 'audio' ? 'audio' : activeType === 'photo' ? 'fotografico' : 'video'} disponibile
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
