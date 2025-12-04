import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-foreground">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span>StreetSathi</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#partners" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Partners
          </a>
          <a href="#mission" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Mission
          </a>
        </div>

        <Button variant="default" size="sm">
          Rescue Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
