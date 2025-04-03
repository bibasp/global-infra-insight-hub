
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Building2, Factory, Droplets, Truck, Lightbulb, Database } from "lucide-react";
import { ProjectType } from "@/types";

export function ProjectBranchNav() {
  const location = useLocation();
  
  const branches = [
    { path: "/", name: "All Projects", icon: Database },
    { path: "/projects/transport", name: "Transport", icon: Truck, type: ProjectType.TRANSPORT },
    { path: "/projects/energy", name: "Energy", icon: Lightbulb, type: ProjectType.ENERGY },
    { path: "/projects/water", name: "Water", icon: Droplets, type: ProjectType.WATER },
    { path: "/projects/buildings", name: "Buildings", icon: Building2, type: ProjectType.BUILDINGS },
    { path: "/projects/industrial", name: "Industrial", icon: Factory, type: ProjectType.INDUSTRIAL },
  ];

  return (
    <div className="mb-6 border-b pb-3">
      <nav className="flex flex-wrap gap-1 md:gap-2">
        {branches.map((branch) => (
          <Link
            key={branch.path}
            to={branch.path}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
              location.pathname === branch.path
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            <branch.icon className="h-4 w-4" />
            {branch.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
