
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectStatus, ProjectType } from "@/types";
import { mockProjects } from "@/data/mockData";
import { useEffect, useRef, useState } from "react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ProjectStatusBadge } from "@/components/projects/ProjectStatusBadge";
import { Badge } from "@/components/ui/badge";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  
  const filteredProjects = mockProjects.filter(project => {
    if (selectedStatus && selectedStatus !== "all" && project.status !== selectedStatus) {
      return false;
    }
    if (selectedType && selectedType !== "all" && project.type !== selectedType) {
      return false;
    }
    return true;
  });
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    // This would be replaced with actual map initialization code
    const mapContainer = mapRef.current;
    
    // Create a fake map with project markers
    mapContainer.innerHTML = `
      <div class="bg-gray-200 dark:bg-gray-800 rounded-lg h-full w-full relative overflow-hidden">
        <div class="absolute inset-0 bg-blue-50 dark:bg-blue-950/20">
          <!-- World map path as SVG -->
          <svg viewBox="0 0 1000 500" class="w-full h-full opacity-40 dark:opacity-30">
            <path d="M473.11,210.15c-8.63-0.17-17.26-0.38-25.89-0.63c-2.6,2.25-4.38,4.86-5.33,7.84c-0.95,2.98-0.95,5.97,0,8.95 c1.16,1.38,2.49,2.6,3.99,3.66c1.5,1.06,3.1,1.95,4.79,2.69c2.1,0.07,4.2,0.07,6.3,0c2.1-0.07,4.2-0.07,6.3,0 c-0.99,4.09-2.28,8.12-3.88,12.1c-1.59,3.98-3.29,7.91-5.1,11.77c-0.07,0.7-0.07,1.41,0,2.11c0.07,0.7,0.07,1.41,0,2.11 c-1.27,1.48-2.7,2.8-4.31,3.97c-1.61,1.16-3.29,2.19-5.04,3.07c-0.35,0.07-0.7,0.07-1.05,0c-0.35-0.07-0.7-0.07-1.05,0 c-2.6-0.56-5.15-1.27-7.63-2.11c-2.49-0.85-4.97-1.77-7.43-2.75c-1.27-0.49-2.42-1.13-3.46-1.9c-1.03-0.77-1.96-1.66-2.78-2.63 c-0.85-1.12-1.77-2.21-2.75-3.28c-0.99-1.06-2.04-2.08-3.17-3.04c-0.92-0.42-1.83-0.81-2.75-1.16c-0.92-0.35-1.83-0.74-2.75-1.16 c1.06-3.45,2.32-6.85,3.79-10.21c1.48-3.35,3.02-6.67,4.64-9.95c0.63-0.42,1.16-0.88,1.58-1.37c0.42-0.49,0.88-0.95,1.37-1.37 c0.07-1.76,0.07-3.52,0-5.27c-0.07-1.76-0.07-3.52,0-5.27c-4.93-1.06-9.89-1.97-14.88-2.75c-4.98-0.77-9.95-1.48-14.88-2.11 c-2.25,0.07-4.5,0.07-6.76,0c-2.25-0.07-4.5-0.07-6.76,0c-1.69-0.92-3.35-1.9-4.98-2.96c-1.62-1.06-3.28-2.04-4.98-2.96 c-0.56-0.07-1.13-0.07-1.69,0c-0.56,0.07-1.13,0.07-1.69,0c-0.07-0.28-0.07-0.56,0-0.84c0.07-0.28,0.07-0.56,0-0.84 c-0.7,0.07-1.41,0.07-2.11,0c-0.7-0.07-1.41-0.07-2.11,0c-0.7-0.28-1.41-0.56-2.11-0.84c-0.7-0.28-1.41-0.56-2.11-0.84 c-1.48-0.7-2.92-1.45-4.31-2.22c-1.4-0.77-2.82-1.59-4.31-2.43c-5.98-4.23-11.91-8.44-17.83-12.62c-5.91-4.17-11.84-8.38-17.83-12.62 c-2.81-1.41-5.58-2.85-8.32-4.31c-2.74-1.47-5.5-2.9-8.31-4.31c-1.55-0.35-3.1-0.74-4.64-1.16c-1.55-0.42-3.1-0.81-4.64-1.16 c-0.7,0.07-1.41,0.07-2.11,0c-0.7-0.07-1.41-0.07-2.11,0c-0.28,0.14-0.56,0.28-0.84,0.42c-0.28,0.14-0.56,0.28-0.84,0.42 c-0.63,0.56-1.23,1.16-1.8,1.79c-0.56,0.63-1.09,1.3-1.58,2.01c-3.03,3.88-6.16,7.75-9.36,11.57c-3.21,3.88-6.33,7.75-9.37,11.56 c-0.99,0.63-1.94,1.23-2.85,1.79c-0.91,0.56-1.87,1.09-2.85,1.58c-0.7,0.07-1.41,0.07-2.11,0c-0.7-0.07-1.41-0.07-2.11,0 c-0.28,0.07-0.56,0.07-0.84,0c-0.28-0.07-0.56-0.07-0.84,0c-0.7-0.7-1.41-1.41-2.11-2.11c-0.7-0.7-1.41-1.41-2.11-2.11 c-0.7-0.14-1.41-0.28-2.11-0.42c-0.7-0.14-1.41-0.28-2.11-0.42c-0.84-0.85-1.69-1.69-2.54-2.54c-0.84-0.85-1.69-1.69-2.54-2.54 c-1.06-0.35-2.07-0.74-3.04-1.16c-0.98-0.42-1.94-0.81-2.85-1.16c-0.28-0.14-0.56-0.28-0.84-0.42c-0.28-0.14-0.56-0.28-0.84-0.42 c-0.28-0.28-0.56-0.56-0.84-0.84c-0.28-0.28-0.56-0.56-0.84-0.84c-0.28-0.07-0.56-0.07-0.84,0c-0.28,0.07-0.56,0.07-0.84,0 c-0.42-0.84-0.81-1.69-1.16-2.54c-0.35-0.84-0.74-1.69-1.16-2.54c-0.7-0.56-1.41-1.13-2.11-1.69c-0.7-0.56-1.41-1.13-2.11-1.69 c-0.35-0.28-0.67-0.56-0.95-0.84c-0.28-0.28-0.53-0.56-0.74-0.84c-1.34-2.32-2.57-4.68-3.7-7.07c-1.13-2.39-2.21-4.82-3.25-7.28 c-0.07-0.7-0.07-1.41,0-2.11c0.07-0.7,0.07-1.41,0-2.11c0.35-1.76,0.63-3.52,0.84-5.27c0.21-1.76,0.49-3.52,0.84-5.27 c0.07-0.84,0.07-1.69,0-2.54c-0.07-0.84-0.07-1.69,0-2.54c0.77-0.77,1.59-1.48,2.43-2.11c0.85-0.63,1.73-1.2,2.64-1.69 c0.98-0.91,1.94-1.8,2.85-2.64c0.91-0.84,1.83-1.66,2.75-2.43c2.88-2.04,5.78-4.06,8.68-6.03c2.9-1.97,5.8-3.98,8.68-6.03 c0.42-0.28,0.81-0.56,1.16-0.84c0.35-0.28,0.74-0.56,1.16-0.84c2.18-0.77,4.38-1.48,6.61-2.11c2.22-0.63,4.45-1.27,6.71-1.9 c0.7-0.14,1.41-0.28,2.11-0.42c0.7-0.14,1.41-0.28,2.11-0.42c3.38-0.14,6.76-0.28,10.15-0.42c3.38-0.14,6.76-0.28,10.15-0.42 c0.7,0.28,1.41,0.56,2.11,0.84c0.7,0.28,1.41,0.56,2.11,0.84c0.7,0.07,1.41,0.07,2.11,0c0.7-0.07,1.41-0.07,2.11,0 c1.2,0.42,2.39,0.91,3.56,1.48c1.17,0.56,2.32,1.13,3.46,1.69c0.63-0.07,1.27-0.07,1.9,0c0.63,0.07,1.27,0.07,1.9,0 c1.41,0.56,2.78,1.2,4.1,1.9c1.31,0.7,2.6,1.41,3.87,2.11c0.98,0.28,1.94,0.56,2.85,0.84c0.91,0.28,1.87,0.56,2.85,0.84 c6.88,2.88,13.65,5.95,20.31,9.2c6.67,3.25,13.3,6.61,19.9,10.05c4.5,2.32,8.95,4.7,13.35,7.16c4.5,2.46,8.95,4.98,13.35,7.57 c1.27,0.84,2.5,1.73,3.67,2.64c1.17,0.91,2.32,1.84,3.46,2.75c0.56,0.7,1.09,1.41,1.58,2.11c0.49,0.7,1.02,1.41,1.58,2.11 c0.28,0.35,0.56,0.74,0.84,1.16c0.28,0.42,0.56,0.81,0.84,1.16c0.84,2.04,1.62,4.12,2.33,6.24c0.7,2.11,1.34,4.27,1.9,6.45 c0.28,0.42,0.56,0.84,0.84,1.26c0.28,0.42,0.56,0.84,0.84,1.27c0.07,0.42,0.07,0.84,0,1.26c-0.07,0.42-0.07,0.84,0,1.27 c0.28,0.7,0.56,1.41,0.84,2.11c0.28,0.7,0.56,1.41,0.84,2.11c0.21,6.27,0.35,12.53,0.42,18.8c0.07,6.27,0.21,12.53,0.42,18.8 c-0.7,1.48-1.41,2.99-2.11,4.52c-0.7,1.52-1.41,3.02-2.11,4.48c-0.7,0.7-1.41,1.41-2.11,2.11c-0.7,0.7-1.41,1.41-2.11,2.11 C473.5,209.87,473.3,210.01,473.11,210.15z" fill="#333" />
          </svg>
          
          <!-- Fake markers for each project -->
          ${filteredProjects.map(project => {
            // Convert coordinates to SVG viewBox space
            const x = (project.location.coordinates.lng + 180) * (1000 / 360);
            const y = (90 - project.location.coordinates.lat) * (500 / 180);
            
            // Get color based on status
            let color = "#3b82f6"; // blue for planned
            if (project.status === ProjectStatus.ONGOING) color = "#22c55e";
            if (project.status === ProjectStatus.COMPLETED) color = "#a855f7";
            if (project.status === ProjectStatus.HALTED) color = "#ef4444";
            
            return `
              <div class="absolute flex flex-col items-center cursor-pointer group" style="left: ${x}px; top: ${y}px; transform: translate(-50%, -50%);">
                <div class="w-3 h-3 rounded-full animate-pulse-slow" style="background-color: ${color}"></div>
                <div class="w-6 h-6 rounded-full absolute opacity-40 animate-pulse-slow" style="background-color: ${color}"></div>
                <div class="opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 p-2 rounded bg-background/95 backdrop-blur-sm shadow-lg text-xs text-left z-10 w-48 transform -translate-x-1/2 pointer-events-none transition-opacity">
                  <div class="font-semibold border-b pb-1 mb-1">${project.name}</div>
                  <div class="flex justify-between items-center">
                    <span class="text-muted-foreground">Status:</span>
                    <span class="rounded-full px-2 py-0.5 text-xs" style="background-color: ${color}20; color: ${color};">${project.status}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-muted-foreground">Type:</span>
                    <span>${project.type}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-muted-foreground">Location:</span>
                    <span>${project.location.city ? project.location.city + ', ' : ''}${project.location.country}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div class="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded text-xs">
          Interactive map requires Mapbox or Google Maps integration
        </div>
      </div>
    `;
    
    return () => {
      if (mapContainer) mapContainer.innerHTML = '';
    };
  }, [filteredProjects]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Map View</h1>
        <p className="text-muted-foreground">Geographical distribution of infrastructure projects</p>
      </div>
      
      <Card className="bg-card">
        <CardHeader className="pb-0">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between">
            <CardTitle>Global Projects</CardTitle>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  {Object.values(ProjectStatus).map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {Object.values(ProjectType).map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] w-full mt-4">
            <div ref={mapRef} className="h-full w-full rounded-md overflow-hidden border"></div>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 justify-end">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm">{ProjectStatus.PLANNED}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm">{ProjectStatus.ONGOING}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span className="text-sm">{ProjectStatus.COMPLETED}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm">{ProjectStatus.HALTED}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-card p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Projects Shown: {filteredProjects.length}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden">
              <CardHeader className="py-4 px-5 bg-muted/50">
                <CardTitle className="text-base font-medium">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <ProjectStatusBadge status={project.status} />
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type:</span>
                  <Badge variant="outline" className="bg-background">
                    {project.type}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Location:</span>
                  <span className="text-sm">
                    {project.location.city ? `${project.location.city}, ` : ''}
                    {project.location.country}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
