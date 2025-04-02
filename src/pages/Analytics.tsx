
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockProjects, mockStatsSummary } from "@/data/mockData";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CircleDollarSign, Clock, Building2, BarChart as BarChartIcon } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { ProjectStatus, ProjectType } from "@/types";

const Analytics = () => {
  const budgetByType = Object.values(ProjectType).map(type => ({
    name: type,
    value: mockProjects
      .filter(p => p.type === type)
      .reduce((acc, curr) => {
        // Convert to USD for simplicity (this would be more complex in a real app)
        let usdValue = curr.budget;
        if (curr.budgetCurrency === "EUR") usdValue = curr.budget * 1.1;
        if (curr.budgetCurrency === "GBP") usdValue = curr.budget * 1.3;
        if (curr.budgetCurrency === "CNY") usdValue = curr.budget * 0.14;
        if (curr.budgetCurrency === "AUD") usdValue = curr.budget * 0.67;
        if (curr.budgetCurrency === "INR") usdValue = curr.budget * 0.012;
        return acc + usdValue;
      }, 0) / 1e9 // Convert to billions
  }));

  const projectTimeline = [
    { month: "Jan", count: 1 },
    { month: "Feb", count: 2 },
    { month: "Mar", count: 4 },
    { month: "Apr", count: 3 },
    { month: "May", count: 5 },
    { month: "Jun", count: 7 },
    { month: "Jul", count: 8 },
    { month: "Aug", count: 10 },
    { month: "Sep", count: 9 },
    { month: "Oct", count: 8 },
    { month: "Nov", count: 10 },
    { month: "Dec", count: 10 },
  ];

  const completionRate = [
    { year: "2020", rate: 72 },
    { year: "2021", rate: 68 },
    { year: "2022", rate: 75 },
    { year: "2023", rate: 82 },
    { year: "2024", rate: 78 },
  ];

  const regionData = Object.entries(mockStatsSummary.byRegion).map(([name, value]) => ({
    name,
    value
  }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Insights and trends for infrastructure projects
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Average Budget"
          value="$16.4B"
          description="Per project (USD equivalent)"
          icon={CircleDollarSign}
          trend={{ direction: "up", value: "+12% YoY" }}
        />
        <StatCard
          title="Avg. Completion Time"
          value="36.5 months"
          description="From start to finish"
          icon={Clock}
          trend={{ direction: "down", value: "-2.3 months" }}
        />
        <StatCard
          title="On-Budget Projects"
          value="67%"
          description="Projects within 10% of budget"
          icon={BarChartIcon}
          trend={{ direction: "up", value: "+5% YoY" }}
        />
        <StatCard
          title="Completion Rate"
          value="78%"
          description="Projects completed on schedule"
          icon={Building2}
          trend={{ direction: "neutral", value: "No change" }}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Budget Allocation by Project Type</CardTitle>
            <CardDescription>Total budget in billions USD</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetByType} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toFixed(2)}B`, "Budget"]} />
                <Legend />
                <Bar dataKey="value" name="Budget (Billions USD)" fill="#0093b0" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Projects Over Time</CardTitle>
            <CardDescription>Monthly count for current year</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" name="Active Projects" stroke="#005f85" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Completion Rate Trends</CardTitle>
            <CardDescription>Percentage of projects completed on schedule</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={completionRate}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis domain={[60, 90]} tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => [`${value}%`, "Completion Rate"]} />
                <Legend />
                <Line type="monotone" dataKey="rate" name="On-time Completion %" stroke="#ff7e00" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects by Region</CardTitle>
            <CardDescription>Distribution across global regions</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={regionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {regionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [value, "Count"]} />
                <Legend layout="vertical" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
