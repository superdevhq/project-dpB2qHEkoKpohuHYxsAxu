
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, ArrowLeft, Save, Download, Share2 } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import TemplateSelector from "./TemplateSelector";
import SectionEditor, { ResumeSection } from "./SectionEditor";
import ResumePreview from "./ResumePreview";
import DragDropSection from "../ui/DragDropSection";

const DashboardResumeBuilder = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("edit");
  const [resumeTitle, setResumeTitle] = useState("Untitled Resume");
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>("minimal");
  const [sections, setSections] = useState<ResumeSection[]>([
    {
      id: "contact",
      type: "contact",
      title: "Contact Information",
      items: [
        {
          id: "contact-1",
          name: "",
          email: "",
          phone: "",
          location: "",
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      title: "Professional Summary",
      items: [
        {
          id: "summary-1",
          content: "",
        },
      ],
    },
    {
      id: "experience",
      type: "experience",
      title: "Work Experience",
      items: [],
    },
    {
      id: "education",
      type: "education",
      title: "Education",
      items: [],
    },
    {
      id: "skills",
      type: "skills",
      title: "Skills",
      items: [],
    },
  ]);

  const [draggedSectionId, setDraggedSectionId] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<string>("Never");

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplateId(templateId);
  };

  const handleUpdateSection = (updatedSection: ResumeSection) => {
    setSections(
      sections.map((section) =>
        section.id === updatedSection.id ? updatedSection : section
      )
    );
  };

  const handleDeleteSection = (sectionId: string) => {
    setSections(sections.filter((section) => section.id !== sectionId));
  };

  const handleAddSection = (sectionType: string) => {
    const newSectionId = `${sectionType}-${Date.now()}`;
    
    let newSection: ResumeSection = {
      id: newSectionId,
      type: sectionType as any,
      title: "",
      items: [],
    };
    
    switch (sectionType) {
      case "experience":
        newSection.title = "Work Experience";
        break;
      case "education":
        newSection.title = "Education";
        break;
      case "skills":
        newSection.title = "Skills";
        break;
      case "projects":
        newSection.title = "Projects";
        break;
      case "certifications":
        newSection.title = "Certifications";
        break;
      default:
        break;
    }
    
    setSections([...sections, newSection]);
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    setDraggedSectionId(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    
    if (!draggedSectionId || draggedSectionId === targetId) {
      return;
    }
    
    const draggedIndex = sections.findIndex(section => section.id === draggedSectionId);
    const targetIndex = sections.findIndex(section => section.id === targetId);
    
    if (draggedIndex === -1 || targetIndex === -1) {
      return;
    }
    
    const newSections = [...sections];
    const [draggedSection] = newSections.splice(draggedIndex, 1);
    newSections.splice(targetIndex, 0, draggedSection);
    
    setSections(newSections);
    setDraggedSectionId(null);
  };

  const handleSave = () => {
    // In a real app, this would save to a database
    const now = new Date();
    setLastSaved(`${now.toLocaleTimeString()}`);
    // Show a success message
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b bg-background p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => navigate("/dashboard/resumes")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Input 
              value={resumeTitle} 
              onChange={(e) => setResumeTitle(e.target.value)}
              className="max-w-[240px] font-medium text-lg h-9"
            />
            <span className="text-xs text-muted-foreground">Last saved: {lastSaved}</span>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm" onClick={handleSave}>
                    <Save className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save your resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Download as PDF</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Share your resume</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Tabs defaultValue="edit" value={activeTab} onValueChange={setActiveTab} className="h-full">
          <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="template">Choose Template</TabsTrigger>
                <TabsTrigger value="edit">Edit Content</TabsTrigger>
                <TabsTrigger value="preview">Preview</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="template" className="animate-fade-in">
              <TemplateSelector 
                onSelectTemplate={handleSelectTemplate} 
                selectedTemplateId={selectedTemplateId} 
              />
            </TabsContent>
            
            <TabsContent value="edit" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  {sections.map((section) => (
                    <DragDropSection
                      key={section.id}
                      id={section.id}
                      title={section.title}
                      onDragStart={handleDragStart}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <SectionEditor
                        section={section}
                        onUpdateSection={handleUpdateSection}
                        onDeleteSection={
                          section.type !== "contact" && section.type !== "summary"
                            ? () => handleDeleteSection(section.id)
                            : undefined
                        }
                      />
                    </DragDropSection>
                  ))}
                  
                  <div className="mt-6">
                    <div className="flex items-center gap-2">
                      <Select onValueChange={handleAddSection}>
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Add section" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="experience">Experience</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="skills">Skills</SelectItem>
                          <SelectItem value="projects">Projects</SelectItem>
                          <SelectItem value="certifications">Certifications</SelectItem>
                        </SelectContent>
                      </Select>
                      
                      <Button variant="outline" className="flex-1" onClick={() => setActiveTab("preview")}>
                        Preview Resume
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <div className="sticky top-8">
                    <ResumePreview sections={sections} templateId={selectedTemplateId} />
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview" className="animate-fade-in">
              <ResumePreview sections={sections} templateId={selectedTemplateId} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardResumeBuilder;
