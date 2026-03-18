"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Database, Zap, Search, Brain } from "lucide-react"
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
                Questions about my background, projects, skills, or experience
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
                  <li>• <strong>Endpoints:</strong> /health, /chat, /chat-stream</li>
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
                  <li>• <strong>Langfuse Debugging:</strong> Identify which inputs cause quality issues</li>
                </ul>
              </div>

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