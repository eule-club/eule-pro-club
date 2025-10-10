import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Zur EULE Investition",
      questions: [
        {
          q: "Was ist EULE und in was investiere ich?",
          a: "EULE ist ein Projekt zum Bau eines Elektro-Rennwagens (\"made in Essen\") und zur Entwicklung von Technologie zur Optimierung von Betriebs- und Energiesystemen in E-Fahrzeugen. Sie investieren in die EULE Car Production, also in die Forschung, Entwicklung und Fertigung von Hochleistungs-E-Fahrzeugen und deren Komponenten."
        },
        {
          q: "Wie wird das Kapital verwendet?",
          a: "Das Investitionskapital fließt direkt in die Entwicklung und Umsetzung des Projekts. Dies umfasst die Finanzierung von Forschung und Entwicklung (F&E) für next-gen E-Antriebe, Leichtbau-Materialien und die Integration von Spitzentechnologie."
        },
        {
          q: "Welche Rendite kann ich erwarten und wie lange ist die Laufzeit?",
          a: "EULE bietet eine Rendite von 7,00 % p.a. (jährlicher Zuwachs) an. Die Laufzeit der Investition beträgt 1,5 Jahre."
        },
        {
          q: "Was ist der Mindestbetrag für eine Investition?",
          a: "Sie können bereits ab € 250 in EULE investieren."
        },
        {
          q: "Worin unterscheidet sich dieses Investment von einem Bankkredit?",
          a: "EULE wählt bewusst den direkten Weg: Statt Kredite mit hohen Zinsen bei Banken aufzunehmen, beteiligt man Investoren direkt. Die Rendite wird direkt aus echten, laufenden Umsätzen finanziert und nicht über Zinsen."
        },
        {
          q: "Wie generiert EULE die Umsätze für die Rendite?",
          a: "Die Einnahmen stammen aus einem diversifizierten Portfolio: Fahrzeugverkäufe (Verkauf der Rennfahrzeuge und spezialisierter E-Fahrzeug-Komponenten), Technologielizenzen (Lizenzierung patentierter E-Antriebs- und Fahrwerks-Technologien an größere Autohersteller) und Advisory & Consulting (Einnahmen aus Engineering-Dienstleistungen und Motorsport-Expertise)."
        }
      ]
    },
    {
      category: "EULE Club Mitgliedschaften",
      questions: [
        {
          q: "Muss ich eine EULE Club Mitgliedschaft abschließen, um Investor zu sein?",
          a: "Nein. Die Investition in die EULE Car Production und die Mitgliedschaft in einem der EULE Clubs sind separate Angebote. Die Club-Mitgliedschaft dient dem exklusiven Zugang zu Informationen und der Community, bietet aber keine finanzielle Rendite wie das Investment."
        },
        {
          q: "Welche Club-Option ist für mich als Anleger am relevantesten?",
          a: "EULE Inner Circle (Life-Time Plan, € 3.333 Einmalzahlung): Ideal, wenn Sie maximalen Einblick und direkten Kontakt zum Management suchen. Sie erhalten Exklusive Tech-Talks, Persönliche Team Updates von den Gründern und VIP-Priorität bei Events. EULE Club (Monthly Plan, € 99/Monat): Bietet hervorragenden Einblick in die Technik und die Community, ohne die einmalige hohe Zahlung."
        },
        {
          q: "Welchen Vorteil habe ich als Anleger von der Club-Mitgliedschaft?",
          a: "Als Club-Mitglied erhalten Sie detaillierte Einblicke in den technischen Fortschritt und die Strategie (Behind-the-Scenes Access), was Ihnen eine engere Verfolgung des Projekterfolgs ermöglicht, in das Sie investiert haben. Der Inner Circle bietet zudem direkten Zugang zu den Entscheidungsträgern."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-red-500 mb-4">{category.category}</h3>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, qIdx) => (
                  <AccordionItem 
                    key={qIdx} 
                    value={`item-${idx}-${qIdx}`}
                    className="bg-gray-700 rounded-lg px-6 border-none"
                  >
                    <AccordionTrigger className="text-white hover:text-red-400 text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300">
            Für weitere Informationen oder individuelle Unternehmensangebote wenden Sie sich bitte an unser Team:{" "}
            <a href="mailto:hallo@eule.pro" className="text-red-500 hover:underline font-semibold">
              hallo@eule.pro
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
