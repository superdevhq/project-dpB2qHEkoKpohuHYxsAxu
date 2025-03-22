
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Download, Eye, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const recentResumes = [
    {
      id: "1",
      title: "Software Engineer Resume",
      template: "Professional",
      lastUpdated: "2 days ago",
      views: 12,
      downloads: 3,
    },
    {
      id: "2",
      title: "Marketing Specialist CV",
      template: "Modern",
      lastUpdated: "1 week ago",
      views: 45,
      downloads: 8,
    },
    {
      id: "3",
      title: "UX Designer Portfolio",
      template: "Creative",
      lastUpdated: "3 weeks ago",
      views: 120,
      downloads: 24,
    },
  ];

  return (
    <div className="container p-6 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Manage your resumes and track performance.</p>
        </div>
        <Button asChild>
          <Link to="/dashboard/builder">
            <Plus className="mr-2 h-4 w-4" /> Create New Resume
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Resumes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">+1 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">177</div>
            <p className="text-xs text-muted-foreground">+32 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">35</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Resumes</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {recentResumes.map((resume) => (
            <Card key={resume.id}>
              <CardHeader className="pb-3">
                <CardTitle>{resume.title}</CardTitle>
                <CardDescription>Template: {resume.template}</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{resume.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                    <span>{resume.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4 text-muted-foreground" />
                    <span>{resume.downloads}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
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
          <Card className="flex flex-col items-center justify-center p-6 border-dashed">
            <Plus className="h-8 w-8 text-muted-foreground mb-2" />
            <p className="text-muted-foreground mb-4 text-center">Create a new resume to showcase your skills and experience</p>
            <Button asChild>
              <Link to="/dashboard/builder">Create New Resume</Link>
            </Button>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Popular Templates</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {["Minimal", "Professional", "Modern", "Creative"].map((template, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img 
                  src={`https://images.unsplash.com/photo-1586282391${index * 100}-76a6df230234?q=80&w=300&h=400&auto=format&fit=crop`} 
                  alt={template} 
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-2 right-2 bg-background rounded-full p-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                </div>
              </div>
              <CardFooter className="p-3">
                <Button variant="ghost" className="w-full" asChild>
                  <Link to={`/dashboard/builder?template=${template.toLowerCase()}`}>
                    Use {template}
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
