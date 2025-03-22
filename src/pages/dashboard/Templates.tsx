
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Star, Heart, Info, ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  const allTemplates = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and simple design with a focus on content",
      category: "Simple",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["ATS-Friendly", "Clean Layout", "Customizable Colors"]
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional layout perfect for corporate applications",
      category: "Business",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["ATS-Friendly", "Formal Design", "Multiple Sections"]
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with creative elements",
      category: "Creative",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282023358-7c1c6bc97d9b?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Visual Elements", "Timeline Layout", "Skill Bars"]
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold layout for design and creative industries",
      category: "Creative",
      popular: false,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea34?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Unique Design", "Portfolio Section", "Color Accents"]
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior positions",
      category: "Business",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea35?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Executive Summary", "Achievement Focus", "Elegant Design"]
    },
    {
      id: "technical",
      name: "Technical",
      description: "Specialized layout for technical roles",
      category: "Technical",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea36?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Skills Matrix", "Project Showcase", "Technical Focus"]
    },
    {
      id: "academic",
      name: "Academic",
      description: "Formal layout for academic and research positions",
      category: "Education",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea37?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Publications Section", "Research Focus", "Formal Structure"]
    },
    {
      id: "startup",
      name: "Startup",
      description: "Dynamic layout for startup environments",
      category: "Creative",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea38?q=80&w=300&h=400&auto=format&fit=crop",
      features: ["Impact Metrics", "Modern Design", "Skill Highlights"]
    },
  ];

  const filteredTemplates = allTemplates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.features.some(feature => feature.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const categories = ["All", "Simple", "Business", "Creative", "Technical", "Education"];

  const toggleFavorite = (id: string) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <div className="container p-6 space-y-6">
      {/* Header with gradient background */}
      <div className="relative overflow-hidden rounded-lg border bg-background p-6 mb-6">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-3xl font-bold tracking-tight">Resume Templates</h1>
          <p className="text-muted-foreground mt-1">Choose from our collection of professionally designed templates.</p>
        </div>
      </div>

      {/* Search and filter controls */}
      <div className="flex flex-col md:flex-row gap-4 items-start justify-between bg-muted/30 p-4 rounded-lg">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-8 bg-background"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-background">
            {filteredTemplates.length} templates
          </Badge>
        </div>
      </div>

      <Tabs defaultValue="All" className="space-y-6">
        <TabsList className="bg-muted/30 p-1">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="data-[state=active]:bg-background">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0 animate-fade-in">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTemplates
                .filter(template => category === "All" || template.category === category)
                .map((template) => (
                <Card key={template.id} className="overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="relative">
                    <img 
                      src={template.thumbnail} 
                      alt={template.name} 
                      className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="font-medium">{template.name}</h3>
                        <p className="text-sm text-white/80">{template.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2 flex gap-1">
                      {template.popular && (
                        <Badge variant="secondary" className="bg-primary text-primary-foreground">
                          Popular
                        </Badge>
                      )}
                      {template.premium ? (
                        <Badge variant="outline" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                          <Star className="h-3 w-3 mr-1 fill-yellow-500" /> Premium
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                          Free
                        </Badge>
                      )}
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                      onClick={() => toggleFavorite(template.id)}
                    >
                      <Heart 
                        className={`h-4 w-4 ${favorites.includes(template.id) ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
                      />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{template.name}</h3>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                              <Info className="h-4 w-4 text-muted-foreground" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent className="w-64">
                            <div className="space-y-2">
                              <p className="font-medium">Features:</p>
                              <ul className="list-disc pl-4 text-sm space-y-1">
                                {template.features.map((feature, i) => (
                                  <li key={i}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {template.features.slice(0, 2).map((feature, i) => (
                        <Badge key={i} variant="outline" className="bg-muted/50 text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {template.features.length > 2 && (
                        <Badge variant="outline" className="bg-muted/50 text-xs">
                          +{template.features.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button className="w-full" asChild>
                      <Link to={`/dashboard/builder?template=${template.id}`}>
                        Use Template
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link to={`/templates/${template.id}`}>
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredTemplates.filter(template => category === "All" || template.category === category).length === 0 && (
              <div className="text-center py-12">
                <div className="mx-auto h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-3">
                  <Search className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No templates found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Templates;
