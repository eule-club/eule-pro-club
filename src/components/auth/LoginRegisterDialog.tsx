import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LoginRegisterDialogProps {
  open: boolean;
  onClose: () => void;
}

const LoginRegisterDialog = ({ open, onClose }: LoginRegisterDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login erfolgreich!",
      description: "Sie werden zu Ihrem Investor-Dashboard weitergeleitet.",
    });
    onClose();
  };

  const handleGoogleSignIn = () => {
    toast({
      title: "Google Sign-In",
      description: "Google-Anmeldung wird gestartet...",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Login Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-black">Login</h2>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">E-Mail</label>
                <Input
                  type="email"
                  placeholder="ihre@email.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Passwort</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold"
              >
                Einloggen
              </Button>

              <a href="#" className="text-[#FF1E00] text-sm hover:underline block text-center">
                Passwort vergessen?
              </a>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Oder</span>
                </div>
              </div>

              <Button
                type="button"
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full"
              >
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="w-5 h-5 mr-2"
                />
                Sign in with Google
              </Button>
            </form>
          </div>

          {/* Register Section */}
          <div className="space-y-6 bg-[#F5F5F7] p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-black">Noch nicht registriert?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#FF1E00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Vorteile für Anleger</h3>
                  <p className="text-sm text-gray-700">
                    Europaweit direkt in handselektierte Unternehmen investieren und selbst Anlageentscheidungen treffen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#FF1E00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Vorteile für Unternehmen</h3>
                  <p className="text-sm text-gray-700">
                    Profitieren von jahrelanger Finanzierungsexpertise und einem starken Investoren-Netzwerk.
                  </p>
                </div>
              </div>

              <Button
                className="w-full bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold mt-6"
                onClick={() => {
                  toast({
                    title: "Registrierung",
                    description: "Die Registrierungsseite wird geladen...",
                  });
                }}
              >
                Jetzt kostenlos registrieren
              </Button>

              <Button
                type="button"
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full"
              >
                <img 
                  src="https://www.google.com/favicon.ico" 
                  alt="Google" 
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginRegisterDialog;
