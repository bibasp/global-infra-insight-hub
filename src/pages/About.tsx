
import { Building2, Globe, BarChart3, MapPin, LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">About Infrastructure Insight</h1>
        <p className="text-muted-foreground mt-1">
          A global perspective on infrastructure megaprojects
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5 text-infra-teal" />
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Infrastructure Insight provides comprehensive data and analysis on global infrastructure megaprojects. 
              Our mission is to increase transparency and understanding of major infrastructure developments worldwide, 
              supporting better decision-making for stakeholders including governments, investors, engineers, and the public.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-infra-teal" />
              <CardTitle>Global Coverage</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We track infrastructure megaprojects across all continents and sectors, from transportation 
              and energy to buildings and industrial facilities. Our database includes both public and 
              private sector initiatives with detailed information on budgets, timelines, and technical specifications.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Building2 className="h-5 w-5 text-infra-teal" />
            <CardTitle>Key Features</CardTitle>
          </div>
          <CardDescription>
            Explore our platform's capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <LayoutDashboard className="h-4 w-4 text-infra-teal" />
                <h3 className="font-medium">Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Get a high-level overview of global infrastructure development with 
                real-time statistics and visualizations.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-infra-teal" />
                <h3 className="font-medium">Project Database</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Access detailed information on hundreds of infrastructure projects, 
                with comprehensive filtering and sorting capabilities.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-infra-teal" />
                <h3 className="font-medium">Interactive Maps</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Visualize projects geographically with our interactive mapping tools, 
                allowing spatial analysis of infrastructure development.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-infra-teal" />
                <h3 className="font-medium">Analytics</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Dive deep into infrastructure trends with advanced analytics 
                and customizable reports focused on key metrics.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-infra-teal" />
            <CardTitle>For Civil Engineers</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Infrastructure Insight offers specialized resources for civil engineering professionals:
          </p>
          
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <h3 className="font-medium mb-2">Technical Specifications</h3>
              <p className="text-sm text-muted-foreground">
                Access detailed engineering specifications, design parameters, and construction 
                methodologies for megaprojects worldwide. Our database includes information on 
                structural systems, materials, environmental considerations, and innovative technologies.
              </p>
            </div>
            
            <div className="rounded-md border p-4">
              <h3 className="font-medium mb-2">Best Practices &amp; Case Studies</h3>
              <p className="text-sm text-muted-foreground">
                Learn from successful and challenging projects through comprehensive case studies. 
                We document engineering solutions to complex problems, highlighting innovations 
                and lessons learned that can be applied to future infrastructure development.
              </p>
            </div>
            
            <div className="rounded-md border p-4">
              <h3 className="font-medium mb-2">Project Challenges &amp; Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Explore how engineering teams have overcome specific technical, environmental, 
                and logistical challenges. Our detailed project pages document problem-solving 
                approaches and innovative solutions implemented by engineers worldwide.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
