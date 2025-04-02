
import { StatCard } from "@/components/dashboard/StatCard";
import { ProjectStatusChart } from "@/components/dashboard/ProjectStatusChart";
import { ProjectTypeChart } from "@/components/dashboard/ProjectTypeChart";
import { RecentNewsCard } from "@/components/dashboard/RecentNewsCard";
import { GlobalProjectMap } from "@/components/dashboard/GlobalProjectMap";
import { BarChart3, Globe, Building2, TrendingUp, CircleDollarSign } from "lucide-react";
import { mockProjects, mockNews, mockStatsSummary } from "@/data/mockData";
import { ProjectStatus, ProjectType } from "@/types";

const Dashboard = () => {
  const statusChartData = Object.entries(mockStatsSummary.byStatus).map(([status, value]) => ({
    status: status as ProjectStatus,
    value,
  }));

  const typeChartData = Object.entries(mockStatsSummary.byType).map(([type, count]) => ({
    type: type as ProjectType,
    count,
  }));

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

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
        <ProjectStatusChart data={statusChartData} />
        <ProjectTypeChart data={typeChartData} />
      </div>
    </div>
  );
};

export default Dashboard;
