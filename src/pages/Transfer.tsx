import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Transfer = () => {
  const [amount, setAmount] = useState("");
  const [fromWallet, setFromWallet] = useState("");
  const [toWallet, setToWallet] = useState("");
  const { toast } = useToast();

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fromWallet || !toWallet || !amount) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Felder aus.",
        variant: "destructive",
      });
      return;
    }

    if (fromWallet === toWallet) {
      toast({
        title: "Fehler",
        description: "Quell- und Ziel-Wallet müssen unterschiedlich sein.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Übertragung erfolgreich!",
      description: `€${amount} wurde von ${fromWallet} zu ${toWallet} übertragen.`,
    });

    // Reset form
    setAmount("");
    setFromWallet("");
    setToWallet("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Guthabenübertragung</h1>

          <Card>
            <CardHeader>
              <CardTitle>Guthaben transferieren</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Sie können das Guthaben vom Einzahlungs-Wallet zum Wallet-Guthaben oder vom Wallet-Guthaben zum Einzahlungs-Wallet übertragen.
              </p>
              <p className="text-sm text-gray-600 mb-8">
                Verfügbare Kryptowährungen: BTC, ETH, USDT (TRC20)
              </p>

              <form onSubmit={handleTransfer} className="space-y-6">
                <div>
                  <Label htmlFor="fromWallet">Wallet auswählen (Von)</Label>
                  <Select value={fromWallet} onValueChange={setFromWallet}>
                    <SelectTrigger id="fromWallet">
                      <SelectValue placeholder="Quell-Wallet auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deposit">Einzahlungs-Wallet</SelectItem>
                      <SelectItem value="balance">Wallet-Guthaben</SelectItem>
                      <SelectItem value="btc">Bitcoin (BTC) Wallet</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH) Wallet</SelectItem>
                      <SelectItem value="usdt">USDT (TRC20) Wallet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="toWallet">Übertragen an (Zu)</Label>
                  <Select value={toWallet} onValueChange={setToWallet}>
                    <SelectTrigger id="toWallet">
                      <SelectValue placeholder="Ziel-Wallet auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deposit">Einzahlungs-Wallet</SelectItem>
                      <SelectItem value="balance">Wallet-Guthaben</SelectItem>
                      <SelectItem value="btc">Bitcoin (BTC) Wallet</SelectItem>
                      <SelectItem value="eth">Ethereum (ETH) Wallet</SelectItem>
                      <SelectItem value="usdt">USDT (TRC20) Wallet</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="amount">Betrag (€)</Label>
                  <Input 
                    id="amount" 
                    type="number" 
                    min="0"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Betrag eingeben"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold text-lg py-6"
                >
                  SENDEN
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Transfer;
