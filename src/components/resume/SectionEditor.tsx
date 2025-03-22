
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trash2, Plus } from "lucide-react";
import { 
  Card, 
  CardContent,
  CardFooter 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ResumeSection = {
  id: string;
  type: "contact" | "summary" | "experience" | "education" | "skills" | "projects" | "certifications";
  title: string;
  items: any[];
};

export type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  website?: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type EducationItem = {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
};

export type SkillItem = {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
};

export type ProjectItem = {
  id: string;
  name: string;
  description: string;
  url?: string;
  startDate: string;
  endDate: string;
};

export type CertificationItem = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
};

interface SectionEditorProps {
  section: ResumeSection;
  onUpdateSection: (updatedSection: ResumeSection) => void;
  onDeleteSection?: () => void;
}

const SectionEditor = ({ section, onUpdateSection, onDeleteSection }: SectionEditorProps) => {
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateSection({
      ...section,
      title: e.target.value
    });
  };

  const handleAddItem = () => {
    let newItem: any = {};
    
    switch (section.type) {
      case "experience":
        newItem = {
          id: Date.now().toString(),
          company: "",
          position: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: ""
        };
        break;
      case "education":
        newItem = {
          id: Date.now().toString(),
          institution: "",
          degree: "",
          field: "",
          location: "",
          startDate: "",
          endDate: "",
          current: false,
          description: ""
        };
        break;
      case "skills":
        newItem = {
          id: Date.now().toString(),
          name: "",
          level: "intermediate"
        };
        break;
      case "projects":
        newItem = {
          id: Date.now().toString(),
          name: "",
          description: "",
          startDate: "",
          endDate: ""
        };
        break;
      case "certifications":
        newItem = {
          id: Date.now().toString(),
          name: "",
          issuer: "",
          date: ""
        };
        break;
      default:
        break;
    }
    
    onUpdateSection({
      ...section,
      items: [...section.items, newItem]
    });
  };

  const handleDeleteItem = (itemId: string) => {
    onUpdateSection({
      ...section,
      items: section.items.filter(item => item.id !== itemId)
    });
  };

  const handleItemChange = (itemId: string, field: string, value: any) => {
    onUpdateSection({
      ...section,
      items: section.items.map(item => 
        item.id === itemId ? { ...item, [field]: value } : item
      )
    });
  };

  const renderContactEditor = () => {
    const contact = section.items[0] as ContactInfo;
    
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name"
              value={contact?.name || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "name", e.target.value)}
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              value={contact?.email || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "email", e.target.value)}
              placeholder="john.doe@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone"
              value={contact?.phone || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "phone", e.target.value)}
              placeholder="(123) 456-7890"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location"
              value={contact?.location || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "location", e.target.value)}
              placeholder="New York, NY"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="linkedin">LinkedIn (optional)</Label>
            <Input 
              id="linkedin"
              value={contact?.linkedin || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "linkedin", e.target.value)}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website (optional)</Label>
            <Input 
              id="website"
              value={contact?.website || ""}
              onChange={(e) => handleItemChange(section.items[0].id, "website", e.target.value)}
              placeholder="johndoe.com"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderSummaryEditor = () => {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea 
            id="summary"
            value={section.items[0]?.content || ""}
            onChange={(e) => handleItemChange(section.items[0].id, "content", e.target.value)}
            placeholder="Write a compelling summary of your professional background and key strengths..."
            className="min-h-[120px]"
          />
        </div>
      </div>
    );
  };

  const renderExperienceEditor = () => {
    return (
      <div className="space-y-4">
        {section.items.map((item: ExperienceItem) => (
          <Card key={item.id} className="relative">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`company-${item.id}`}>Company</Label>
                  <Input 
                    id={`company-${item.id}`}
                    value={item.company}
                    onChange={(e) => handleItemChange(item.id, "company", e.target.value)}
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`position-${item.id}`}>Position</Label>
                  <Input 
                    id={`position-${item.id}`}
                    value={item.position}
                    onChange={(e) => handleItemChange(item.id, "position", e.target.value)}
                    placeholder="Job title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`location-${item.id}`}>Location</Label>
                  <Input 
                    id={`location-${item.id}`}
                    value={item.location}
                    onChange={(e) => handleItemChange(item.id, "location", e.target.value)}
                    placeholder="City, State"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${item.id}`}>Start Date</Label>
                    <Input 
                      id={`startDate-${item.id}`}
                      value={item.startDate}
                      onChange={(e) => handleItemChange(item.id, "startDate", e.target.value)}
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${item.id}`}>End Date</Label>
                    <Input 
                      id={`endDate-${item.id}`}
                      value={item.endDate}
                      onChange={(e) => handleItemChange(item.id, "endDate", e.target.value)}
                      placeholder="MM/YYYY or Present"
                      disabled={item.current}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor={`description-${item.id}`}>Description</Label>
                <Textarea 
                  id={`description-${item.id}`}
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                  placeholder="Describe your responsibilities and achievements..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Experience
        </Button>
      </div>
    );
  };

  const renderEducationEditor = () => {
    return (
      <div className="space-y-4">
        {section.items.map((item: EducationItem) => (
          <Card key={item.id} className="relative">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor={`institution-${item.id}`}>Institution</Label>
                  <Input 
                    id={`institution-${item.id}`}
                    value={item.institution}
                    onChange={(e) => handleItemChange(item.id, "institution", e.target.value)}
                    placeholder="University name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`degree-${item.id}`}>Degree</Label>
                  <Input 
                    id={`degree-${item.id}`}
                    value={item.degree}
                    onChange={(e) => handleItemChange(item.id, "degree", e.target.value)}
                    placeholder="Bachelor's, Master's, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`field-${item.id}`}>Field of Study</Label>
                  <Input 
                    id={`field-${item.id}`}
                    value={item.field}
                    onChange={(e) => handleItemChange(item.id, "field", e.target.value)}
                    placeholder="Computer Science, Business, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`location-${item.id}`}>Location</Label>
                  <Input 
                    id={`location-${item.id}`}
                    value={item.location}
                    onChange={(e) => handleItemChange(item.id, "location", e.target.value)}
                    placeholder="City, State"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-2">
                    <Label htmlFor={`startDate-${item.id}`}>Start Date</Label>
                    <Input 
                      id={`startDate-${item.id}`}
                      value={item.startDate}
                      onChange={(e) => handleItemChange(item.id, "startDate", e.target.value)}
                      placeholder="MM/YYYY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`endDate-${item.id}`}>End Date</Label>
                    <Input 
                      id={`endDate-${item.id}`}
                      value={item.endDate}
                      onChange={(e) => handleItemChange(item.id, "endDate", e.target.value)}
                      placeholder="MM/YYYY or Present"
                      disabled={item.current}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor={`description-${item.id}`}>Description (Optional)</Label>
                <Textarea 
                  id={`description-${item.id}`}
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                  placeholder="GPA, honors, relevant coursework, etc."
                  className="min-h-[80px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Education
        </Button>
      </div>
    );
  };

  const renderSkillsEditor = () => {
    return (
      <div className="space-y-4">
        {section.items.map((item: SkillItem) => (
          <div key={item.id} className="flex items-center gap-2">
            <Input 
              value={item.name}
              onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
              placeholder="Skill name"
              className="flex-1"
            />
            <Select 
              value={item.level}
              onValueChange={(value) => handleItemChange(item.id, "level", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleDeleteItem(item.id)}
              className="text-destructive hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>
    );
  };

  const renderProjectsEditor = () => {
    return (
      <div className="space-y-4">
        {section.items.map((item: ProjectItem) => (
          <Card key={item.id} className="relative">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`name-${item.id}`}>Project Name</Label>
                  <Input 
                    id={`name-${item.id}`}
                    value={item.name}
                    onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                    placeholder="Project name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`startDate-${item.id}`}>Start Date</Label>
                  <Input 
                    id={`startDate-${item.id}`}
                    value={item.startDate}
                    onChange={(e) => handleItemChange(item.id, "startDate", e.target.value)}
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`endDate-${item.id}`}>End Date</Label>
                  <Input 
                    id={`endDate-${item.id}`}
                    value={item.endDate}
                    onChange={(e) => handleItemChange(item.id, "endDate", e.target.value)}
                    placeholder="MM/YYYY or Present"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`url-${item.id}`}>URL (Optional)</Label>
                  <Input 
                    id={`url-${item.id}`}
                    value={item.url || ""}
                    onChange={(e) => handleItemChange(item.id, "url", e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Label htmlFor={`description-${item.id}`}>Description</Label>
                <Textarea 
                  id={`description-${item.id}`}
                  value={item.description}
                  onChange={(e) => handleItemChange(item.id, "description", e.target.value)}
                  placeholder="Describe the project, technologies used, and your role..."
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
      </div>
    );
  };

  const renderCertificationsEditor = () => {
    return (
      <div className="space-y-4">
        {section.items.map((item: CertificationItem) => (
          <Card key={item.id} className="relative">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`name-${item.id}`}>Certification Name</Label>
                  <Input 
                    id={`name-${item.id}`}
                    value={item.name}
                    onChange={(e) => handleItemChange(item.id, "name", e.target.value)}
                    placeholder="Certification name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`issuer-${item.id}`}>Issuing Organization</Label>
                  <Input 
                    id={`issuer-${item.id}`}
                    value={item.issuer}
                    onChange={(e) => handleItemChange(item.id, "issuer", e.target.value)}
                    placeholder="Organization name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`date-${item.id}`}>Date</Label>
                  <Input 
                    id={`date-${item.id}`}
                    value={item.date}
                    onChange={(e) => handleItemChange(item.id, "date", e.target.value)}
                    placeholder="MM/YYYY"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor={`url-${item.id}`}>URL (Optional)</Label>
                  <Input 
                    id={`url-${item.id}`}
                    value={item.url || ""}
                    onChange={(e) => handleItemChange(item.id, "url", e.target.value)}
                    placeholder="https://example.com"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteItem(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Remove
              </Button>
            </CardFooter>
          </Card>
        ))}
        <Button onClick={handleAddItem} className="w-full">
          <Plus className="h-4 w-4 mr-2" />
          Add Certification
        </Button>
      </div>
    );
  };

  const renderSectionEditor = () => {
    switch (section.type) {
      case "contact":
        return renderContactEditor();
      case "summary":
        return renderSummaryEditor();
      case "experience":
        return renderExperienceEditor();
      case "education":
        return renderEducationEditor();
      case "skills":
        return renderSkillsEditor();
      case "projects":
        return renderProjectsEditor();
      case "certifications":
        return renderCertificationsEditor();
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          value={section.title}
          onChange={handleTitleChange}
          className="text-lg font-medium"
          placeholder="Section Title"
        />
        {onDeleteSection && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onDeleteSection}
            className="text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete Section
          </Button>
        )}
      </div>
      <div className="mt-4">
        {renderSectionEditor()}
      </div>
    </div>
  );
};

export default SectionEditor;
