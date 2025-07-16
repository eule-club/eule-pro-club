
import { CheckCircle, Circle, Calendar } from "lucide-react";

const PhaseTimeline = () => {
  const phases = [
    {
      id: 1,
      title: "Phase 1: Engineering Team Formation & Initial Design",
      period: "July 16 - September 16, 2025",
      months: [
        {
          title: "Month 1: Core Team Recruitment & Motor Design",
          period: "July 16 - August 16, 2025",
          modules: [
            {
              title: "Core Engineering Team Recruitment",
              steps: [
                "Define Key Roles & Responsibilities",
                "Talent Acquisition Strategy & Initial Outreach", 
                "Onboarding & Vision Sharing"
              ]
            },
            {
              title: "FIA-Compliant E-Motor Design & Simulation",
              steps: [
                "E-Motor Layout Optimization using FEA",
                "Applied Mathematics and OED for E-Motor Design"
              ]
            }
          ]
        },
        {
          title: "Month 2: Powertrain & Battery Design Refinement",
          period: "August 17 - September 16, 2025",
          modules: [
            {
              title: "FIA-Compliant Powertrain & Battery System Design",
              steps: [
                "Detailed Powertrain Development (within FIA limits)",
                "Modular Battery System Integration (FIA Compliance)",
                "Applied Mathematics and OED for Battery/Powertrain"
              ]
            },
            {
              title: "Aerodynamics & Control Systems Initial Design",
              steps: [
                "Aerodynamic Initial Design & CFD (FIA Aerodynamic Rules)",
                "Initial Driver Reaction Assistance System Design"
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Phase 2: Intensive Testing & Refinement",
      period: "September 17 - November 16, 2025",
      months: [
        {
          title: "Month 3: FIA-Compliant Prototyping & SimRacing Setup",
          period: "September 17 - October 16, 2025",
          modules: [
            {
              title: "Prototyping & Component-Level Dyno Testing",
              steps: [
                "Prototyping Construction (Modular Systems, FIA Weight Targets)",
                "Hard Dyno Bench Testing (Battery & Powertrain - FIA Power Limits)",
                "OED for Dyno Tests"
              ]
            },
            {
              title: "High-Fidelity SimRacing Platform Setup",
              steps: [
                "High-Fidelity SimRacing Platform Setup (FIA Car Models)",
                "Driver Selection for SimRacing"
              ]
            }
          ]
        },
        {
          title: "Month 4: Initial FIA-Focused SimRacing & System Integration",
          period: "October 17 - November 16, 2025",
          modules: [
            {
              title: "Initial FIA-Focused SimRacing & Virtual Optimization",
              steps: [
                "Preliminary SimRacing Sessions & FIA-Relevant Data Collection",
                "Virtual Development & Optimization using Applied Mathematics",
                "Driver Feedback Loop (Simulated & FIA Context)"
              ]
            },
            {
              title: "Aerodynamic Wind Tunnel Testing (Physical)",
              steps: [
                "Wind Tunnel Tests (Physical, FIA Regulations)",
                "OED for Wind Tunnel Tests"
              ]
            }
          ]
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Detailed Development Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive 4-month plan with modular approach ensuring FIA compliance at every step.
            </p>
          </div>
          
          <div className="space-y-12">
            {phases.map((phase, phaseIndex) => (
              <div key={phase.id} className="bg-white rounded-lg p-8 shadow-lg border border-red-500/10">
                <div className="flex items-start mb-8">
                  <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                    {phase.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black mb-2">
                      {phase.title}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{phase.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {phase.months.map((month, monthIndex) => (
                    <div key={monthIndex} className="border-l-2 border-red-500/20 pl-6 ml-4">
                      <div className="bg-red-50 rounded-lg p-6">
                        <h4 className="text-xl font-semibold text-black mb-2">
                          {month.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">{month.period}</p>
                        
                        <div className="space-y-6">
                          {month.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="bg-white rounded-lg p-4 border border-red-500/10">
                              <h5 className="font-semibold text-black mb-3">
                                Module: {module.title}
                              </h5>
                              
                              <ul className="space-y-2">
                                {module.steps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="flex items-start">
                                    <CheckCircle className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{step}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseTimeline;
