
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Projects from "./pages/Projects";
import ProjectsTransport from "./pages/project-branches/ProjectsTransport";
import ProjectsEnergy from "./pages/project-branches/ProjectsEnergy";
import ProjectsWater from "./pages/project-branches/ProjectsWater";
import ProjectsBuildings from "./pages/project-branches/ProjectsBuildings";
import ProjectsIndustrial from "./pages/project-branches/ProjectsIndustrial";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

// This configuration is simplified to make it easier to integrate
// as a subpage in your main website
const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="light">
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Projects />} />
            <Route path="/projects/transport" element={<ProjectsTransport />} />
            <Route path="/projects/energy" element={<ProjectsEnergy />} />
            <Route path="/projects/water" element={<ProjectsWater />} />
            <Route path="/projects/buildings" element={<ProjectsBuildings />} />
            <Route path="/projects/industrial" element={<ProjectsIndustrial />} />
          </Route>
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
