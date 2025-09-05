import { useState } from "react";
import { ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Shop = () => {
  const [cart, setCart] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "EULE Racing T-Shirt Black",
      price: "129.99 €",
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.5
    },
    {
      id: 2,
      name: "EULE Racing T-Shirt White", 
      price: "129.99 €",
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.8
    },
    {
      id: 3,
      name: "EULE Racing Hoodie Black",
      price: "179.99 €",
      category: "Herz Konzept", 
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.7
    },
    {
      id: 4,
      name: "EULE Racing Windbreaker",
      price: "179.99 €",
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.6
    },
    {
      id: 5,
      name: "EULE Racing T-Shirt Black Women",
      price: "104.99 €",
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.4
    },
    {
      id: 6,
      name: "EULE Racing T-Shirt White Women",
      price: "104.99 €", 
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.9
    },
    {
      id: 7,
      name: "EULE Racing Premium Hoodie Beige",
      price: "209.99 €",
      category: "Herz Konzept",
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.8
    },
    {
      id: 8,
      name: "EULE Racing Premium Hoodie Black",
      price: "209.99 €",
      category: "Herz Konzept", 
      image: "/lovable-uploads/7b9e5e9f-e766-41e1-ae56-c0cc8ddfec01.png",
      rating: 4.7
    }
  ];

  const toggleCart = (productId: number) => {
    setCart(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId) 
        : [...prev, productId]
    );
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/lovable-uploads/e7d5abfb-b837-42bb-9ae0-1306bafe0381.png" 
                alt="EULE Logo" 
                className="w-16 h-16 mr-4"
              />
              <h1 className="text-4xl md:text-6xl font-bold text-black">
                EULE Club Edition x Printful
              </h1>
              <img 
                src="/lovable-uploads/e7d5abfb-b837-42bb-9ae0-1306bafe0381.png" 
                alt="EULE Logo" 
                className="w-16 h-16 ml-4"
              />
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offizielle EULE Racing Kollektion in Zusammenarbeit mit Nike
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border border-gray-200">
                <CardContent className="p-0">
                  {/* Product Image */}
                  <div className="relative overflow-hidden bg-gray-50 aspect-square">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${
                          favorites.includes(product.id) 
                            ? "text-red-500 fill-current" 
                            : "text-gray-600"
                        }`}
                      />
                    </button>

                    {/* Rating Stars */}
                    <div className="absolute top-4 left-4 flex items-center bg-white/90 px-2 py-1 rounded">
                      <div className="flex mr-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Star className="w-4 h-4 text-gray-400 mr-1" />
                      <span className="text-sm text-gray-500">{product.category}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2 text-black group-hover:text-red-500 transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-black">
                        {product.price}
                      </span>
                      
                      <Button
                        onClick={() => toggleCart(product.id)}
                        variant={cart.includes(product.id) ? "default" : "outline"}
                        size="sm"
                        className={`${
                          cart.includes(product.id)
                            ? "bg-red-500 text-white hover:bg-red-600"
                            : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        } transition-all duration-200`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {cart.includes(product.id) ? "Im Warenkorb" : "In Warenkorb"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg z-50">
              <div className="flex items-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                <span className="font-medium">
                  {cart.length} Artikel im Warenkorb
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="ml-4 border-white text-white hover:bg-white hover:text-red-500"
                >
                  Zur Kasse
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;