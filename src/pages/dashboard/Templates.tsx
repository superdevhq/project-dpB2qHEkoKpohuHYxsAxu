
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, Star, StarHalf } from "lucide-react";

const Templates = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const allTemplates = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and simple design with a focus on content",
      category: "Simple",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional layout perfect for corporate applications",
      category: "Business",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with creative elements",
      category: "Creative",
      popular: true,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282023358-7c1c6bc97d9b?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold layout for design and creative industries",
      category: "Creative",
      popular: false,
      premium: false,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea34?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior positions",
      category: "Business",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea35?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "technical",
      name: "Technical",
      description: "Specialized layout for technical roles",
      category: "Technical",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea36?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "academic",
      name: "Academic",
      description: "Formal layout for academic and research positions",
      category: "Education",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea37?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "startup",
      name: "Startup",
      description: "Dynamic layout for startup environments",
      category: "Creative",
      popular: false,
      premium: true,
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea38?q=80&w=300&h=400&auto=format&fit=crop"
    },
  ];

  const filteredTemplates = allTemplates.filter(template => 
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ["All", "Simple", "Business", "Creative", "Technical", "Education"];

  return (
    <div className="container p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resume Templates</h1>
        <p className="text-muted-foreground">Choose from our collection of professionally designed templates.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-start justify-between">
        <div className="relative w-full md:w-72">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search templates..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="All">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTemplates
                .filter(template => category === "All" || template.category === category)
                .map((template) => (
                <Card key={template.id} className="overflow-hidden">
                  <div className="relative">
                    <img 
                      src={template.thumbnail} 
                      alt={template.name} 
                      className="w-full aspect-[3/4] object-cover"
                    />
                    <div className="absolute top-0 left-0 right-0 p-3 flex justify-between items-start">
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
                        <Badge variant="outline" className="bg-background/80">
                          Free
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{template.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex gap-2">
                    <Button className="w-full" asChild>
                      <Link to={`/dashboard/builder?template=${template.id}`}>
                        Use Template
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Templates;
