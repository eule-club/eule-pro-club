
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import VehicleSection from "@/components/VehicleSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <VehicleSection />
      <PartnershipSection />
      <MembershipSection />
      <Footer />
    </div>
  );
};

export default Index;
