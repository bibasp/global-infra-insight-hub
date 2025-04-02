
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

interface ProjectsTableProps {
  projects: Project[];
}

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const formatCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
    
    // Format large numbers with M/B suffixes
    if (amount >= 1e9) {
      return formatter.format(amount / 1e9).replace(/\.00$/, '') + 'B';
    }
    if (amount >= 1e6) {
      return formatter.format(amount / 1e6).replace(/\.00$/, '') + 'M';
    }
    return formatter.format(amount);
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Budget</TableHead>
            <TableHead>Last Updated</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <Link 
                  to={`/project/${project.id}`} 
                  className="hover:underline text-foreground hover:text-blue-600"
                >
                  {project.name}
                </Link>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-background">
                  {project.type}
                </Badge>
              </TableCell>
              <TableCell>
                <ProjectStatusBadge status={project.status} />
              </TableCell>
              <TableCell>
                {project.location.city ? `${project.location.city}, ` : ''}
                {project.location.country}
              </TableCell>
              <TableCell>{formatCurrency(project.budget, project.budgetCurrency)}</TableCell>
              <TableCell className="text-muted-foreground">
                {formatDistanceToNow(new Date(project.lastUpdated), { addSuffix: true })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
