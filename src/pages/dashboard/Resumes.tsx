
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Plus, 
  Search, 
  Download, 
  MoreHorizontal, 
  Pencil, 
  Copy, 
  Trash2, 
  Eye, 
  Clock, 
  Filter,
  Grid,
  List,
  Award,
  CheckCircle2
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Resumes = () => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const resumes = [
    {
      id: "1",
      title: "Software Engineer Resume",
      template: "Professional",
      lastUpdated: "2 days ago",
      views: 12,
      downloads: 3,
      createdAt: "May 15, 2023",
      progress: 85,
      status: "Active"
    },
    {
      id: "2",
      title: "Marketing Specialist CV",
      template: "Modern",
      lastUpdated: "1 week ago",
      views: 45,
      downloads: 8,
      createdAt: "April 3, 2023",
      progress: 100,
      status: "Active"
    },
    {
      id: "3",
      title: "UX Designer Portfolio",
      template: "Creative",
      lastUpdated: "3 weeks ago",
      views: 120,
      downloads: 24,
      createdAt: "January 22, 2023",
      progress: 92,
      status: "Active"
    },
    {
      id: "4",
      title: "Project Manager Resume",
      template: "Minimal",
      lastUpdated: "1 month ago",
      views: 67,
      downloads: 12,
      createdAt: "December 10, 2022",
      progress: 70,
      status: "Draft"
    },
    {
      id: "5",
      title: "Data Analyst CV",
      template: "Professional",
      lastUpdated: "2 months ago",
      views: 89,
      downloads: 15,
      createdAt: "November 5, 2022",
      progress: 100,
      status: "Active"
    },
  ];

  const filteredResumes = resumes.filter(resume => 
    resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resume.template.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resume.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string, progress: number) => {
    if (status === "Draft") {
      return <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">Draft</Badge>;
    } else if (progress === 100) {
      return <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">Complete</Badge>;
    } else {
      return <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">In Progress</Badge>;
    }
  };

  return (
    <div className="container p-6 space-y-6">
      {/* Header with gradient background */}
      <div className="relative overflow-hidden rounded-lg border bg-background p-6 mb-6">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Resumes</h1>
            <p className="text-muted-foreground">Manage and organize all your resume documents.</p>
          </div>
          <Button asChild size="lg" className="animate-fade-in">
            <Link to="/dashboard/builder">
              <Plus className="mr-2 h-4 w-4" /> Create New Resume
            </Link>
          </Button>
        </div>
      </div>

      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-muted/30 p-4 rounded-lg">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resumes..."
            className="pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 self-end">
          <Button variant="outline" size="sm" className="bg-background">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <div className="flex items-center border rounded-md overflow-hidden bg-background">
            <Button
              variant={view === "grid" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setView("grid")}
            >
              <Grid className="h-4 w-4 mr-1" /> Grid
            </Button>
            <Button
              variant={view === "list" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setView("list")}
            >
              <List className="h-4 w-4 mr-1" /> List
            </Button>
          </div>
        </div>
      </div>

      {view === "grid" ? (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredResumes.map((resume) => (
            <Card key={resume.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardHeader className="pb-2 border-b bg-muted/30">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-base">{resume.title}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link to={`/dashboard/builder/${resume.id}`} className="cursor-pointer">
                          <Pencil className="mr-2 h-4 w-4" /> Edit Resume
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" /> Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="mr-2 h-4 w-4" /> Download PDF
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-1">
                    <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                    <span className="text-sm text-muted-foreground">{resume.template}</span>
                  </div>
                  {getStatusBadge(resume.status, resume.progress)}
                </div>
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
      ) : (
        <Card className="overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Template</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Downloads</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResumes.map((resume) => (
                <TableRow key={resume.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{resume.title}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary"></span>
                      {resume.template}
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(resume.status, resume.progress)}</TableCell>
                  <TableCell>{resume.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{resume.lastUpdated}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4 text-muted-foreground" />
                      <span>{resume.views}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span>{resume.downloads}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                        <Link to={`/dashboard/builder/${resume.id}`}>
                          <Pencil className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Download className="h-4 w-4" />
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Copy className="mr-2 h-4 w-4" /> Duplicate
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
};

export default Resumes;
