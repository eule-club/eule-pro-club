
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RoadmapHero from "@/components/roadmap/RoadmapHero";
import ProjectGoals from "@/components/roadmap/ProjectGoals";
import PhaseTimeline from "@/components/roadmap/PhaseTimeline";
import FIACompliance from "@/components/roadmap/FIACompliance";

const Roadmap = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <RoadmapHero />
      <ProjectGoals />
      <PhaseTimeline />
      <FIACompliance />
      <Footer />
    </div>
  );
};

export default Roadmap;
