import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface BankTransferInfoProps {
  amount: number;
  orderNumber: string;
}

const BankTransferInfo = ({ amount, orderNumber }: BankTransferInfoProps) => {
  const { toast } = useToast();

  const bankDetails = {
    recipient: "Hatice Tavli",
    bank: "N26",
    iban: "DE96 1001 1001 2647 5751 59",
    bic: "NTSBDEB1XXX",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Kopiert!",
      description: `${label} wurde in die Zwischenablage kopiert.`,
    });
  };

  return (
    <div className="bg-[#F5F5F7] p-6 rounded-lg space-y-4">
      <h3 className="font-bold text-lg text-black mb-4">Überweisung</h3>
      
      <p className="text-sm text-gray-700 mb-4">
        Bitte überweisen Sie den Betrag auf das nachfolgende Konto, unter der Angabe des Verwendungszwecks.
        Nutzen Sie zur Zahlung ausschließlich das ausgewählte Bankkonto aus.
        Aufgrund der Verpflichtungen im Geldwäschegesetz (GwG) behalten wir uns vor, Zahlungen von fremden/unbekannten Konten abzuweisen.
      </p>

      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Empfänger</p>
            <p className="font-semibold text-black">{bankDetails.recipient}</p>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetails.recipient, "Empfänger")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Bank Name</p>
            <p className="font-semibold text-black">{bankDetails.bank}</p>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetails.bank, "Bank Name")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">IBAN</p>
            <p className="font-semibold text-black">{bankDetails.iban}</p>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetails.iban, "IBAN")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">BIC</p>
            <p className="font-semibold text-black">{bankDetails.bic}</p>
          </div>
          <button
            onClick={() => copyToClipboard(bankDetails.bic, "BIC")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Betrag</p>
            <p className="font-bold text-black text-lg">{amount.toLocaleString('de-DE')} €</p>
          </div>
          <button
            onClick={() => copyToClipboard(amount.toString(), "Betrag")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-between items-center p-3 bg-white rounded border border-gray-200">
          <div>
            <p className="text-sm text-gray-600">Verwendungszweck</p>
            <p className="font-bold text-[#FF1E00] text-lg">{orderNumber}</p>
          </div>
          <button
            onClick={() => copyToClipboard(orderNumber, "Verwendungszweck")}
            className="p-2 hover:bg-gray-100 rounded"
          >
            <Copy className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankTransferInfo;
