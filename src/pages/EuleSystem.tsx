import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const EuleSystem = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/eule-rennwagen-hero.png" 
                alt="EULE Rennwagen auf der Rennstrecke"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Info */}
            <div className="order-1 md:order-2 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-black">
                EULE System Produktion
              </h1>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p>
                  E-Car-Produktion und Motorsport sind die dynamischen Eckpfeiler der globalen Mobilitätswende. Als Prozess der Entwicklung, Konstruktion und Fertigung von leistungsstarken Elektrofahrzeugen – insbesondere Elektro-Rennwagen – ist dieser Sektor nicht nur ein Schaufenster für technologische Exzellenz, sondern auch ein unverzichtbarer Innovationsmotor für die gesamte Automobilindustrie.
                </p>
                <p>
                  Die Nachfrage nach nachhaltigen Transportlösungen und Hochleistungskomponenten wächst exponentiell. Experten prognostizieren für den globalen Elektrofahrzeug-Markt in den kommenden Jahren ein signifikantes Wachstum, angetrieben durch strengere Emissionsvorschriften und das steigende Bewusstsein für Klimaschutz.
                </p>
              </div>

              {/* Investment Highlight Box */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg space-y-4">
                <h3 className="text-2xl font-bold text-black">
                  Investieren Sie weltweit direkt in die Zukunft der Elektromobilität
                </h3>
                <div className="space-y-2 text-lg">
                  <p className="text-gray-800"><span className="font-semibold">Starting at:</span> €250</p>
                  <p className="text-gray-800"><span className="font-semibold">Gewinn:</span> 7% p.a.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-8">
            Warum in EULE Race Car Production investieren?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Die EULE Car Production investiert gezielt in die Spitzentechnologie der Elektro-Rennwagen-Herstellung. Wir kooperieren mit führenden Ingenieuren, Motorsport-Teams und Automobilzulieferern, die innovative und nachhaltige Praktiken in der Fahrzeugentwicklung und Batterietechnologie anwenden.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Wir bieten Zugang zu:</h3>
            <ul className="space-y-3">
              <li><strong>Kapital:</strong> Finanzierung für Forschung und Entwicklung (F&E) von next-gen E-Antrieben und Leichtbau-Materialien.</li>
              <li><strong>Technologie & Expertise:</strong> Integration von KI-gesteuerten Designprozessen und High-End-Fertigungstechniken zur Steigerung von Performance und Ressourceneffizienz.</li>
              <li><strong>Marktzugang:</strong> Positionierung unserer Hochleistungs-E-Fahrzeuge in lukrativen Motorsport-Serien und als Technologielieferant für die Massenproduktion von E-Autos.</li>
            </ul>

            <p>
              Wir fördern aktiv die digitale Transformation in der Fahrzeugproduktion, entwickeln fortschrittliche Batteriemanagementsysteme und setzen auf additive Fertigungsverfahren (3D-Druck), um die Serienreife unserer Innovationen zu beschleunigen.
            </p>
          </div>
        </div>
      </section>

      {/* Profit Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-black mb-8">
            Ihr Profit: Beteiligung an Wachstum und Leistung
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Unsere Einnahmen generieren wir aus der EULE Car Production durch eine Gewinnbeteiligung an:
            </p>

            <ul className="space-y-3">
              <li><strong>Fahrzeugverkäufen:</strong> Verkauf von Rennfahrzeugen und spezialisierten E-Fahrzeug-Komponenten an Teams und Nischenmärkte.</li>
              <li><strong>Technologielizenzen:</strong> Lizenzierung unserer patentierten E-Antriebs- und Fahrwerks-Technologien an größere Autohersteller.</li>
              <li><strong>Advisory & Consulting:</strong> Einnahmen aus der Bereitstellung von Engineering-Dienstleistungen und Motorsport-Expertise.</li>
            </ul>

            <p>
              Wir profitieren von der stetig wachsenden Nachfrage nach E-Mobilität, da unsere im Motorsport erprobten Lösungen direkt die Effizienz und Reichweite von Serienfahrzeugen verbessern. Durch unser diversifiziertes Portfolio – von Performance-Komponenten bis hin zu Prototypen – mildern wir die Risiken von Marktschwankungen und regulatorischen Änderungen ab.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 px-4">
        <div className="container mx-auto max-w-4xl text-center text-white space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Investitionschance: Werden Sie Teil der E-Revolution
          </h2>
          <p className="text-xl md:text-2xl">
            Wir verpflichten uns, durch Investitionen in eine profitable, agile und verantwortungsvolle E-Car-Produktion einen Mehrwert für unsere Stakeholder zu schaffen.
          </p>
          <p className="text-lg md:text-xl">
            Investieren Sie in die Zukunft des elektrischen Fahrens. Unterstützen Sie nachhaltige Elektroauto-Produktion und profitieren Sie von der wachsenden Nachfrage nach Hochleistungstransport- und Energieprodukten.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <div className="text-2xl font-bold">Starting at €250 | 7% p.a.</div>
          </div>
          <Link to="/apply">
            <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 text-xl px-12 py-6 mt-4">
              JETZT STARTEN
            </Button>
          </Link>
        </div>
      </section>

      {/* Sticky Bottom Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#ff1e00] to-[#ff1e00] text-white py-4 px-4 shadow-lg z-40">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-lg font-semibold">Start Investing today.</span>
          <div className="flex gap-4 items-center">
            <Link to="/apply">
              <Button className="bg-white text-[#ff1e00] hover:bg-gray-100 font-bold">
                Invest Now
              </Button>
            </Link>
            <button className="text-white hover:text-gray-200">✕</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EuleSystem;
