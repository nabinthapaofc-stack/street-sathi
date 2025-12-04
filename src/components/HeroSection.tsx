import { Button } from "@/components/ui/button";
import dogHero1 from "@/assets/dog-hero-1.jpg";
import dogHero2 from "@/assets/dog-hero-2.jpg";
import dogHero3 from "@/assets/dog-hero-3.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              StreetSathi —{" "}
              <span className="text-primary">Every Street Deserves to Live</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Street dogs can get hurt anytime and sometimes we can't reach them.
              StreetSathi helps make the rescue process easier so we can save more
              dogs.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="hero" size="xl">
                Rescue Now
              </Button>
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative">
                <img
                  src={dogHero1}
                  alt="A friendly brown street dog sitting on a road"
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              {/* Two smaller images */}
              <div className="relative animate-float" style={{ animationDelay: "0.5s" }}>
                <img
                  src={dogHero2}
                  alt="A rescued street dog being cared for"
                  className="w-full h-40 md:h-48 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              <div className="relative animate-float" style={{ animationDelay: "1s" }}>
                <img
                  src={dogHero3}
                  alt="A cute street puppy looking curious"
                  className="w-full h-40 md:h-48 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
