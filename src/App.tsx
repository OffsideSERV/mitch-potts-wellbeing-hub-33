import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Layout from "./components/Layout";
import CriticalCSS from "./components/CriticalCSS";

// Import only the pages we're keeping
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LiveBloodAnalysisBrisbane from "./pages/LiveBloodAnalysisBrisbane";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CriticalCSS />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/live-blood-analysis-brisbane" element={<LiveBloodAnalysisBrisbane />} />
              
              {/* Catch-all route for 404 */}
              <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </HelmetProvider>
);

export default App;
