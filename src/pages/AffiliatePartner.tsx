import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const AffiliatePartner = () => {
  const [activeLevel, setActiveLevel] = useState(1);
  const { toast } = useToast();

  const referralLink = "https://www.eule.pro/reference/TRVLIM";

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast({
      title: "Link kopiert!",
      description: "Der Empfehlungslink wurde in die Zwischenablage kopiert.",
    });
  };

  const partners = [
    { sn: 1, username: "max_mueller", fullName: "Max Müller", email: "max@example.com", investment: "€5,000", joinDate: "15.03.2025" },
    { sn: 2, username: "anna_schmidt", fullName: "Anna Schmidt", email: "anna@example.com", investment: "€2,500", joinDate: "20.03.2025" },
    { sn: 3, username: "tom_weber", fullName: "Tom Weber", email: "tom@example.com", investment: "€10,000", joinDate: "25.03.2025" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-black mb-8">EULE Club Partner-Dashboard</h1>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Partner Information */}
          <Card>
            <CardHeader>
              <CardTitle>Partnern Sie mit dem EULE Club</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Erhalten Sie Unterstützung vom EULE Club und fördern Sie Ihr Geschäft, indem Sie Freunde und Neukunden werben.
              </p>
              <a href="#" className="text-red-500 hover:underline font-semibold">
                Marketingmaterialien hier herunterladen →
              </a>
            </CardContent>
          </Card>

          {/* Referral Link */}
          <Card>
            <CardHeader>
              <CardTitle>Ihr Empfehlungslink</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Laden Sie Ihr Publikum, Freunde & Familie ein, sich über Ihren persönlichen Link anzumelden.
              </p>
              <div className="flex gap-2">
                <Input value={referralLink} readOnly className="flex-1" />
                <Button onClick={copyLink} className="bg-red-500 hover:bg-red-600">
                  Link kopieren
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Management & Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Partner Management</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input placeholder="🔍 Suchen..." className="md:max-w-xs" />
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5, 6].map((level) => (
                  <Button
                    key={level}
                    onClick={() => setActiveLevel(level)}
                    variant={activeLevel === level ? "default" : "outline"}
                    className={activeLevel === level ? "bg-red-500 hover:bg-red-600" : ""}
                  >
                    Level-{level}
                  </Button>
                ))}
              </div>
            </div>

            {/* Partners Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">SN</th>
                    <th className="text-left p-4 font-semibold">Benutzername</th>
                    <th className="text-left p-4 font-semibold">Voller Name</th>
                    <th className="text-left p-4 font-semibold">E-Mail-ID</th>
                    <th className="text-left p-4 font-semibold">Gesamtinvestitionen</th>
                    <th className="text-left p-4 font-semibold">Beitrittsdatum / -zeit</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner.sn} className="border-b hover:bg-gray-50">
                      <td className="p-4">{partner.sn}</td>
                      <td className="p-4">{partner.username}</td>
                      <td className="p-4">{partner.fullName}</td>
                      <td className="p-4">{partner.email}</td>
                      <td className="p-4 font-semibold text-red-500">{partner.investment}</td>
                      <td className="p-4">{partner.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default AffiliatePartner;
