import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: "Zustimmung erforderlich",
        description: "Bitte stimmen Sie den Nutzungsbedingungen und der Datenschutzerklärung zu.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Registrierung erfolgreich!",
      description: "Ihr Konto wurde erstellt. Sie werden zum Dashboard weitergeleitet.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Illustration */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-black">
                Erstelle ein neues Konto,<br/>schnell und einfach.
              </h1>
              <div className="relative">
                <img 
                  src="/lovable-uploads/eule-rennwagen-hero.png" 
                  alt="EULE Rennfahrer" 
                  className="w-full h-auto rounded-lg"
                />
                {/* Confetti effect could be added here with CSS animations */}
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/588aa5bf-d4eb-4eaa-8d1c-f75462913a23.png" 
                  alt="EULE Logo" 
                  className="h-20 w-auto"
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="referrer">Name des Empfehlungsgebers (optional)</Label>
                  <Input id="referrer" placeholder="Empfehlungsgeber eingeben..." />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Vorname *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nachname *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="username">Benutzername *</Label>
                  <Input id="username" required />
                </div>

                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="country">Land *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Land auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Deutschland</SelectItem>
                      <SelectItem value="at">Österreich</SelectItem>
                      <SelectItem value="ch">Schweiz</SelectItem>
                      <SelectItem value="tr">Türkei</SelectItem>
                      <SelectItem value="other">Andere</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mobile">Mobil-Nr. *</Label>
                  <Input id="mobile" type="tel" required />
                </div>

                <div>
                  <Label htmlFor="password">Passwort *</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      required 
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Passwort wiederholen *</Label>
                  <div className="relative">
                    <Input 
                      id="confirmPassword" 
                      type={showConfirmPassword ? "text" : "password"} 
                      required 
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 leading-tight">
                    Ich stimme den{" "}
                    <a href="#" className="text-red-500 hover:underline">Nutzungsbedingungen</a>
                    {" "}und der{" "}
                    <a href="#" className="text-red-500 hover:underline">Datenschutzerklärung</a>
                    {" "}zu.
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold text-lg py-6"
                >
                  Sign Up
                </Button>

                <div className="text-center pt-4">
                  <p className="text-sm text-gray-600">
                    Sie haben bereits ein Konto?{" "}
                    <Link to="/login" className="text-red-500 hover:underline font-semibold">
                      Hier anmelden
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
