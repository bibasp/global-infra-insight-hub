
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import BibasHeader from "./BibasHeader";
import { motion } from "framer-motion";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "./Sidebar";

const Layout = () => {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col w-full bg-gray-50 dark:bg-gray-950">
          <BibasHeader />
          <div className="flex flex-1 w-full">
            <AppSidebar />
            <motion.main 
              className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Outlet />
            </motion.main>
          </div>
          <footer className="py-6 border-t bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 md:px-6">
              <p className="text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} Bibas Pokhrel. Global Infrastructure Insight Hub.
              </p>
            </div>
          </footer>
        </div>
      </TooltipProvider>
    </SidebarProvider>
  );
};

export default Layout;
