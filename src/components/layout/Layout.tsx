
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import BibasHeader from "./BibasHeader";

const Layout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full bg-background">
        <BibasHeader />
        <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
        <footer className="py-6 border-t">
          <div className="container mx-auto px-4 md:px-6">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Bibas Pokhrel. Global Infrastructure Insight Hub.
            </p>
          </div>
        </footer>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
