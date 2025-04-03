
import { useState, useEffect } from "react";
import { ProjectsTable } from "@/components/projects/ProjectsTable";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ProjectBranchNav } from "@/components/projects/ProjectBranchNav";
import { mockProjects } from "@/data/mockData";
import { Project, ProjectStatus, ProjectType } from "@/types";

const ProjectsEnergy = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  
  useEffect(() => {
    // Pre-filter to show only energy projects
    setFilteredProjects(mockProjects.filter(project => project.type === ProjectType.ENERGY));
  }, []);

  const handleFilterChange = (filters: {
    search: string;
    status: ProjectStatus | "all";
  }) => {
    const filtered = mockProjects.filter((project) => {
      // Always filter by energy type
      if (project.type !== ProjectType.ENERGY) return false;
      
      // Search filter
      const searchMatch =
        filters.search === "" ||
        project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.location.country.toLowerCase().includes(filters.search.toLowerCase());

      // Status filter
      const statusMatch = filters.status === "all" || project.status === filters.status;

      return searchMatch && statusMatch;
    });

    setFilteredProjects(filtered);
  };

  return (
    <div className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold mb-2 font-playfair">Energy Infrastructure Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse and filter global energy infrastructure initiatives
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm">
        <ProjectBranchNav />
        
        <ProjectFilters 
          onFilterChange={handleFilterChange}
          hideTypeFilter={true} // Hide type filter since we're already in the Energy section
        />
        
        <div className="mt-6">
          <ProjectsTable projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsEnergy;
