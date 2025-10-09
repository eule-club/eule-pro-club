import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Copy, Bitcoin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CryptoDialogProps {
  open: boolean;
  onClose: () => void;
  amount: number;
}

type CryptoType = "bitcoin" | "ethereum" | "usdt" | null;

const CryptoDialog = ({ open, onClose, amount }: CryptoDialogProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>(null);
  const { toast } = useToast();

  const wallets = {
    bitcoin: "bc1qhtxmketgkmsxxy35nszrcwdz8zpe7zda4hv37a",
    ethereum: "0xd566a64E50d1281753AABf71cD8307A66B78684E",
    usdt: "TEyhLbZQXEDGbB8YwZN6Hf7Y7sjn65sZZm",
  };

  const cryptoLabels = {
    bitcoin: "Bitcoin (BTC)",
    ethereum: "Ethereum (ERC20)",
    usdt: "USDT (TRC20)",
  };

  const copyWallet = (wallet: string, type: string) => {
    navigator.clipboard.writeText(wallet);
    toast({
      title: "Kopiert!",
      description: `${type} Wallet-Adresse wurde in die Zwischenablage kopiert.`,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bitcoin className="w-5 h-5 text-[#FF1E00]" />
            Kryptowährung Zahlung
          </DialogTitle>
        </DialogHeader>

        <div className="bg-[#F5F5F7] p-4 rounded-lg mb-4">
          <p className="text-sm text-gray-700 mb-1">Zu zahlender Betrag:</p>
          <p className="text-2xl font-bold text-[#FF1E00]">{amount.toLocaleString('de-DE')} €</p>
        </div>

        {!selectedCrypto ? (
          <div className="space-y-3">
            <p className="text-sm text-gray-700 mb-4">
              Wählen Sie Ihre bevorzugte Kryptowährung:
            </p>

            <Button
              onClick={() => setSelectedCrypto("bitcoin")}
              className="w-full bg-[#F7931A] hover:bg-[#F7931A]/90 text-white font-semibold py-6 text-lg"
            >
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23F7931A'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z'/%3E%3C/g%3E%3C/svg%3E" alt="Bitcoin" className="w-6 h-6 mr-2" />
              Bitcoin (BTC)
            </Button>

            <Button
              onClick={() => setSelectedCrypto("ethereum")}
              className="w-full bg-[#627EEA] hover:bg-[#627EEA]/90 text-white font-semibold py-6 text-lg"
            >
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23627EEA'/%3E%3Cg fill='%23FFF' fill-rule='nonzero'%3E%3Cpath fill-opacity='.602' d='M16.498 4v8.87l7.497 3.35z'/%3E%3Cpath d='M16.498 4L9 16.22l7.498-3.35z'/%3E%3Cpath fill-opacity='.602' d='M16.498 21.968v6.027L24 17.616z'/%3E%3Cpath d='M16.498 27.995v-6.028L9 17.616z'/%3E%3Cpath fill-opacity='.2' d='M16.498 20.573l7.497-4.353-7.497-3.348z'/%3E%3Cpath fill-opacity='.602' d='M9 16.22l7.498 4.353v-7.701z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" alt="Ethereum" className="w-6 h-6 mr-2" />
              Ethereum (ERC20)
            </Button>

            <Button
              onClick={() => setSelectedCrypto("usdt")}
              className="w-full bg-[#26A17B] hover:bg-[#26A17B]/90 text-white font-semibold py-6 text-lg"
            >
              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='16' cy='16' r='16' fill='%2326A17B'/%3E%3Cpath fill='%23FFF' d='M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117'/%3E%3C/g%3E%3C/svg%3E" alt="USDT" className="w-6 h-6 mr-2" />
              USDT (TRC20)
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-[#F5F5F7] p-4 rounded-lg">
              <h3 className="font-bold text-black mb-3">
                {cryptoLabels[selectedCrypto]} Wallet
              </h3>
              
              <div className="bg-white p-4 rounded border border-gray-200 break-all">
                <p className="font-mono text-sm text-black">{wallets[selectedCrypto]}</p>
              </div>
              
              <Button
                onClick={() => copyWallet(wallets[selectedCrypto], cryptoLabels[selectedCrypto])}
                className="w-full mt-3 bg-[#FF1E00] hover:bg-[#FF1E00]/90 text-white"
              >
                <Copy className="w-4 h-4 mr-2" />
                Adresse kopieren
              </Button>
            </div>

            <Button
              onClick={() => setSelectedCrypto(null)}
              variant="outline"
              className="w-full"
            >
              Andere Währung wählen
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CryptoDialog;
