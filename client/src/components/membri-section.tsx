import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { Member } from "@shared/schema";
import { members as staticMembers } from "@/data/members";

export default function MembriSection() {

  const groupedMembers = staticMembers?.reduce((acc, member) => {
    if (!acc[member.section]) {
      acc[member.section] = [];
    }
    acc[member.section].push(member);
    return acc;
  }, {} as Record<string, Member[]>) || {};

  const sectionNames = {
    direttore: "Direttore",
    presidente: "Presidente",
    vicepresidente: "Vicepresidente",
    chitarre: "Chitarre",
    mandolini_primi: "Mandolini primi",
    mandolini_secondi: "Mandolini secondi",
    mandole: "Mandole",
    contrabbassi: "Contrabbassi"
  };

 const bgColors = [
    "bg-rose-200",     // Rosa tenue
    "bg-sky-200",      // Azzurro chiaro
    "bg-emerald-200",  // Verde pastello
    "bg-amber-200",    // Giallo caldo e soft
    "bg-violet-200",   // Lilla
    "bg-indigo-200",   // Blu violaceo tenue
    "bg-orange-200",   // Pesca tenue
    "bg-teal-200",     // Verde acqua leggerissimo
    "bg-lime-200",     // Verde lime chiaro
    "bg-fuchsia-200"   // Fucsia delicato
  ];

  const instrumentColors: Record<string, string> = {
    "direttore": "bg-yellow-200",
    "presidente": "bg-lime-200",
    "vicepresidente": "bg-fuchsia-200",
    "chitarre": "bg-sky-200",
    "mandolini_primi": "bg-rose-200",
    "mandolini_secondi": "bg-emerald-200",
    "mandole": "bg-violet-200",
    "contrabbassi": "bg-orange-200",
    // Default per strumenti non mappati
    "default": "bg-gray-200"
  };

  return (
    <section id="membri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal mb-4">I nostri membri</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* descrizione*/}
          </p>
        </div>

        {/* Gruppo speciale: Direttore, Presidente e Vicepresidente sulla stessa riga */}
        {['direttore', 'presidente', 'vicepresidente'].some(s => groupedMembers[s]) && (
          <div className="mb-12">
            <h3 className="text-2xl font-playfair font-semibold text-center mb-8 text-burgundy">
              {/* titolo sezione */}
            </h3>
            <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-3 scrollbar-hide">
              {['direttore', 'presidente', 'vicepresidente'].flatMap((section) =>
                groupedMembers[section]?.map((member) => (
                  <Card key={member.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        {member.photoUrl ? (
                          <AvatarImage src={member.photoUrl} alt={`${member.firstName} ${member.lastName}`} className="w-full h-full object-cover object-center" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center text-white font-bold ${
                            instrumentColors[member.section] || instrumentColors.default
                          }`}>
                            {`${member.firstName.charAt(0)} ${member.lastName.charAt(0)}`}
                          </div>
                        )}
                      </Avatar>
                      <h4 className="text-lg font-semibold text-center text-charcoal">
                        {section === 'direttore' ? 'Maestro ' : ''}{member.firstName} {member.lastName}
                      </h4>
                      <p className="text-center text-gray-600 mb-1">{member.instrument}</p>
                      {member.joinYear && (
                        <p className="text-center text-sm text-gray-500">Dal {member.joinYear}</p>
                      )}
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        )}

        {Object.entries(groupedMembers)
        .filter(([section]) => !['direttore', 'presidente', 'vicepresidente'].includes(section))
        .map(([section, sectionMembers]) => (
          <div key={section} className="mb-12">
            <h3 className="text-2xl font-playfair font-semibold text-center mb-8 text-burgundy">
              {sectionNames[section as keyof typeof sectionNames]}
            </h3>
            
            <div
              className={
                section === 'direttore'
                  ? 'flex justify-center'
                  : 'flex gap-6 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 scrollbar-hide'
              }
            >              
              {sectionMembers.map((member, index) => (
                <Card key={member.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ${section === 'direttore' ? 'max-w-sm' : ''}`}>
                  <CardContent className="p-6">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      {member.photoUrl ? (  
                      <AvatarImage src={member.photoUrl || undefined} alt={`${member.firstName} ${member.lastName}`} className="w-full h-full object-cover object-center"/>
                      ) : (
                         <div
                            className={`w-full h-full flex items-center justify-center text-white font-bold ${
                              instrumentColors[member.section] || instrumentColors.default
                            }`}
                          >
                          {`${member.firstName.charAt(0)} ${member.lastName.charAt(0)}`}
                        </div>
                      )}
                      {/* <AvatarFallback className="text-lg">
                        {member.firstName.charAt(0)}{member.lastName.charAt(0)}
                      </AvatarFallback> */}
                    </Avatar>
                    <h4 className="text-lg font-semibold text-center text-charcoal">
                      {section === 'direttore' ? 'Maestro ' : ''}{member.firstName} {member.lastName}
                    </h4>
                    <p className="text-center text-gray-600 mb-1">{member.instrument}</p>
                    {member.joinYear && (
                      <p className="text-center text-sm text-gray-500">Dal {member.joinYear}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
