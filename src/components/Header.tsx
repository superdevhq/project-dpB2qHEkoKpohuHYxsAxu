
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, LayoutDashboard } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ReziBuilder</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/templates" className="text-sm font-medium hover:text-primary transition-colors">
            Templates
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/login">Log in</Link>
          </Button>
          <Button asChild className="hidden md:flex">
            <Link to="/builder">Create Resume</Link>
          </Button>
          <Button asChild variant="ghost" className="hidden md:flex">
            <Link to="/dashboard">
              <LayoutDashboard className="h-5 w-5 mr-2" />
              Dashboard
            </Link>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-base font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link to="/templates" className="text-base font-medium hover:text-primary transition-colors">
                  Templates
                </Link>
                <Link to="/pricing" className="text-base font-medium hover:text-primary transition-colors">
                  Pricing
                </Link>
                <Link to="/about" className="text-base font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/login" className="text-base font-medium hover:text-primary transition-colors">
                  Log in
                </Link>
                <Button asChild className="mt-2">
                  <Link to="/builder">Create Resume</Link>
                </Button>
                <Button asChild variant="outline" className="mt-2">
                  <Link to="/dashboard">
                    <LayoutDashboard className="h-5 w-5 mr-2" />
                    Dashboard
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
