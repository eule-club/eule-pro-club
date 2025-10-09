import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { CreditCard } from "lucide-react";

interface CreditCardDialogProps {
  open: boolean;
  onClose: () => void;
  amount: number;
}

const CreditCardDialog = ({ open, onClose, amount }: CreditCardDialogProps) => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle credit card payment
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#FF1E00]" />
            Kreditkartenzahlung
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4">
            <p className="text-sm text-gray-700 mb-1">Zu zahlender Betrag:</p>
            <p className="text-2xl font-bold text-[#FF1E00]">{amount.toLocaleString('de-DE')} €</p>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Kartennummer</label>
            <Input
              placeholder="1234 5678 9012 3456"
              value={cardData.number}
              onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
              maxLength={19}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">Karteninhaber</label>
            <Input
              placeholder="Max Mustermann"
              value={cardData.name}
              onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Gültig bis</label>
              <Input
                placeholder="MM/JJ"
                value={cardData.expiry}
                onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                maxLength={5}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">CVV</label>
              <Input
                placeholder="123"
                value={cardData.cvv}
                onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                maxLength={3}
                type="password"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white font-bold"
          >
            Jetzt bezahlen
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreditCardDialog;
