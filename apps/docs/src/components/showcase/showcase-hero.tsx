import { Badge } from "@lyttle/ui";

export function ShowcaseHero() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-brand-gradient text-white mb-16 px-8 py-20 md:px-16 md:py-28 text-center">
      {/* decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #FF6363 0%, transparent 70%)" }}
      />

      <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
        <Badge
          variant="secondary"
          className="bg-white/15 text-white border-white/20 hover:bg-white/20 text-sm px-4 py-1"
        >
          Design Framework v1.0
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          Lyttle{" "}
          <span style={{ color: "#a78bfa" }}>Framework</span>
        </h1>

        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          A complete design system built on shadcn/ui — styled with the
          LyttleDevelopment brand palette, improved for WCAG AA accessibility,
          and ready for any web project.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <a
            href="#colors"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold bg-white text-purple-900 hover:bg-white/90 shadow-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Components
          </a>
          <a
            href="https://github.com/lyttledevelopment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold border border-white/40 text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex flex-wrap gap-6 justify-center pt-4 text-white/60 text-sm">
          <span>✦ 56 components</span>
          <span>✦ Dark &amp; Light mode</span>
          <span>✦ WCAG AA</span>
          <span>✦ CSS variables</span>
          <span>✦ TypeScript</span>
        </div>
      </div>
    </div>
  );
}