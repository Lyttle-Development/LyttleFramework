import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Card, CardContent, CardHeader, CardTitle } from "@lyttle/ui";
import { Separator } from "@lyttle/ui";
import { Badge } from "@lyttle/ui";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@lyttle/ui";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider } from "@lyttle/ui";
import { Collapsible } from "@lyttle/ui";

function LayoutBox({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`rounded-md border border-border flex items-center justify-center text-xs text-muted-foreground font-mono p-2 ${className}`}
    >
      {label}
    </div>
  );
}

const sidebarItems = [
  { label: "Dashboard", icon: "⊞" },
  { label: "Projects", icon: "◫" },
  { label: "Components", icon: "◈" },
  { label: "Settings", icon: "⚙" },
];

export function SectionLayout() {
  return (
    <ShowcaseSection
      id="layout"
      title="Layout"
      description="Grid systems, resizable panels, separators, sidebar, and structural patterns."
    >
      <ShowcaseBlock title="Separator" description="Horizontal and vertical dividers">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Horizontal</p>
            <Separator />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Vertical</p>
            <div className="flex items-center gap-4 h-8">
              <span className="text-sm text-foreground">Blog</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-foreground">Docs</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-foreground">Source</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">With label</p>
            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground px-2">OR</span>
              <Separator className="flex-1" />
            </div>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Grid Layouts" description="Common responsive grid patterns">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">2-column</p>
            <div className="grid grid-cols-2 gap-2">
              <LayoutBox label="col 1" className="h-12 bg-muted/30" />
              <LayoutBox label="col 2" className="h-12 bg-muted/30" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">3-column</p>
            <div className="grid grid-cols-3 gap-2">
              <LayoutBox label="col 1" className="h-12 bg-muted/30" />
              <LayoutBox label="col 2" className="h-12 bg-muted/30" />
              <LayoutBox label="col 3" className="h-12 bg-muted/30" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Sidebar + main layout</p>
            <div className="grid grid-cols-4 gap-2">
              <LayoutBox label="sidebar" className="h-24 bg-secondary/50 col-span-1" />
              <LayoutBox label="main content" className="h-24 bg-muted/30 col-span-3" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Holy grail layout</p>
            <div className="space-y-2">
              <LayoutBox label="header" className="h-10 bg-primary/10" />
              <div className="grid grid-cols-4 gap-2">
                <LayoutBox label="nav" className="h-20 bg-secondary/50" />
                <LayoutBox label="main" className="h-20 bg-muted/30 col-span-2" />
                <LayoutBox label="aside" className="h-20 bg-secondary/50" />
              </div>
              <LayoutBox label="footer" className="h-10 bg-primary/10" />
            </div>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Resizable Panels" description="Drag to resize split-pane layouts">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Horizontal split</p>
            <ResizablePanelGroup
              orientation="horizontal"
              className="h-40 rounded-lg border border-border overflow-hidden"
            >
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center bg-muted/30 text-xs text-muted-foreground font-mono">
                  Panel 1
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center bg-secondary/30 text-xs text-muted-foreground font-mono">
                  Panel 2
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Three-pane vertical</p>
            <ResizablePanelGroup
              orientation="vertical"
              className="h-48 rounded-lg border border-border overflow-hidden"
            >
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center bg-muted/30 text-xs text-muted-foreground font-mono">
                  Top
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <ResizablePanelGroup orientation="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center bg-secondary/30 text-xs text-muted-foreground font-mono">
                      Bottom L
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center bg-accent/50 text-xs text-muted-foreground font-mono">
                      Bottom R
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Sidebar" description="Application sidebar with navigation groups">
        <div className="rounded-lg border border-border overflow-hidden" style={{ height: 320 }}>
          <SidebarProvider defaultOpen>
            <div className="flex h-full w-full">
              <Sidebar collapsible="none" className="border-r border-border" style={{ width: 220 }}>
                <SidebarHeader className="px-4 py-3 border-b border-border">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-md flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: "var(--brand-gradient-primary)" }}
                    >
                      L
                    </div>
                    <span className="font-semibold text-sm text-foreground">Lyttle App</span>
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {sidebarItems.map((item, i) => (
                          <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton isActive={i === 0}>
                              <span aria-hidden="true">{item.icon}</span>
                              <span>{item.label}</span>
                              {i === 2 && (
                                <Badge variant="secondary" className="ml-auto text-xs">
                                  56
                                </Badge>
                              )}
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
              <div className="flex-1 p-6 bg-background overflow-auto">
                <h3 className="font-semibold text-foreground mb-1">Dashboard</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Welcome back to Lyttle Framework.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Components", "Tokens", "Pages", "Themes"].map((item) => (
                    <Card key={item} className="p-3">
                      <CardHeader className="p-0 pb-1">
                        <CardTitle className="text-xs text-muted-foreground font-medium">
                          {item}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-xl font-bold text-foreground">
                          {item === "Components" ? "56" : item === "Tokens" ? "32" : item === "Pages" ? "8" : "2"}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Spacing & Radius Scale" description="Design token reference for spacing and border radius">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Border Radius
            </p>
            <div className="flex flex-wrap gap-4 items-end">
              {[
                { label: "sm", value: "var(--radius-sm)" },
                { label: "md", value: "var(--radius-md)" },
                { label: "lg", value: "var(--radius-lg)" },
                { label: "xl", value: "var(--radius-xl)" },
                { label: "2xl", value: "var(--radius-2xl)" },
                { label: "full", value: "9999px" },
              ].map((r) => (
                <div key={r.label} className="flex flex-col items-center gap-2">
                  <div
                    className="h-10 w-10 bg-primary/20 border border-primary/40"
                    style={{ borderRadius: r.value }}
                  />
                  <span className="text-xs text-muted-foreground">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Shadow Scale
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "none", shadow: "none" },
                { label: "sm", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
                { label: "md", shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
                { label: "lg", shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" },
                { label: "xl", shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className="h-12 w-16 rounded-lg bg-card border border-border"
                    style={{ boxShadow: s.shadow }}
                  />
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}