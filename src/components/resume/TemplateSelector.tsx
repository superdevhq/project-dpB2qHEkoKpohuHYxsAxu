
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export type ResumeTemplate = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};

interface TemplateSelectorProps {
  onSelectTemplate: (templateId: string) => void;
  selectedTemplateId: string | null;
}

const TemplateSelector = ({ onSelectTemplate, selectedTemplateId }: TemplateSelectorProps) => {
  const templates: ResumeTemplate[] = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and simple design with a focus on content",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional layout perfect for corporate applications",
      thumbnail: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "modern",
      name: "Modern",
      description: "Contemporary design with creative elements",
      thumbnail: "https://images.unsplash.com/photo-1586282023358-7c1c6bc97d9b?q=80&w=300&h=400&auto=format&fit=crop"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold layout for design and creative industries",
      thumbnail: "https://images.unsplash.com/photo-1586282391332-f4634a7eea34?q=80&w=300&h=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className={`template-card overflow-hidden cursor-pointer transition-all ${selectedTemplateId === template.id ? 'selected' : ''}`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div className="relative">
              <img 
                src={template.thumbnail} 
                alt={template.name} 
                className="w-full h-48 object-cover"
              />
              {selectedTemplateId === template.id && (
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                  <div className="bg-primary text-primary-foreground rounded-full p-1">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{template.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{template.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
