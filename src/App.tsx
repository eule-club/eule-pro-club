
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Roadmap from "./pages/Roadmap";
import Shop from "./pages/Shop";
import VisionMission from "./pages/VisionMission";
import EulePro from "./pages/EulePro";
import EuleSystem from "./pages/EuleSystem";
import Apply from "./pages/Apply";
import Checkout from "./pages/Checkout";
import TechnicalSpecs from "./pages/TechnicalSpecs";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AffiliatePartner from "./pages/AffiliatePartner";
import Transfer from "./pages/Transfer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/team" element={<Team />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/eule-pro" element={<EulePro />} />
            <Route path="/eule-system" element={<EuleSystem />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/technical-specs" element={<TechnicalSpecs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/affiliate" element={<AffiliatePartner />} />
            <Route path="/transfer" element={<Transfer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
