const WhoIsThisFor = () => {
  return (
    <section className="py-16 bg-bef0fb">
      <div className="container mx-auto px-4 max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-primary">
          Who Is REACH Creova For?
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
          REACH Creova for Jewellery Design is built for teams that create, refine, and showcase jewellery through powerful visuals to drive design, marketing, and sales.
        </p>

        {/* Design Studios */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Design Studios & In-house Designers
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Explore, refine, and present jewellery concepts with visuals that speed up approvals.
            </li>
            <li>
              Create polished outputs that clearly communicate design intent to teams and stakeholders.
            </li>
          </ul>
        </div>

        {/* CAD Teams */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            CAD & 3D Visualization Teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Enhance CAD outputs with realistic lighting, reflections, and high-quality rendering effects.
            </li>
            <li>
              Produce presentation-ready visuals from technical models.
            </li>
          </ul>
        </div>

        {/* Manufacturers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Manufacturers & OEM / ODM Units
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Standardize product visuals for catalogues and buyer presentations across markets.
            </li>
            <li>
              Maintain consistency across large product ranges and collections.
            </li>
          </ul>
        </div>

        {/* Marketing */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Brand, Marketing & E-commerce Teams
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Create campaigns, banners, and product visuals that highlight craftsmanship and detail.
            </li>
            <li>
              Build engaging visuals for websites, marketplaces, and social media.
            </li>
          </ul>
        </div>

        {/* Retail */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Retail Chains & Multi-Brand Stores
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Refresh visuals for promotions and in-store displays while maintaining brand consistency.
            </li>
            <li>
              Ensure a unified visual identity across all retail touchpoints.
            </li>
          </ul>
        </div>

        {/* Independent */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Independent Jewellers & Custom Specialists
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Present bespoke designs and custom pieces with premium-quality visuals.
            </li>
            <li>
              Showcase one-of-a-kind creations that justify premium pricing.
            </li>
          </ul>
        </div>

        {/* Photographers */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3 text-primary">
            Jewellery Photographers & Creative Agencies
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Add jewellery-specific post-production enhancements such as sparkle and polish.
            </li>
            <li>
              Deliver refined, campaign-ready visuals for clients.
            </li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">
            Jewellery Schools & Training Centres
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              Equip learners with industry-relevant visual design and presentation skills.
            </li>
            <li>
              Prepare students for real-world roles in jewellery design, marketing, and merchandising.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhoIsThisFor;