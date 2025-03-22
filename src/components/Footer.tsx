
import { Link } from "react-router-dom";
import { FileText, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Link to="/" className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ReziBuilder</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Create professional resumes in minutes with our easy-to-use builder.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Product</h3>
            <nav className="flex flex-col gap-2 mt-2">
              <Link to="/templates" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Templates
              </Link>
              <Link to="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <nav className="flex flex-col gap-2 mt-2">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Blog
              </Link>
              <Link to="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resume Guides
              </Link>
              <Link to="/examples" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Examples
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="flex flex-col gap-2 mt-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} ReziBuilder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
