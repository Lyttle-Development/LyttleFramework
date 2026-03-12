import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";

const swatches = [
  {
    label: "Background",
    var: "--background",
    desc: "Page background",
  },
  {
    label: "Foreground",
    var: "--foreground",
    desc: "Primary text",
  },
  {
    label: "Primary",
    var: "--primary",
    desc: "Brand purple — interactive elements",
  },
  {
    label: "Primary Foreground",
    var: "--primary-foreground",
    desc: "Text on primary",
  },
  {
    label: "Secondary",
    var: "--secondary",
    desc: "Subtle surface",
  },
  {
    label: "Muted",
    var: "--muted",
    desc: "Disabled / placeholder surface",
  },
  {
    label: "Muted Foreground",
    var: "--muted-foreground",
    desc: "De-emphasised text",
  },
  {
    label: "Accent",
    var: "--accent",
    desc: "Hover states",
  },
  {
    label: "Destructive",
    var: "--destructive",
    desc: "Error / danger",
  },
  {
    label: "Border",
    var: "--border",
    desc: "Dividers & outlines",
  },
  {
    label: "Card",
    var: "--card",
    desc: "Card surface",
  },
  {
    label: "Popover",
    var: "--popover",
    desc: "Floating surface",
  },
];

const brandSwatches = [
  { label: "Brand Purple", var: "--brand-purple", desc: "#6C63FF family" },
  { label: "Brand Coral", var: "--brand-coral", desc: "#FF6363 family" },
  { label: "Brand Dark Purple", var: "--brand-dark-purple", desc: "#271B5E family" },
];

const chartSwatches = [
  { label: "Chart 1", var: "--chart-1" },
  { label: "Chart 2", var: "--chart-2" },
  { label: "Chart 3", var: "--chart-3" },
  { label: "Chart 4", var: "--chart-4" },
  { label: "Chart 5", var: "--chart-5" },
];

export function SectionColors() {
  return (
    <ShowcaseSection
      id="colors"
      title="Color System"
      description="Design tokens derived from the LyttleDevelopment brand palette, adjusted for WCAG AA contrast in both light and dark modes."
    >
      <ShowcaseBlock
        title="Semantic Tokens"
        description="Core palette — these drive every component in the system."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {swatches.map((s) => (
            <div key={s.var} className="space-y-2">
              <div
                className="h-16 w-full rounded-lg border border-border shadow-sm"
                style={{ background: `var(${s.var})` }}
                title={s.var}
              />
              <div>
                <p className="text-xs font-semibold text-foreground leading-tight">
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground font-mono">{s.var}</p>
                {s.desc && (
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        title="Brand Colors"
        description="Raw brand values available as CSS custom properties."
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {brandSwatches.map((s) => (
            <div key={s.var} className="space-y-2">
              <div
                className="h-20 w-full rounded-lg border border-border shadow-sm"
                style={{ background: `var(${s.var})` }}
              />
              <div>
                <p className="text-xs font-semibold text-foreground">{s.label}</p>
                <p className="text-xs text-muted-foreground font-mono">{s.var}</p>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        title="Gradients"
        description="Brand-defined gradient utilities: .bg-brand-gradient and .bg-brand-gradient-accent"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="h-24 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            .bg-brand-gradient
          </div>
          <div className="h-24 rounded-lg bg-brand-gradient-accent flex items-center justify-center text-white font-semibold text-sm shadow-sm">
            .bg-brand-gradient-accent
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        title="Chart Palette"
        description="Five harmonious chart colours derived from the brand system."
      >
        <div className="flex gap-3 flex-wrap">
          {chartSwatches.map((s) => (
            <div key={s.var} className="flex flex-col items-center gap-1">
              <div
                className="h-12 w-12 rounded-full border border-border shadow-sm"
                style={{ background: `var(${s.var})` }}
              />
              <span className="text-xs text-muted-foreground font-mono">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}