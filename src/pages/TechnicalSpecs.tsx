import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnicalSpecs = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F7]" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-[#FF1E00] mb-4">
            EULE FE-01
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            TECHNISCHE DETAILS
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Präzision, Innovation und Performance in jedem Detail
          </p>
        </div>
      </section>

      {/* Technical Images Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-[#F5F5F7] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Technische Vorderansicht</h3>
              <img 
                src="/lovable-uploads/eule-tech-front.png"
                alt="EULE FE-01 Vorderansicht"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-[#F5F5F7] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Technische Seitenansicht</h3>
              <img 
                src="/lovable-uploads/eule-tech-side.png"
                alt="EULE FE-01 Seitenansicht"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-[#F5F5F7] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Technische Rückansicht</h3>
              <img 
                src="/lovable-uploads/eule-tech-rear.png"
                alt="EULE FE-01 Rückansicht"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="bg-[#F5F5F7] rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Oben- und Rückansicht</h3>
              <img 
                src="/lovable-uploads/eule-tech-top.png"
                alt="EULE FE-01 Oben- und Rückansicht"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          
          {/* Blueprint */}
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold mb-6 text-center">Technische Details</h3>
            <img 
              src="/lovable-uploads/eule-tech-blueprint.png"
              alt="EULE FE-01 Technische Details"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-bold mb-8 text-center text-[#FF1E00]">
              Technische Spezifikationen
            </h2>

            {/* Fahrzeugtyp */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">1. Fahrzeugtyp</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Typ:</strong> Reiner Elektroantrieb Formel-E-Rennwagen (Einsitzer)</li>
                <li><strong>Entwicklungsname:</strong> Eule FE-01</li>
                <li><strong>Modelljahr:</strong> 2024</li>
              </ul>
            </div>

            {/* Abmessungen */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">2. Abmessungen</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div><strong>Länge:</strong> 5200 mm</div>
                <div><strong>Breite:</strong> 1890 mm (exkl. Radkappen)</div>
                <div><strong>Höhe:</strong> 1050 mm</div>
                <div><strong>Radstand:</strong> 3100 mm</div>
                <div><strong>Spurweite vorne:</strong> 1650 mm</div>
                <div><strong>Spurweite hinten:</strong> 1550 mm</div>
              </div>
            </div>

            {/* Chassis */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">3. Chassis</h3>
              <ul className="space-y-2 text-lg">
                <li>Monocoque aus Kohlefaserverbundwerkstoff</li>
                <li>Integrierter Frontflügel und Heckflügel</li>
                <li>Halo-Sicherheitssystem</li>
                <li>Minimalistisches und futuristisches Design mit optimierten aerodynamischen Oberflächen</li>
              </ul>
            </div>

            {/* Antriebsstrang */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">4. Antriebsstrang</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Typ:</strong> Vollständig elektrisch</li>
                <li><strong>Motor:</strong> Speziell entwickelter Elektromotor, an der Hinterachse montiert</li>
                <li><strong>Leistung:</strong> Bis zu 350 kW (476 PS) im Attack Mode, 300 kW (408 PS) im Rennen</li>
                <li><strong>Drehmoment:</strong> Hohes Drehmoment über das gesamte Drehzahlband</li>
                <li><strong>Getriebe:</strong> Sequenzielles Eingang-Getriebe</li>
              </ul>
            </div>

            {/* Batterie */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">5. Batterie</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Typ:</strong> Lithium-Ionen</li>
                <li><strong>Kapazität:</strong> 54 kWh (maximal, für Gen3-Reglement)</li>
              </ul>
            </div>

            {/* Aerodynamik */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">6. Aerodynamik</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Frontflügel:</strong> Multielement-Design für präzise Luftstromführung</li>
                <li><strong>Heckflügel:</strong> Spezifisches Design zur Generierung von Abtrieb und Reduzierung des Luftwiderstands</li>
                <li><strong>Diffusor:</strong> Aggressiv gestalteter Heckdiffusor für maximalen Unterboden-Abtrieb</li>
                <li><strong>Luftleitelemente:</strong> Integrierte Flaps und Kanäle zur Optimierung des Luftstroms</li>
                <li>Geschlossene Radhäuser zur Reduzierung von Luftverwirbelungen</li>
              </ul>
            </div>

            {/* Fahrwerk */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">7. Fahrwerk und Federung</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Vorne:</strong> Doppelquerlenker-Aufhängung mit Push-Rod-System und inliegenden Dämpfern</li>
                <li><strong>Hinten:</strong> Doppelquerlenker-Aufhängung mit Push-Rod-System und inliegenden Dämpfern</li>
                <li>Einstellbare Stabilisatoren und Dämpfer für optimale Performance</li>
              </ul>
            </div>

            {/* Bremsen */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">8. Bremsen</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Vorne:</strong> Belüftete Kohlefaser-Bremsscheiben und -Beläge</li>
                <li><strong>Hinten:</strong> Belüftete Kohlefaser-Bremsscheiben und -Beläge mit Brake-by-Wire-System und Energierückgewinnung (Rekuperation)</li>
              </ul>
            </div>

            {/* Räder und Reifen */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">9. Räder und Reifen</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Felgen:</strong> Spezielle Leichtmetallfelgen (schwarz, subtil detailliert)</li>
                <li><strong>Reifen:</strong> Spezifische Allwetter-Rennreifen (Michelin Pilot Sport EV, gemäß Reglement)</li>
              </ul>
            </div>

            {/* Cockpit */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">10. Cockpit und Sicherheit</h3>
              <ul className="space-y-2 text-lg">
                <li>Maßgeschneiderter Rennsitz</li>
                <li>6-Punkt-Sicherheitsgurt</li>
                <li>Feuerlöschanlage</li>
                <li>Lenkrad mit integriertem Display und Steuerelementen</li>
                <li>Kopf- und Nackenschutzsystem (HANS-System)</li>
              </ul>
            </div>

            {/* Performance */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">11. Performance</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Höchstgeschwindigkeit:</strong> ca. 320 km/h</li>
                <li><strong>0-100 km/h:</strong> unter 3 Sekunden</li>
              </ul>
            </div>

            {/* Designelemente */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 border-b-2 border-[#FF1E00] pb-2">12. Designelemente</h3>
              <ul className="space-y-2 text-lg">
                <li><strong>Grundfarbe:</strong> Reinweiß</li>
                <li>EULE-Logo in Rot und Bold an Front, Seite und auf den Flügeln</li>
                <li>Individuelles Eulen-Maskottchen-Logo an den Seiten</li>
                <li>Michelin-Logos in Blau und Weiß an den Radkästen</li>
              </ul>
            </div>

            {/* Innovation */}
            <div className="mb-8 bg-[#FF1E00] text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">13. Innovation & Fahrzeugmanagement: EULE-System</h3>
              <h4 className="text-xl font-bold mb-3">AI-Powered Advanced Optimization Services</h4>
              <p className="mb-4 text-lg">
                <strong>Betriebssystem-Optimierung bei Batterie und Antrieb:</strong> Das EULE-System bietet hochmoderne, KI-gesteuerte Lösungen zur Optimierung der Batterieleistung, der Energieeffizienz und der dynamischen Leistungssteigerung speziell für Formel E und Elektrofahrzeuge.
              </p>
              <p className="mb-4 text-lg">
                <strong>Kerntechnologie:</strong> Einsatz von selbstlernender künstlicher Intelligenz in Kombination mit haptischer Sensortechnologie, um in Echtzeit Daten zu analysieren und Fahrzeugparameter dynamisch anzupassen.
              </p>
              <p className="text-lg">
                <strong>Vorteile:</strong> Maximierung der Reichweite, Erhöhung der Performance unter Rennbedingungen, prädiktive Wartungsempfehlungen und ein adaptives Energiemanagement, das sich an Streckenbedingungen und Fahrstil anpasst.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalSpecs;
