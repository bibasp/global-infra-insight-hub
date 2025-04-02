
import { StatCard } from "@/components/dashboard/StatCard";
import { ProjectStatusChart } from "@/components/dashboard/ProjectStatusChart";
import { ProjectTypeChart } from "@/components/dashboard/ProjectTypeChart";
import { RecentNewsCard } from "@/components/dashboard/RecentNewsCard";
import { GlobalProjectMap } from "@/components/dashboard/GlobalProjectMap";
import { ProjectsByContinent } from "@/components/dashboard/ProjectsByContinent";
import { BarChart3, Globe, Building2, TrendingUp, CircleDollarSign } from "lucide-react";
import { mockProjects, mockNews, mockStatsSummary } from "@/data/mockData";
import { ProjectStatus, ProjectType } from "@/types";
import { useMemo } from "react";

const Dashboard = () => {
  const statusChartData = Object.entries(mockStatsSummary.byStatus).map(([status, value]) => ({
    status: status as ProjectStatus,
    value,
  }));

  const typeChartData = Object.entries(mockStatsSummary.byType).map(([type, count]) => ({
    type: type as ProjectType,
    count,
  }));

  // Get projects by continent
  const continentData = useMemo(() => {
    const continentMap = new Map<string, number>();
    
    // Helper function to determine continent from country
    const getContinent = (country: string): string => {
      const northAmerica = ["USA", "Canada", "Mexico"];
      const southAmerica = ["Brazil", "Argentina", "Chile", "Peru", "Bolivia", "Venezuela", "Colombia"];
      const europe = ["UK", "Germany", "France", "Spain", "Italy", "Switzerland", "Croatia", "Denmark", "Serbia"];
      const asia = ["China", "Japan", "India", "South Korea", "Vietnam"];
      const oceania = ["Australia", "New Zealand"];
      const africa = ["Egypt", "South Africa", "Kenya", "Nigeria", "Tanzania", "Cameroon", "Congo", "DRC", "Morocco", "Algeria"];
      
      if (northAmerica.includes(country)) return "North America";
      if (southAmerica.includes(country)) return "South America";
      if (europe.includes(country)) return "Europe";
      if (asia.includes(country)) return "Asia";
      if (oceania.includes(country)) return "Oceania";
      if (africa.includes(country)) return "Africa";
      
      return "Other";
    };
    
    // Count projects by continent
    mockProjects.forEach(project => {
      const continent = getContinent(project.location.country);
      continentMap.set(continent, (continentMap.get(continent) || 0) + 1);
    });
    
    // Convert map to array for chart
    return Array.from(continentMap.entries()).map(([continent, count]) => ({
      continent,
      count
    }));
  }, []);

  // Filter to just recent news (last 5)
  const recentNews = [...mockNews].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Global infrastructure projects overview and analytics
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Projects"
          value={mockStatsSummary.totalProjects}
          description="Active infrastructure projects"
          icon={Building2}
          trend={{ direction: "up", value: "+2 this month" }}
        />
        <StatCard
          title="Ongoing Projects"
          value={mockStatsSummary.byStatus[ProjectStatus.ONGOING]}
          description="Projects in active development"
          icon={TrendingUp}
          trend={{ direction: "up", value: "+1 this month" }}
        />
        <StatCard
          title="Countries"
          value={Object.keys(mockStatsSummary.byRegion).length}
          description="Countries with active projects"
          icon={Globe}
        />
        <StatCard
          title="Total Budget"
          value="$164.2B"
          description="Combined project budgets (USD)"
          icon={CircleDollarSign}
          trend={{ direction: "up", value: "+3.2% YTD" }}
        />
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <GlobalProjectMap projects={mockProjects} />
        <RecentNewsCard news={recentNews} />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <ProjectsByContinent data={continentData} />
        </div>
        <div className="md:col-span-1">
          <ProjectStatusChart data={statusChartData} />
        </div>
        <div className="md:col-span-1">
          <ProjectTypeChart data={typeChartData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
