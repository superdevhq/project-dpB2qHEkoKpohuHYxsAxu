
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { ResumeSection } from "./SectionEditor";
import { ResumeTemplate } from "./TemplateSelector";

interface ResumePreviewProps {
  sections: ResumeSection[];
  templateId: string;
}

const ResumePreview = ({ sections, templateId }: ResumePreviewProps) => {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = () => {
    // In a real implementation, this would use a library like html2pdf.js or jsPDF
    alert("PDF download functionality would be implemented here");
  };

  const handlePrint = () => {
    window.print();
  };

  const getContactInfo = () => {
    const contactSection = sections.find(section => section.type === "contact");
    return contactSection?.items[0] || {};
  };

  const getSummary = () => {
    const summarySection = sections.find(section => section.type === "summary");
    return summarySection?.items[0]?.content || "";
  };

  const renderMinimalTemplate = () => {
    const contactInfo = getContactInfo();
    
    return (
      <div className="bg-white text-black p-8 shadow-sm min-h-[1056px] max-w-[816px] mx-auto">
        {/* Header */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold">{contactInfo.name || "Your Name"}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
            {contactInfo.email && <div>{contactInfo.email}</div>}
            {contactInfo.phone && <div>{contactInfo.phone}</div>}
            {contactInfo.location && <div>{contactInfo.location}</div>}
            {contactInfo.linkedin && <div>{contactInfo.linkedin}</div>}
            {contactInfo.website && <div>{contactInfo.website}</div>}
          </div>
        </div>
        
        {/* Summary */}
        {getSummary() && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
            <p className="text-sm">{getSummary()}</p>
          </div>
        )}
        
        {/* Experience */}
        {sections.find(section => section.type === "experience") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {sections.find(section => section.type === "experience")?.title || "Experience"}
            </h2>
            {sections
              .find(section => section.type === "experience")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.position}</h3>
                    <span className="text-sm">
                      {item.startDate} - {item.current ? "Present" : item.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{item.company}</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Education */}
        {sections.find(section => section.type === "education") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {sections.find(section => section.type === "education")?.title || "Education"}
            </h2>
            {sections
              .find(section => section.type === "education")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.degree} in {item.field}</h3>
                    <span className="text-sm">
                      {item.startDate} - {item.current ? "Present" : item.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{item.institution}</span>
                    <span>{item.location}</span>
                  </div>
                  {item.description && <p className="text-sm mt-1">{item.description}</p>}
                </div>
              ))}
          </div>
        )}
        
        {/* Skills */}
        {sections.find(section => section.type === "skills") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {sections.find(section => section.type === "skills")?.title || "Skills"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {sections
                .find(section => section.type === "skills")
                ?.items.map((item, index) => (
                  <div key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
                    {item.name}
                  </div>
                ))}
            </div>
          </div>
        )}
        
        {/* Projects */}
        {sections.find(section => section.type === "projects") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {sections.find(section => section.type === "projects")?.title || "Projects"}
            </h2>
            {sections
              .find(section => section.type === "projects")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="text-sm">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  {item.url && (
                    <div className="text-sm text-blue-600">{item.url}</div>
                  )}
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Certifications */}
        {sections.find(section => section.type === "certifications") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {sections.find(section => section.type === "certifications")?.title || "Certifications"}
            </h2>
            {sections
              .find(section => section.type === "certifications")
              ?.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="text-sm">{item.date}</span>
                  </div>
                  <div className="text-sm">{item.issuer}</div>
                  {item.url && (
                    <div className="text-sm text-blue-600">{item.url}</div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  const renderProfessionalTemplate = () => {
    const contactInfo = getContactInfo();
    
    return (
      <div className="bg-white text-black p-8 shadow-sm min-h-[1056px] max-w-[816px] mx-auto">
        {/* Header */}
        <div className="bg-gray-800 text-white p-6 -mx-8 -mt-8 mb-6">
          <h1 className="text-3xl font-bold text-center">{contactInfo.name || "Your Name"}</h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2 text-sm">
            {contactInfo.email && <div>{contactInfo.email}</div>}
            {contactInfo.phone && <div>{contactInfo.phone}</div>}
            {contactInfo.location && <div>{contactInfo.location}</div>}
            {contactInfo.linkedin && <div>{contactInfo.linkedin}</div>}
            {contactInfo.website && <div>{contactInfo.website}</div>}
          </div>
        </div>
        
        {/* Summary */}
        {getSummary() && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
            <p className="text-sm">{getSummary()}</p>
          </div>
        )}
        
        {/* Experience */}
        {sections.find(section => section.type === "experience") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">
              {sections.find(section => section.type === "experience")?.title || "Experience"}
            </h2>
            {sections
              .find(section => section.type === "experience")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.position}</h3>
                    <span className="text-sm font-medium">
                      {item.startDate} - {item.current ? "Present" : item.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.company}</span>
                    <span>{item.location}</span>
                  </div>
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Education */}
        {sections.find(section => section.type === "education") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">
              {sections.find(section => section.type === "education")?.title || "Education"}
            </h2>
            {sections
              .find(section => section.type === "education")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.degree} in {item.field}</h3>
                    <span className="text-sm font-medium">
                      {item.startDate} - {item.current ? "Present" : item.endDate}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.institution}</span>
                    <span>{item.location}</span>
                  </div>
                  {item.description && <p className="text-sm mt-1">{item.description}</p>}
                </div>
              ))}
          </div>
        )}
        
        {/* Skills */}
        {sections.find(section => section.type === "skills") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">
              {sections.find(section => section.type === "skills")?.title || "Skills"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {sections
                .find(section => section.type === "skills")
                ?.items.map((item, index) => (
                  <div key={index} className="text-sm">
                    • {item.name}
                  </div>
                ))}
            </div>
          </div>
        )}
        
        {/* Projects */}
        {sections.find(section => section.type === "projects") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">
              {sections.find(section => section.type === "projects")?.title || "Projects"}
            </h2>
            {sections
              .find(section => section.type === "projects")
              ?.items.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.name}</h3>
                    <span className="text-sm font-medium">
                      {item.startDate} - {item.endDate}
                    </span>
                  </div>
                  {item.url && (
                    <div className="text-sm text-blue-600">{item.url}</div>
                  )}
                  <p className="text-sm mt-1">{item.description}</p>
                </div>
              ))}
          </div>
        )}
        
        {/* Certifications */}
        {sections.find(section => section.type === "certifications") && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold uppercase border-b border-gray-300 pb-1 mb-2">
              {sections.find(section => section.type === "certifications")?.title || "Certifications"}
            </h2>
            {sections
              .find(section => section.type === "certifications")
              ?.items.map((item, index) => (
                <div key={index} className="mb-2">
                  <div className="flex justify-between">
                    <h3 className="font-bold">{item.name}</h3>
                    <span className="text-sm font-medium">{item.date}</span>
                  </div>
                  <div className="text-sm">{item.issuer}</div>
                  {item.url && (
                    <div className="text-sm text-blue-600">{item.url}</div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    );
  };

  const renderModernTemplate = () => {
    const contactInfo = getContactInfo();
    
    return (
      <div className="bg-white text-black shadow-sm min-h-[1056px] max-w-[816px] mx-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white p-8">
          <h1 className="text-3xl font-bold">{contactInfo.name || "Your Name"}</h1>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
            {contactInfo.email && <div>{contactInfo.email}</div>}
            {contactInfo.phone && <div>{contactInfo.phone}</div>}
            {contactInfo.location && <div>{contactInfo.location}</div>}
            {contactInfo.linkedin && <div>{contactInfo.linkedin}</div>}
            {contactInfo.website && <div>{contactInfo.website}</div>}
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-6 p-8">
          <div className="col-span-2">
            {/* Summary */}
            {getSummary() && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">Professional Summary</h2>
                <p className="text-sm">{getSummary()}</p>
              </div>
            )}
            
            {/* Experience */}
            {sections.find(section => section.type === "experience") && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  {sections.find(section => section.type === "experience")?.title || "Experience"}
                </h2>
                {sections
                  .find(section => section.type === "experience")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.position}</h3>
                        <span className="text-sm">
                          {item.startDate} - {item.current ? "Present" : item.endDate}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>{item.company}</span>
                        <span>{item.location}</span>
                      </div>
                      <p className="text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
              </div>
            )}
            
            {/* Projects */}
            {sections.find(section => section.type === "projects") && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  {sections.find(section => section.type === "projects")?.title || "Projects"}
                </h2>
                {sections
                  .find(section => section.type === "projects")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <span className="text-sm">
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                      {item.url && (
                        <div className="text-sm text-blue-600">{item.url}</div>
                      )}
                      <p className="text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
          
          <div className="col-span-1">
            {/* Education */}
            {sections.find(section => section.type === "education") && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  {sections.find(section => section.type === "education")?.title || "Education"}
                </h2>
                {sections
                  .find(section => section.type === "education")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-medium">{item.degree}</h3>
                      <div className="text-sm">{item.field}</div>
                      <div className="text-sm">{item.institution}</div>
                      <div className="text-sm">{item.location}</div>
                      <div className="text-sm">
                        {item.startDate} - {item.current ? "Present" : item.endDate}
                      </div>
                    </div>
                  ))}
              </div>
            )}
            
            {/* Skills */}
            {sections.find(section => section.type === "skills") && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  {sections.find(section => section.type === "skills")?.title || "Skills"}
                </h2>
                <div className="flex flex-col gap-2">
                  {sections
                    .find(section => section.type === "skills")
                    ?.items.map((item, index) => (
                      <div key={index} className="text-sm">
                        {item.name}
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="bg-blue-600 h-1.5 rounded-full" 
                            style={{ 
                              width: item.level === "beginner" ? "25%" : 
                                    item.level === "intermediate" ? "50%" : 
                                    item.level === "advanced" ? "75%" : "100%" 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {/* Certifications */}
            {sections.find(section => section.type === "certifications") && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-blue-600 mb-2">
                  {sections.find(section => section.type === "certifications")?.title || "Certifications"}
                </h2>
                {sections
                  .find(section => section.type === "certifications")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm">{item.issuer}</div>
                      <div className="text-sm">{item.date}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCreativeTemplate = () => {
    const contactInfo = getContactInfo();
    
    return (
      <div className="bg-white text-black shadow-sm min-h-[1056px] max-w-[816px] mx-auto">
        <div className="grid grid-cols-12">
          {/* Sidebar */}
          <div className="col-span-4 bg-gray-900 text-white p-8 min-h-[1056px]">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-1">{contactInfo.name || "Your Name"}</h1>
              <div className="h-1 w-12 bg-yellow-400 mb-4"></div>
              <div className="space-y-1 text-sm">
                {contactInfo.email && <div>{contactInfo.email}</div>}
                {contactInfo.phone && <div>{contactInfo.phone}</div>}
                {contactInfo.location && <div>{contactInfo.location}</div>}
                {contactInfo.linkedin && <div>{contactInfo.linkedin}</div>}
                {contactInfo.website && <div>{contactInfo.website}</div>}
              </div>
            </div>
            
            {/* Skills */}
            {sections.find(section => section.type === "skills") && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  {sections.find(section => section.type === "skills")?.title || "Skills"}
                </h2>
                <div className="space-y-3">
                  {sections
                    .find(section => section.type === "skills")
                    ?.items.map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.name}</span>
                          <span>
                            {item.level === "beginner" ? "Basic" : 
                             item.level === "intermediate" ? "Intermediate" : 
                             item.level === "advanced" ? "Advanced" : "Expert"}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1.5">
                          <div 
                            className="bg-yellow-400 h-1.5 rounded-full" 
                            style={{ 
                              width: item.level === "beginner" ? "25%" : 
                                    item.level === "intermediate" ? "50%" : 
                                    item.level === "advanced" ? "75%" : "100%" 
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
            
            {/* Education */}
            {sections.find(section => section.type === "education") && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  {sections.find(section => section.type === "education")?.title || "Education"}
                </h2>
                {sections
                  .find(section => section.type === "education")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-medium">{item.degree}</h3>
                      <div className="text-sm text-gray-300">{item.field}</div>
                      <div className="text-sm">{item.institution}</div>
                      <div className="text-sm text-gray-400">
                        {item.startDate} - {item.current ? "Present" : item.endDate}
                      </div>
                    </div>
                  ))}
              </div>
            )}
            
            {/* Certifications */}
            {sections.find(section => section.type === "certifications") && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-2 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  {sections.find(section => section.type === "certifications")?.title || "Certifications"}
                </h2>
                {sections
                  .find(section => section.type === "certifications")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-2">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="text-sm">{item.issuer}</div>
                      <div className="text-sm text-gray-400">{item.date}</div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          
          {/* Main Content */}
          <div className="col-span-8 p-8">
            {/* Summary */}
            {getSummary() && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  Professional Summary
                </h2>
                <p className="text-sm">{getSummary()}</p>
              </div>
            )}
            
            {/* Experience */}
            {sections.find(section => section.type === "experience") && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  {sections.find(section => section.type === "experience")?.title || "Experience"}
                </h2>
                {sections
                  .find(section => section.type === "experience")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-6 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-yellow-400">
                      <div className="absolute w-3 h-3 bg-yellow-400 rounded-full left-[-6px] top-1"></div>
                      <h3 className="font-bold">{item.position}</h3>
                      <div className="text-sm font-medium">{item.company} | {item.location}</div>
                      <div className="text-sm text-gray-500 mb-2">
                        {item.startDate} - {item.current ? "Present" : item.endDate}
                      </div>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  ))}
              </div>
            )}
            
            {/* Projects */}
            {sections.find(section => section.type === "projects") && (
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 flex items-center">
                  <span className="h-1 w-4 bg-yellow-400 mr-2"></span>
                  {sections.find(section => section.type === "projects")?.title || "Projects"}
                </h2>
                {sections
                  .find(section => section.type === "projects")
                  ?.items.map((item, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold">{item.name}</h3>
                        <span className="text-sm text-gray-500">
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                      {item.url && (
                        <div className="text-sm text-yellow-600">{item.url}</div>
                      )}
                      <p className="text-sm mt-1">{item.description}</p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderTemplate = () => {
    switch (templateId) {
      case "minimal":
        return renderMinimalTemplate();
      case "professional":
        return renderProfessionalTemplate();
      case "modern":
        return renderModernTemplate();
      case "creative":
        return renderCreativeTemplate();
      default:
        return renderMinimalTemplate();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Resume Preview</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleDownloadPDF}>
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
        </div>
      </div>
      
      <div className="resume-preview bg-white rounded-lg overflow-hidden border scale-90 origin-top">
        <div ref={resumeRef}>
          {renderTemplate()}
        </div>
      </div>
    </div>
  );
};

export default ResumePreview;
