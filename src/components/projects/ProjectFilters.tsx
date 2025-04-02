
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ProjectStatus, ProjectType } from "@/types";
import { X } from "lucide-react";
import { useState } from "react";

interface ProjectFiltersProps {
  onFilterChange: (filters: {
    search: string;
    status: ProjectStatus | "";
    type: ProjectType | "";
  }) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    status: "" as ProjectStatus | "",
    type: "" as ProjectType | ""
  });

  const resetFilters = () => {
    const resetFilters = {
      search: "",
      status: "" as const,
      type: "" as const
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center mb-6">
      <div className="w-full sm:w-1/3">
        <Input
          placeholder="Search projects..."
          value={filters.search}
          onChange={(e) => {
            const newFilters = { ...filters, search: e.target.value };
            handleFilterChange(newFilters);
          }}
        />
      </div>
      <div className="w-full sm:w-1/3">
        <Select
          value={filters.status || "all"}
          onValueChange={(value) => {
            // Convert "all" to empty string for filter logic
            const newValue = value === "all" ? "" : value as ProjectStatus;
            const newFilters = { ...filters, status: newValue };
            handleFilterChange(newFilters);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            {Object.values(ProjectStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="w-full sm:w-1/3">
        <Select
          value={filters.type || "all"}
          onValueChange={(value) => {
            // Convert "all" to empty string for filter logic
            const newValue = value === "all" ? "" : value as ProjectType;
            const newFilters = { ...filters, type: newValue };
            handleFilterChange(newFilters);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {Object.values(ProjectType).map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button variant="outline" size="icon" onClick={resetFilters} className="ml-auto">
        <X className="h-4 w-4" />
        <span className="sr-only">Reset filters</span>
      </Button>
    </div>
  );
}
