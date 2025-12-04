import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <Heart className="w-6 h-6 text-primary fill-primary" />
            <span>StreetSathi</span>
          </div>

          <p className="text-background/70 text-center md:text-left">
            Every Street Deserves to Live — Made with love in Nepal
          </p>

          <div className="flex items-center gap-4 text-sm text-background/60">
            <span>© 2024 StreetSathi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
