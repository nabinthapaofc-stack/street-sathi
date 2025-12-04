import { Shield, Stethoscope, Users } from "lucide-react";

const missions = [
  {
    icon: Shield,
    title: "Rescue & Protection",
    description:
      "Protecting street dogs from harm and ensuring they receive proper care. We respond quickly to reports of dogs in danger, providing immediate rescue.",
  },
  {
    icon: Stethoscope,
    title: "Medical Care",
    description:
      "Every rescued dog receives full medical treatment, vaccines, and ongoing care.",
  },
  {
    icon: Users,
    title: "Community Building",
    description:
      "We educate communities on compassion and create networks of caring individuals.",
  },
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold mb-4">
            Our Mission
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {missions.map((mission, index) => (
            <div
              key={mission.title}
              className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <mission.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {mission.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
