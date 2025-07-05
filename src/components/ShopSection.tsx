
import { ShoppingBag, Shirt, Package, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const ShopSection = () => {
  const { t } = useLanguage();

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              EULE Shop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wear the future of racing. Premium merchandise designed for racing enthusiasts and technology lovers.
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="group cursor-pointer">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-red-100 group-hover:shadow-xl transition-all duration-300">
                <Shirt className="w-16 h-16 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">Racing Apparel</h3>
                <p className="text-gray-600 text-center">Professional racing suits, team shirts, and casual wear.</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-red-100 group-hover:shadow-xl transition-all duration-300">
                <Package className="w-16 h-16 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">Accessories</h3>
                <p className="text-gray-600 text-center">Racing helmets, gloves, and premium accessories.</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-red-100 group-hover:shadow-xl transition-all duration-300">
                <Zap className="w-16 h-16 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">Tech Gadgets</h3>
                <p className="text-gray-600 text-center">Smart devices, charging stations, and tech accessories.</p>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-red-100 group-hover:shadow-xl transition-all duration-300">
                <ShoppingBag className="w-16 h-16 text-red-500 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-black mb-2 text-center">Limited Edition</h3>
                <p className="text-gray-600 text-center">Exclusive collectibles and limited-time offers.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-red-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Coming Soon</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Our official merchandise store is launching soon. Be the first to get exclusive EULE racing gear and limited edition collectibles.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 text-lg font-semibold rounded-full"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
