import { Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
            <Heart className="w-4 h-4" />
            About Us
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We're a passionate team of animal lovers working to protect street & domestic animals across Nepal. StreetSathi was founded with a mission to connect compassion with action — rescuing, treating, and caring for our four-legged friends who deserve love and safety. Through community engagement, rapid response, and medical care, we strive to create a safer world for animals.
          </p>

          <div className="pt-8 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Every Street Deserves to Live
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              StreetSathi connects compassionate people with street dogs needing rescue and care. Together we're building a safer, healthier community for our four-legged friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
