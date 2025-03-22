
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Download, Eye, Clock, Star, TrendingUp, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const recentResumes = [
    {
      id: "1",
      title: "Software Engineer Resume",
      template: "Professional",
      lastUpdated: "2 days ago",
      views: 12,
      downloads: 3,
      progress: 85,
    },
    {
      id: "2",
      title: "Marketing Specialist CV",
      template: "Modern",
      lastUpdated: "1 week ago",
      views: 45,
      downloads: 8,
      progress: 100,
    },
    {
      id: "3",
      title: "UX Designer Portfolio",
      template: "Creative",
      lastUpdated: "3 weeks ago",
      views: 120,
      downloads: 24,
      progress: 92,
    },
  ];

  return (
    <div className="container p-6 space-y-8">
      {/* Welcome Section with Gradient */}
      <div className="relative overflow-hidden rounded-lg border bg-background p-6">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John!</h1>
            <p className="text-muted-foreground mt-1">Track your resume performance and manage your documents.</p>
          </div>
          <Button asChild className="animate-fade-in" size="lg">
            <Link to="/dashboard/builder">
              <Plus className="mr-2 h-4 w-4" /> Create New Resume
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-primary/5">
            <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <FileText className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">3</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <p className="text-xs text-green-500">+1 from last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-blue-500/5">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Eye className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">177</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <p className="text-xs text-green-500">+32 from last month</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="overflow-hidden border-l-4 border-l-purple-500 hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 bg-purple-500/5">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Download className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold">35</div>
            <div className="flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <p className="text-xs text-green-500">+5 from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Resumes */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Recent Resumes</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/resumes" className="text-sm text-muted-foreground hover:text-foreground">
              View all
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentResumes.map((resume) => (
            <Card key={resume.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 border-b bg-muted/30">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{resume.title}</CardTitle>
                  {resume.progress === 100 && (
                    <div className="h-6 w-6 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Award className="h-3 w-3 text-green-500" />
                    </div>
                  )}
                </div>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                  {resume.template}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completion</span>
                    <span className="font-medium">{resume.progress}%</span>
                  </div>
                  <Progress value={resume.progress} className="h-2" />
                  
                  <div className="flex items-center justify-between text-sm pt-2">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{resume.lastUpdated}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                        <span>{resume.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-muted-foreground" />
                        <span>{resume.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link to={`/dashboard/builder/${resume.id}`}>
                    Edit
                  </Link>
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-1" /> PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
          
          <Card className="flex flex-col items-center justify-center p-6 border-dashed hover:border-primary/50 hover:bg-muted/50 transition-colors">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground mb-4 text-center">Create a new resume to showcase your skills and experience</p>
            <Button asChild>
              <Link to="/dashboard/builder">Create New Resume</Link>
            </Button>
          </Card>
        </div>
      </div>

      {/* Popular Templates */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Popular Templates</h2>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard/templates" className="text-sm text-muted-foreground hover:text-foreground">
              Browse all
            </Link>
          </Button>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Minimal", color: "bg-blue-500/10" },
            { name: "Professional", color: "bg-purple-500/10" },
            { name: "Modern", color: "bg-amber-500/10" },
            { name: "Creative", color: "bg-green-500/10" }
          ].map((template, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] relative">
                <img 
                  src={`https://images.unsplash.com/photo-1586282391${index * 100}-76a6df230234?q=80&w=300&h=400&auto=format&fit=crop`} 
                  alt={template.name} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-medium">{template.name}</h3>
                  </div>
                </div>
                <div className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <CardFooter className="p-3">
                <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link to={`/dashboard/builder?template=${template.name.toLowerCase()}`}>
                    Use {template.name}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
