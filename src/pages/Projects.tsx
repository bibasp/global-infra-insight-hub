
import { useState } from "react";
import { ProjectsTable } from "@/components/projects/ProjectsTable";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { mockProjects } from "@/data/mockData";
import { Project, ProjectStatus, ProjectType } from "@/types";

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(mockProjects);
  const [view, setView] = useState<"list" | "grid" | "map">("list");

  const handleFilterChange = (filters: {
    search: string;
    status: ProjectStatus | "all";
    type: ProjectType | "all";
  }) => {
    const filtered = mockProjects.filter((project) => {
      // Search filter
      const searchMatch =
        filters.search === "" ||
        project.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        project.location.country.toLowerCase().includes(filters.search.toLowerCase());

      // Status filter
      const statusMatch = filters.status === "all" || project.status === filters.status;

      // Type filter
      const typeMatch = filters.type === "all" || project.type === filters.type;

      return searchMatch && statusMatch && typeMatch;
    });

    setFilteredProjects(filtered);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Infrastructure Projects</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Browse and filter global infrastructure initiatives across various sectors
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border rounded-lg p-6 shadow-sm">
        <ProjectFilters onFilterChange={handleFilterChange} />
        
        <div className="mt-6">
          <ProjectsTable projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
