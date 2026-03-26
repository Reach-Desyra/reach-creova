import { Zap, Sparkles, Layers, Image, Share2, Rocket } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Faster Collection Approvals",
      description:
        "Move from sketch or CAD to presentation-ready visuals quickly, reducing approval cycles and helping teams make faster design and business decisions."
    },
    {
      icon: Sparkles,
      title: "Stronger Brand Perception",
      description:
        "Deliver consistently premium jewellery visuals that enhance brand value, build trust, and reflect high-quality craftsmanship across all touchpoints."
    },
    {
      icon: Layers,
      title: "Endless Variations from One Asset",
      description:
        "Create multiple variations of metal, gemstone, and backgrounds from a single base image, supporting large product assortments without additional effort."
    },
    {
      icon: Image,
      title: "High-Performance E-commerce Visuals",
      description:
        "Produce clean, detailed, and optimized images that improve engagement, clicks, and conversions across websites, marketplaces, and digital platforms."
    },
    {
      icon: Share2,
      title: "One Visual Language Across Teams",
      description:
        "Align design, marketing, and sales teams with consistent visual assets for campaigns, catalogues, and product launches."
    },
    {
      icon: Rocket,
      title: "Agile In-house Creativity",
      description:
        "Empower teams to quickly test ideas, update campaigns, and launch new visuals in days instead of weeks, improving speed and flexibility."
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-024959">
          Benefits of REACH Creova
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Create stunning jewellery visuals, accelerate workflows, and elevate your brand across every channel.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-bef0fb p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-0a829e mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;