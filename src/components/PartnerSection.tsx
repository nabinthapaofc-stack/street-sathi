import { Handshake, Building2, Globe } from "lucide-react";

const PartnerSection = () => {
  return (
    <section id="partners" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <div className="relative">
              <div className="bg-accent rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">NGOs</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">INGOs</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <Handshake className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-semibold text-primary">StreetSathi</span>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
            </div>

            {/* Text content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold">
                <Handshake className="w-4 h-4" />
                Our Partners
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Working Together for a Better Future
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                StreetSathi will collaborate with animal welfare NGOs and INGOs to make rescue responses faster. Whenever someone reports an injured or endangered dog, the platform will directly notify the partnered organizations so help can arrive as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
