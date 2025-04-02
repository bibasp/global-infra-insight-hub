
import { ProjectsTable } from "@/components/projects/ProjectsTable";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { mockProjects } from "@/data/mockData";
import { ProjectStatus, ProjectType } from "@/types";
import { useState, useMemo } from "react";

const Projects = () => {
  const [filters, setFilters] = useState({
    search: "",
    status: "" as ProjectStatus | "",
    type: "" as ProjectType | "",
  });

  const filteredProjects = useMemo(() => {
    return mockProjects.filter((project) => {
      // Apply search filter
      if (filters.search && !project.name.toLowerCase().includes(filters.search.toLowerCase()) &&
          !project.location.country.toLowerCase().includes(filters.search.toLowerCase()) &&
          !(project.location.city && project.location.city.toLowerCase().includes(filters.search.toLowerCase()))) {
        return false;
      }
      
      // Apply status filter (skip if empty)
      if (filters.status && project.status !== filters.status) {
        return false;
      }
      
      // Apply type filter (skip if empty)
      if (filters.type && project.type !== filters.type) {
        return false;
      }
      
      return true;
    });
  }, [filters]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">
          View and manage infrastructure projects
        </p>
      </div>

      <ProjectFilters onFilterChange={setFilters} />

      <div className="bg-card rounded-lg shadow-sm">
        <ProjectsTable projects={filteredProjects} />
      </div>
    </div>
  );
};

export default Projects;
