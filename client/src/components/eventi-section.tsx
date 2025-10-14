import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import type { Event } from "@shared/schema";
import { events } from "@/data/events";

export default function EventiSection() {
  const [showPast, setShowPast] = useState(false);

  const today = new Date();
  const upcomingEvents = events.filter(e => new Date(e.date) >= today);
  const pastEvents = events.filter(e => new Date(e.date) < today); 

  const addToCalendar = (event: Event, type: 'google' | 'apple') => {
    const startDate = new Date(event.date);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const formatDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    if (type === 'google') {
      const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(event.description || '')}&location=${encodeURIComponent(event.venue)}`;
      window.open(googleUrl, '_blank');
    } else {
      // Apple Calendar (ICS file)
      const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ilPlettro//Orchestra Events//EN
BEGIN:VEVENT
UID:${event.id}@ilplettro.it
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description || ''}
LOCATION:${event.venue}
END:VEVENT
END:VCALENDAR`;
      
      const blob = new Blob([icsContent], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${event.title.replace(/\s+/g, '_')}.ics`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const displayedEvents = showPast ? pastEvents : upcomingEvents;

  return (
    <section id="eventi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">Eventi</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scopri i nostri concerti e eventi musicali
          </p>
        </div>

        {/* Event navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-50 rounded-lg p-2 flex items-center space-x-2">
            <Button
              variant={!showPast ? "default" : "ghost"}
              onClick={() => setShowPast(false)}
              className={!showPast ? "bg-burgundy hover:bg-burgundy/90" : ""}
            >
              Prossimi eventi
            </Button>
            <Button
              variant={showPast ? "default" : "ghost"}
              onClick={() => setShowPast(true)}
              className={showPast ? "bg-burgundy hover:bg-burgundy/90" : ""}
            >
              Eventi passati
            </Button>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
          displayedEvents && displayedEvents.length > 0 ? (
            displayedEvents.map((event) => (
              <Card key={event.id} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${showPast ? 'opacity-75' : ''}`}>
                <img 
                  src={event.posterUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Badge variant="secondary" className="bg-burgundy text-white">
                      {new Date(event.date).toLocaleDateString('it-IT', { 
                        day: 'numeric', 
                        month: 'short' 
                      }).toUpperCase()}
                    </Badge>
                    <span className="ml-3 text-gray-600 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-charcoal mb-3">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.venue}
                  </p>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  {!showPast && (
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        onClick={() => addToCalendar(event, 'google')}
                        className="bg-burgundy text-white hover:bg-burgundy/90"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Google
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => addToCalendar(event, 'apple')}
                        className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Apple
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">
                {showPast ? 'Nessun evento passato disponibile' : 'Nessun evento in programma'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
