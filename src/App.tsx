import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterNav } from "./components/ui/footer-nav";
import GamePage from "./pages/GamePage";
import MenuPage from "./pages/MenuPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="pb-16"> {/* Padding для footer nav */}
          <Routes>
            <Route path="/" element={<GamePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <FooterNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
