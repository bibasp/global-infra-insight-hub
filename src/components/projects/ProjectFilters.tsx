import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProjectStatus, ProjectType } from "@/types";

interface ProjectFiltersProps {
  onFilterChange: (filters: {
    search: string;
    status: ProjectStatus | "";
    type: ProjectType | "";
  }) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ProjectStatus | "">("");
  const [type, setType] = useState<ProjectType | "">("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, status, type });
  };

  const handleStatusChange = (value: ProjectStatus | "") => {
    setStatus(value);
    onFilterChange({ search, status: value, type });
  };

  const handleTypeChange = (value: ProjectType | "") => {
    setType(value);
    onFilterChange({ search, status, type: value });
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      <div>
        <Label htmlFor="search">Search</Label>
        <Input
          type="search"
          id="search"
          placeholder="Search projects..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div>
        <Label htmlFor="status">Status</Label>
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Statuses</SelectItem>
            <SelectItem value={ProjectStatus.PLANNED}>{ProjectStatus.PLANNED}</SelectItem>
            <SelectItem value={ProjectStatus.ONGOING}>{ProjectStatus.ONGOING}</SelectItem>
            <SelectItem value={ProjectStatus.COMPLETED}>{ProjectStatus.COMPLETED}</SelectItem>
            <SelectItem value={ProjectStatus.PARTIALLY_OPERATIONAL}>{ProjectStatus.PARTIALLY_OPERATIONAL}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="type">Type</Label>
        <Select onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Types</SelectItem>
            <SelectItem value={ProjectType.ROAD}>{ProjectType.ROAD}</SelectItem>
            <SelectItem value={ProjectType.BRIDGE}>{ProjectType.BRIDGE}</SelectItem>
            <SelectItem value={ProjectType.RAIL}>{ProjectType.RAIL}</SelectItem>
            <SelectItem value={ProjectType.AIRPORT}>{ProjectType.AIRPORT}</SelectItem>
            <SelectItem value={ProjectType.PORT}>{ProjectType.PORT}</SelectItem>
            <SelectItem value={ProjectType.ENERGY}>{ProjectType.ENERGY}</SelectItem>
            <SelectItem value={ProjectType.WATER}>{ProjectType.WATER}</SelectItem>
            <SelectItem value={ProjectType.TELECOM}>{ProjectType.TELECOM}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
