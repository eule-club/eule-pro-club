
import { Shield, Zap, Weight, FileCheck, AlertTriangle } from "lucide-react";

const FIACompliance = () => {
  const complianceAreas = [
    {
      icon: Zap,
      title: "Power Output Compliance",
      requirement: "Maximum 600kW (Gen4)",
      euleApproach: "Optimized 6 hub motors within FIA limits, focusing on torque delivery and efficiency rather than exceeding power limits.",
      status: "In Design"
    },
    {
      icon: Weight,
      title: "Weight & Dimensions",
      requirement: "Minimum 859kg (Gen3 Evo)",
      euleApproach: "Modular design approach ensuring compliance with FIA weight targets while maximizing performance.",
      status: "Monitored"
    },
    {
      icon: Shield,
      title: "Safety Standards",
      requirement: "FIA Electrical Safety",
      euleApproach: "All safety systems designed to exceed FIA standards, including crash structures and fire suppression.",
      status: "Priority"
    },
    {
      icon: FileCheck,
      title: "Technical Documentation",
      requirement: "Complete FIA Homologation",
      euleApproach: "Comprehensive documentation prepared for FIA review, covering all design and safety aspects.",
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-red-500/20 p-4 rounded-full">
                <Shield className="w-12 h-12 text-red-500" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              FIA Compliance Framework
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Every aspect of EULE's development is designed with strict adherence to FIA Formula E 
              technical and sporting regulations, ensuring eligibility for the 2026 season.
            </p>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-white font-semibold mb-2">
                    Critical Alignment Note
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our target performance of 600-700kW aligns with FIA's Gen4 specifications. 
                    The innovative 6 hub motor design has been adapted to deliver maximum performance 
                    within the FIA's 600kW total power output limit, focusing on torque vectoring and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-red-500/20">
                <div className="flex items-start mb-4">
                  <div className="bg-red-500 p-3 rounded-full mr-4">
                    <area.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {area.title}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      area.status === 'Priority' ? 'bg-red-500/20 text-red-400' :
                      area.status === 'In Design' ? 'bg-yellow-500/20 text-yellow-400' :
                      area.status === 'Monitored' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {area.status}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-red-500 font-medium text-sm mb-2">FIA Requirement:</h4>
                    <p className="text-gray-300 text-sm">{area.requirement}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-red-500 font-medium text-sm mb-2">EULE Approach:</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{area.euleApproach}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-red-500/10 to-red-600/10 rounded-lg p-8 border border-red-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Beyond the 4-Month Period
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Following this intensive four-month foundation phase, EULE will transition into 
                extensive physical track testing, continuous refinement of performance and safety systems, 
                and preparation for full FIA homologation for the 2026 Formula E season.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Physical Testing</h4>
                  <p className="text-gray-400 text-sm">Comprehensive track testing and validation</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">FIA Homologation</h4>
                  <p className="text-gray-400 text-sm">Official certification for racing eligibility</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Team Formation</h4>
                  <p className="text-gray-400 text-sm">Complete racing team and driver recruitment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FIACompliance;
