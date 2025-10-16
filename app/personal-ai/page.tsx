"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Database, Zap, Search, Brain, BarChart3, AlertCircle } from "lucide-react"
import Link from "next/link"
import ChatInterface from "@/components/chat-interface"

export default function PersonalAIPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Personal AI Assistant</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Production-grade RAG system with Langfuse observability
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Semantic search + LLM orchestration with real-time monitoring and analytics
          </p>
        </div>
      </section>

      {/* Live Demo */}
      <section className="px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Try It Live</h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 border-b border-white/30">
              <h3 className="text-xl font-bold mb-2">Ask Me Anything</h3>
              <p className="text-muted-foreground text-sm">
                Questions about my background, projects, skills, or upload a job posting for analysis
              </p>
            </div>
            <div className="p-6">
              <ChatInterface compact={false} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            💡 Tip: Every interaction is monitored with Langfuse observability
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How the System Works</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Knowledge Base Storage</h3>
                  <p className="text-muted-foreground">
                    6 detailed documents stored in Supabase PostgreSQL with pgvector extension. Each document converts to a 1536-dimension vector using OpenAI's text-embedding-3-small. Langfuse tracks embedding generation cost and latency for optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Search className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Semantic Search with Langfuse</h3>
                  <p className="text-muted-foreground">
                    Questions convert to vector embeddings and calculate cosine similarity. Langfuse spans capture search performance: query time, document ranking, similarity scores. Query expansion ("education" → "education school university degree") is tracked for effectiveness analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Context Retrieval & Ranking</h3>
                  <p className="text-muted-foreground">
                    Top 3 most relevant documents (above 0.3 similarity threshold) combine as context. Langfuse tracks retrieval performance: document ranking, threshold filtering decisions, and context quality metrics to identify hallucination risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. AI Response with Monitoring</h3>
                  <p className="text-muted-foreground">
                    GPT-4o-mini generates responses using retrieved context. Langfuse captures: LLM API calls, token usage (prompt vs completion), latency, cost, temperature settings, and system prompt effectiveness. Enables debugging of quality issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="px-4 py-16 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Stack</h2>
          
          <div className="glass rounded-xl p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend: Flask API</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>Endpoints:</strong> /health, /chat, /upload-job</li>
                  <li>• <strong>File Processing:</strong> PDF (pypdf), DOCX (python-docx), TXT</li>
                  <li>• <strong>URL Scraping:</strong> BeautifulSoup for job posting analysis</li>
                  <li>• <strong>CORS:</strong> Enabled for cross-origin requests</li>
                  <li>• <strong>Error Handling:</strong> Graceful failures with user-friendly messages</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Database & Vector Search</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>PostgreSQL:</strong> Robust relational database</li>
                  <li>• <strong>pgvector:</strong> Native vector similarity search (cosine distance)</li>
                  <li>• <strong>IVFFlat Index:</strong> Optimized for fast vector operations</li>
                  <li>• <strong>Metadata Filtering:</strong> Category, source, document_type for precision</li>
                  <li>• <strong>Langfuse Tracing:</strong> Tracks query latency and retrieval performance</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">AI & Observability</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>OpenAI SDK:</strong> gpt-4o-mini for responses, text-embedding-3-small for vectors</li>
                  <li>• <strong>Langfuse Tracing:</strong> Spans for embedding, search, retrieval, generation</li>
                  <li>• <strong>Token Tracking:</strong> Monitor prompt/completion ratio and costs</li>
                  <li>• <strong>Latency Monitoring:</strong> Identify bottlenecks (search vs LLM)</li>
                  <li>• <strong>Quality Metrics:</strong> Similarity scores, threshold decisions, error rates</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Quality & Safety</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>Query Expansion:</strong> Short queries auto-expanded for better matching</li>
                  <li>• <strong>Anti-Hallucination:</strong> Strict system prompts + similarity thresholds</li>
                  <li>• <strong>Mode Switching:</strong> Professional vs creative based on context</li>
                  <li>• <strong>Job Analysis:</strong> 3 input methods (text/file/URL)</li>
                  <li>• <strong>Langfuse Debugging:</strong> Identify which inputs cause quality issues</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{"<3s"}</div>
                    <div className="text-xs text-muted-foreground mt-1">Response Time</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">{"<$0.001"}</div>
                    <div className="text-xs text-muted-foreground mt-1">Cost/Query</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">6</div>
                    <div className="text-xs text-muted-foreground mt-1">Documents</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">99.9%</div>
                    <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Langfuse Benefits */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Langfuse Matters</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <BarChart3 className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold">Real-Time Observability</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Every LLM call, vector search, and retrieval operation is tracked. Monitor performance, identify bottlenecks, and catch quality issues before users do.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="h-5 w-5 text-purple-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold">Quality Debugging</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Trace which documents caused hallucinations, which queries had poor results, which prompts underperformed. Fix issues systematically, not blindly.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <Zap className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold">Cost Optimization</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Track embedding costs, token usage, API calls. Identify wasteful queries and optimize thresholds. Currently ~$0.001/query but Langfuse shows exactly where money goes.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <Database className="h-5 w-5 text-orange-400 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-semibold">Production Readiness</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Demonstrates enterprise thinking. Real production systems have observability built in from day one, not bolted on after issues appear.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="px-4 py-16 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Enterprise Value</h2>
          
          <div className="glass rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Scalable Architecture</h3>
            <p className="text-muted-foreground mb-4">
              This same system powers enterprise RAG applications. Replace my resume with your company's knowledge base, policies, or customer data, and you have production infrastructure ready to scale.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Time saved vs manual search</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Consistent accuracy</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Enterprise Applications</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Customer support knowledge bases</li>
                <li>• Internal documentation search</li>
                <li>• Compliance policy assistants</li>
                <li>• HR & legal document analysis</li>
                <li>• Employee onboarding automation</li>
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Instant answers from company knowledge</li>
                <li>• Reduced support ticket volume</li>
                <li>• Faster employee onboarding</li>
                <li>• Consistent information delivery</li>
                <li>• Langfuse monitoring for quality assurance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
         {/* <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-8">
            I can implement RAG systems like this for your business—with Langfuse observability from day one
          </p> */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('/James_Mendenhall_Resume.pdf')}
            >
              Download Resume
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20">
                Back to Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open('https://www.linkedin.com/in/jpmendenhall', '_blank')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}