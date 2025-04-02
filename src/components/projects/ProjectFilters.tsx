
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

interface ProjectFiltersProps {
  filters: {
    search: string;
    status: ProjectStatus | "";
    type: ProjectType | "";
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    search: string;
    status: ProjectStatus | "";
    type: ProjectType | "";
  }>>;
  handleFilterChange: (filters: {
    search: string;
    status: ProjectStatus | "";
    type: ProjectType | "";
  }) => void;
}

export function ProjectFilters({ filters, setFilters, handleFilterChange }: ProjectFiltersProps) {
  const resetFilters = () => {
    const resetFilters = {
      search: "",
      status: "" as const,
      type: "" as const
    };
    setFilters(resetFilters);
    handleFilterChange(resetFilters);
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center mb-6">
      <div className="w-full sm:w-1/3">
        <Input
          placeholder="Search projects..."
          value={filters.search}
          onChange={(e) => {
            const newFilters = { ...filters, search: e.target.value };
            setFilters(newFilters);
            handleFilterChange(newFilters);
          }}
        />
      </div>
      <div className="w-full sm:w-1/3">
        <Select
          value={filters.status}
          onValueChange={(value) => {
            const newFilters = { ...filters, status: value as ProjectStatus | "" };
            setFilters(newFilters);
            handleFilterChange(newFilters);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by status" />
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
      <div className="w-full sm:w-1/3">
        <Select
          value={filters.type}
          onValueChange={(value) => {
            const newFilters = { ...filters, type: value as ProjectType | "" };
            setFilters(newFilters);
            handleFilterChange(newFilters);
          }}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by type" />
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
      <Button variant="outline" size="icon" onClick={resetFilters} className="ml-auto">
        <X className="h-4 w-4" />
        <span className="sr-only">Reset filters</span>
      </Button>
    </div>
  );
}
