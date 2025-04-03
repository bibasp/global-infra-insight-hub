
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProjectStatus, ProjectType } from "@/types";

interface ProjectFiltersProps {
  onFilterChange: (filters: {
    search: string;
    status: ProjectStatus | "all";
    type: ProjectType | "all";
  }) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ProjectStatus | "all">("all");
  const [type, setType] = useState<ProjectType | "all">("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({ search: e.target.value, status, type });
  };

  const handleStatusChange = (value: ProjectStatus | "all") => {
    setStatus(value);
    onFilterChange({ search, status: value, type });
  };

  const handleTypeChange = (value: ProjectType | "all") => {
    setType(value);
    onFilterChange({ search, status, type: value });
  };

  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
      <div className="space-y-2">
        <Label htmlFor="search" className="font-medium">Search</Label>
        <Input
          type="search"
          id="search"
          placeholder="Search projects..."
          value={search}
          onChange={handleSearchChange}
          className="border-gray-300 focus:border-bibas-blue"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="status" className="font-medium">Status</Label>
        <Select onValueChange={handleStatusChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Statuses" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value={ProjectStatus.PLANNED}>{ProjectStatus.PLANNED}</SelectItem>
            <SelectItem value={ProjectStatus.ONGOING}>{ProjectStatus.ONGOING}</SelectItem>
            <SelectItem value={ProjectStatus.COMPLETED}>{ProjectStatus.COMPLETED}</SelectItem>
            <SelectItem value={ProjectStatus.HALTED}>{ProjectStatus.HALTED}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="type" className="font-medium">Type</Label>
        <Select onValueChange={handleTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value={ProjectType.TRANSPORT}>{ProjectType.TRANSPORT}</SelectItem>
            <SelectItem value={ProjectType.ENERGY}>{ProjectType.ENERGY}</SelectItem>
            <SelectItem value={ProjectType.WATER}>{ProjectType.WATER}</SelectItem>
            <SelectItem value={ProjectType.BUILDINGS}>{ProjectType.BUILDINGS}</SelectItem>
            <SelectItem value={ProjectType.INDUSTRIAL}>{ProjectType.INDUSTRIAL}</SelectItem>
            <SelectItem value={ProjectType.OTHER}>{ProjectType.OTHER}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
