import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FounderSection from "@/components/FounderSection";
import VehicleSection from "@/components/VehicleSection";
import PartnershipSection from "@/components/PartnershipSection";
import MembershipSection from "@/components/MembershipSection";
import ClubSection from "@/components/ClubSection";
import ShopSection from "@/components/ShopSection";
import GrandPrixSection from "@/components/GrandPrixSection";
import Footer from "@/components/Footer";
import { ChatWidget } from "@/components/chat/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FounderSection />
      <VehicleSection />
      <PartnershipSection />
      <MembershipSection />
      <ClubSection />
      <ShopSection />
      <GrandPrixSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
