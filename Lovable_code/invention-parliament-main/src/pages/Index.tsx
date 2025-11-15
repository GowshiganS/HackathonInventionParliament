import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, ArrowRight, Users, Database, FileText, AlertCircle, Repeat } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                The Invention Parliament
              </h1>
              <p className="text-muted-foreground mt-1">
                Asynchronous Model Context Protocol (AMCP)
              </p>
            </div>
            <Badge variant="secondary" className="text-sm px-4 py-2">
              Problem → Patent in 60 Minutes
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Introduction Card */}
        <Card className="p-6 mb-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This diagram visualizes how 10 AI agents collaborate through the Asynchronous Model Context Protocol (AMCP) 
            to transform a problem statement into a USPTO-ready patent. The Qdrant Vector Memory serves as the central 
            hub, eliminating bottlenecks and enabling true parallel collaboration.
          </p>
        </Card>

        {/* Visual Flowchart */}
        <div className="space-y-8">
          {/* Input Problem */}
          <div className="flex justify-center">
            <Card className="p-6 bg-primary text-primary-foreground shadow-glow max-w-2xl w-full text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Input: Problem Statement</h3>
              <p className="text-primary-foreground/90">
                "Reduce EV battery degradation by 50%"
              </p>
            </Card>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>

          {/* Phase 1: Parallel Ideation */}
          <Card className="p-8 shadow-soft">
            <div className="text-center mb-6">
              <Badge className="mb-3 bg-accent text-accent-foreground">Phase 1: Parallel Ideation</Badge>
              <h3 className="text-2xl font-semibold text-foreground">10 AI Expert Agents</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              {[
                { icon: "🧑‍🔬", name: "Materials Scientist" },
                { icon: "⚙️", name: "Mechanical Engineer" },
                { icon: "🧪", name: "Chemist" },
                { icon: "💡", name: "Innovation Agent" },
                { icon: "🔋", name: "Battery Specialist" },
                { icon: "📊", name: "Data Analyst" },
                { icon: "🏭", name: "Manufacturing Expert" },
                { icon: "🔬", name: "Research Scientist" },
                { icon: "💻", name: "Software Engineer" },
                { icon: "🌍", name: "Sustainability Expert" }
              ].map((agent, idx) => (
                <Card key={idx} className="p-3 text-center bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="text-2xl mb-1">{agent.icon}</div>
                  <p className="text-xs text-muted-foreground leading-tight">{agent.name}</p>
                </Card>
              ))}
            </div>

            <div className="flex justify-center items-center gap-2 text-muted-foreground">
              <ArrowDown className="w-6 h-6" />
              <span className="text-sm font-medium">Broadcasting Ideas Asynchronously</span>
              <ArrowDown className="w-6 h-6" />
            </div>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>

          {/* Central Memory Hub */}
          <Card className="p-8 bg-gradient-primary text-white shadow-glow relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8),transparent_50%)]" />
            <div className="relative z-10">
              <div className="text-center mb-6">
                <Database className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-2">🧠 Qdrant Vector Memory</h3>
                <p className="text-white/90 text-lg">(AMCP Backbone)</p>
                <div className="mt-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <p className="text-xl font-semibold">30+ Ideas Broadcast Asynchronously</p>
                </div>
              </div>

              {/* Phase 2: Clustering */}
              <div className="mt-8">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">Phase 2: Semantic Clustering</Badge>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { name: "Silicon Anodes", id: "Cluster 1" },
                    { name: "Thermal Management", id: "Cluster 2" },
                    { name: "AI Optimization", id: "Cluster 3" },
                    { name: "Material Science", id: "Cluster 4" },
                    { name: "Charging Systems", id: "Cluster 5" }
                  ].map((cluster, idx) => (
                    <div key={idx} className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                      <div className="text-3xl mb-2">📦</div>
                      <p className="text-sm font-semibold mb-1">{cluster.id}</p>
                      <p className="text-xs text-white/80">{cluster.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phase 3: Deliberation */}
              <div className="mt-8">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">Phase 3: Asynchronous Deliberation & Coalition Formation</Badge>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Repeat className="w-6 h-6" />
                      <h4 className="font-semibold">Coalition A</h4>
                    </div>
                    <p className="text-sm text-white/90 mb-3">Debating Silicon Anodes</p>
                    <div className="flex gap-2">
                      {["🧑‍🔬", "🧪", "🔋"].map((icon, i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                          {icon}
                        </div>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-6 h-6" />
                      <h4 className="font-semibold">Contrarian Agent 🔴</h4>
                    </div>
                    <p className="text-sm text-white/90 mb-2">Injects Critiques & Ensures Rigor</p>
                    <p className="text-xs text-white/70">Challenges assumptions across all clusters</p>
                  </Card>
                </div>
                
                <div className="mt-4 p-4 bg-white/10 rounded-lg backdrop-blur-sm text-center">
                  <p className="text-sm font-semibold">⚡ No Turn-Taking. True Parallel Collaboration. ⚡</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-primary animate-bounce" />
          </div>

          {/* Phase 4: Patent Generation */}
          <Card className="p-8 shadow-glow">
            <Badge className="mb-4 bg-accent text-accent-foreground">Phase 4: Synthesis & Generation</Badge>
            
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <Card className="p-6 bg-secondary/50 text-center">
                <Database className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h4 className="font-semibold mb-2">Prior Art Database</h4>
                <p className="text-sm text-muted-foreground">120k Patents</p>
              </Card>

              <div className="flex justify-center">
                <ArrowRight className="w-8 h-8 text-primary hidden md:block" />
                <ArrowDown className="w-8 h-8 text-primary md:hidden" />
              </div>

              <Card className="p-6 bg-accent/10 text-center border-accent">
                <Users className="w-12 h-12 mx-auto mb-3 text-accent" />
                <h4 className="font-semibold mb-2">⚖️ Patent Attorney Agent</h4>
                <p className="text-sm text-muted-foreground">Synthesizing findings with prior art analysis</p>
              </Card>
            </div>

            <div className="flex justify-center my-6">
              <ArrowDown className="w-8 h-8 text-primary" />
            </div>

            <Card className="p-6 bg-primary text-primary-foreground shadow-glow text-center">
              <FileText className="w-12 h-12 mx-auto mb-3" />
              <h3 className="text-2xl font-bold mb-2">📄 Output</h3>
              <p className="text-lg">USPTO-Ready Provisional Patent</p>
            </Card>
          </Card>
        </div>

        {/* Legend */}
        <Card className="mt-8 p-6 bg-secondary/30 border-primary/20 shadow-soft">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-2xl">💡</span>
            AMCP Innovation
          </h3>
          <p className="text-foreground leading-relaxed">
            <strong>Key Principle:</strong> Agents broadcast to shared memory, not to each other. 
            This eliminates bottlenecks and enables infinite scale. No turn-taking required—all agents 
            work in true parallel collaboration, dramatically accelerating innovation.
          </p>
        </Card>

        {/* Phase Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <Card className="p-6 shadow-soft hover:shadow-glow transition-shadow">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Phase 1: Parallel Ideation
            </h3>
            <p className="text-sm text-muted-foreground">
              10 specialized AI agents simultaneously generate 30+ ideas, all broadcasting to the central Qdrant memory.
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-glow transition-shadow">
            <div className="text-3xl mb-3">📦</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Phase 2: Semantic Clustering
            </h3>
            <p className="text-sm text-muted-foreground">
              Ideas are automatically grouped into 5-7 innovation clusters based on semantic similarity and potential synergies.
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-glow transition-shadow">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Phase 3: Async Deliberation
            </h3>
            <p className="text-sm text-muted-foreground">
              Agents form coalitions and debate asynchronously. The Contrarian Agent ensures rigor by injecting critiques.
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-glow transition-shadow">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Phase 4: Patent Generation
            </h3>
            <p className="text-sm text-muted-foreground">
              Patent Attorney Agent synthesizes findings with prior art analysis to create a USPTO-ready provisional patent.
            </p>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>The Invention Parliament • Powered by AMCP & Qdrant Vector Memory</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
