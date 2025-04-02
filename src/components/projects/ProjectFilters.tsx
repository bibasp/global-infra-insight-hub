
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProjectStatus, ProjectType } from "@/types";
import { Search, Filter, X } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
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
    type: "" as ProjectType | "",
  });

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      search: "",
      status: "",
      type: "",
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="flex flex-col space-y-4 md:flex-row md:items-end md:space-x-4 md:space-y-0">
      <div className="flex-1 space-y-1">
        <label htmlFor="search" className="text-sm font-medium">
          Search
        </label>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            placeholder="Search by project name, location..."
            className="pl-8"
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
          />
        </div>
      </div>
      
      <div className="w-full md:w-[180px] space-y-1">
        <label htmlFor="status-filter" className="text-sm font-medium">
          Status
        </label>
        <Select
          value={filters.status}
          onValueChange={(value) => handleFilterChange("status", value)}
        >
          <SelectTrigger id="status-filter">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Statuses</SelectItem>
            {Object.values(ProjectStatus).map((status) => (
              <SelectItem key={status} value={status}>
                {status}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="w-full md:w-[180px] space-y-1">
        <label htmlFor="type-filter" className="text-sm font-medium">
          Type
        </label>
        <Select
          value={filters.type}
          onValueChange={(value) => handleFilterChange("type", value)}
        >
          <SelectTrigger id="type-filter">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            {Object.values(ProjectType).map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button
        variant="outline"
        className="flex items-center gap-1"
        onClick={handleReset}
        disabled={!filters.search && !filters.status && !filters.type}
      >
        <X className="h-4 w-4" />
        Reset
      </Button>
    </div>
  );
}
