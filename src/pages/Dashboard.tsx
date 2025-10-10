import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const overview = [
    { label: "Asset Value Today", value: "€529.17", icon: "🏛️" },
    { label: "Purchase Value", value: "€300", icon: "🧾" },
    { label: "Number of Assets", value: "2", icon: "📐" },
    { label: "Total Profit", value: "€229.17", icon: "🧑‍🤝‍🧑" },
    { label: "Wallet Balance", value: "€129.17", icon: "€" },
  ];

  const assets = [
    { name: "EULE Race Car Development", value: "€100", icon: "🦉🏎️" },
    { name: "Battery Tech & Powertrain", value: "€15,000", icon: "⚡🔋" },
    { name: "Driver Training & E-Sports", value: "€50,000", icon: "🎮🏆" },
    { name: "Track & Infrastructure", value: "€150,000", icon: "🛣️🏗️" },
    { name: "Team Management & Logistics", value: "€300,000", icon: "🧑‍🤝‍🧑🗓️" },
    { name: "EULE AI Racing Systems", value: "€1,000,000", icon: "🧠⚙️" },
    { name: "EULE Grand Prix Series Batch A", value: "€500", icon: "🏁🎟️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-black mb-8">Investor Dashboard</h1>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {overview.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-medium text-gray-700">{item.label}</span>
                    </div>
                    <span className="text-xl font-bold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{asset.icon}</span>
                      <span className="font-medium text-gray-700">{asset.name}</span>
                    </div>
                    <span className="text-xl font-bold text-red-500">{asset.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
