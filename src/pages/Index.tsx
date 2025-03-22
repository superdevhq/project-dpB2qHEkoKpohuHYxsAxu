
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const features = [
    {
      title: "Professional Templates",
      description: "Choose from a variety of professionally designed templates to make your resume stand out.",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Easy Content Editing",
      description: "Intuitive interface to add and edit your resume content with real-time preview.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      title: "Drag & Drop Sections",
      description: "Easily rearrange sections to customize the layout of your resume.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      title: "PDF Export",
      description: "Download your finished resume as a professional PDF ready to send to employers.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    }
  ];

  const testimonials = [
    {
      quote: "ReziBuilder helped me create a professional resume that landed me multiple interviews. The templates are clean and modern!",
      author: "Sarah Johnson",
      role: "Marketing Specialist"
    },
    {
      quote: "I was struggling with my resume format until I found this tool. So easy to use and the results look amazing.",
      author: "Michael Chen",
      role: "Software Engineer"
    },
    {
      quote: "As someone changing careers, I needed a resume that highlighted my transferable skills. This builder made it simple!",
      author: "Jessica Williams",
      role: "Project Manager"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-background to-muted py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 animate-slide-up">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Create Professional Resumes in Minutes
                </h1>
                <p className="text-xl text-muted-foreground">
                  Build standout resumes with our easy-to-use builder. Choose from professional templates and customize to showcase your skills.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-base">
                    <Link to="/builder">Create Your Resume</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base">
                    <Link to="/templates">Browse Templates</Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 rounded-lg shadow-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop" 
                    alt="Resume example" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose ReziBuilder?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our resume builder makes it easy to create professional resumes that get noticed by employers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 p-2 bg-primary/10 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create your professional resume in three simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-2">Choose a Template</h3>
                <p className="text-muted-foreground">Select from our collection of professionally designed resume templates.</p>
              </div>
              
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-2">Add Your Content</h3>
                <p className="text-muted-foreground">Fill in your details with our easy-to-use editor and see real-time preview.</p>
              </div>
              
              <div className="bg-card rounded-lg border p-6 text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-2">Download & Share</h3>
                <p className="text-muted-foreground">Export your resume as a PDF and start applying for jobs with confidence.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="text-base">
                <Link to="/builder">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Thousands of job seekers have used ReziBuilder to create winning resumes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg border p-6 shadow-sm"
                >
                  <div className="mb-4 text-4xl text-primary">"</div>
                  <p className="mb-4 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Professional Resume?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of job seekers who have successfully landed their dream jobs with resumes created using ReziBuilder.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/builder">Create Your Resume Now</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
