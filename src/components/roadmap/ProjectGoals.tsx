
import { Battery, Zap, Gauge, Users } from "lucide-react";

const ProjectGoals = () => {
  const goals = [
    {
      icon: Users,
      title: "Core Engineering Team",
      description: "Establish specialized team with Formula E expertise",
      target: "8-12 Engineers"
    },
    {
      icon: Zap,
      title: "E-Motor Design",
      description: "FIA-compliant 600kW powertrain development",
      target: "600kW Total Output"
    },
    {
      icon: Battery,
      title: "Battery System",
      description: "Modular battery architecture with advanced efficiency",
      target: "Gen4 Compliance"
    },
    {
      icon: Gauge,
      title: "SimRacing Platform",
      description: "High-fidelity virtual testing environment",
      target: "0-100 km/h in 1.5s"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Project Goals for Next 4 Months
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Focused objectives to establish the foundation for EULE's Formula E entry, 
              designed in full alignment with FIA technical regulations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all border border-red-500/10">
                <div className="bg-red-500 p-3 rounded-full w-fit mb-4">
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3">
                  {goal.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {goal.description}
                </p>
                
                <div className="text-red-500 font-semibold text-sm">
                  Target: {goal.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGoals;
