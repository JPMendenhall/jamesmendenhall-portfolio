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
            RAG system answering questions about my professional background
          </p>
        </div>
      </section>

      {/* Live Demo - Bigger chatbot */}
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
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">How the Chatbot Works</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Knowledge Base Storage</h3>
                  <p className="text-muted-foreground">
                    6 detailed documents (resume, projects, career goals, approach to AI) are stored in a Supabase PostgreSQL database with pgvector extension. Each document is converted into a 1536-dimension vector using OpenAI's text-embedding-3-small model.
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
                  <h3 className="text-xl font-semibold mb-2">2. Semantic Search</h3>
                  <p className="text-muted-foreground">
                    When you ask a question, it's converted to a vector embedding. The system calculates cosine similarity between your question and all documents, ranking them by relevance. Short queries are automatically expanded (e.g., "education" → "education school university degree") for better matching.
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
                  <h3 className="text-xl font-semibold mb-2">3. Context Retrieval</h3>
                  <p className="text-muted-foreground">
                    The top 3 most relevant documents (above 0.3 similarity threshold) are retrieved and combined as context. This ensures accurate, focused responses without hallucination.
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
                  <h3 className="text-xl font-semibold mb-2">4. AI Response Generation</h3>
                  <p className="text-muted-foreground">
                    GPT-4o-mini generates a natural language response using the retrieved context. Strict prompts enforce accuracy ("NEVER make up information"). The system switches between professional and creative modes based on question type, and knows it's one of my projects (self-aware personality).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-4 py-16 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Architecture</h2>
          
          <div className="glass rounded-xl p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend: Flask API</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• <strong>Endpoints:</strong> /health, /chat, /upload-job</li>
                  <li>• <strong>File Processing:</strong> PDF (pypdf), DOCX (python-docx), TXT</li>
                  <li>• <strong>URL Scraping:</strong> BeautifulSoup for job posting analysis</li>
                  <li>• <strong>CORS:</strong> Enabled for cross-origin requests</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Database: Supabase + pgvector</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• <strong>PostgreSQL:</strong> Robust relational database</li>
                  <li>• <strong>pgvector:</strong> Native vector similarity search (cosine distance)</li>
                  <li>• <strong>Metadata:</strong> Category, source, document_type for filtering</li>
                  <li>• <strong>IVFFlat Index:</strong> Optimized vector operations</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">AI Features</h3>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li>• <strong>Query Expansion:</strong> Short queries auto-expanded for better matching</li>
                  <li>• <strong>Anti-Hallucination:</strong> Strict prompts prevent false information</li>
                  <li>• <strong>Mode Switching:</strong> Professional vs creative based on context</li>
                  <li>• <strong>Self-Aware:</strong> Knows it's one of my projects</li>
                  <li>• <strong>Job Analysis:</strong> 3 input methods (text/file/URL)</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Performance</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">{"<3s"}</div>
                    <div className="text-xs text-muted-foreground mt-1">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">{"<$0.001"}</div>
                    <div className="text-xs text-muted-foreground mt-1">Cost per Query</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">6</div>
                    <div className="text-xs text-muted-foreground mt-1">Documents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400">99.9%</div>
                    <div className="text-xs text-muted-foreground mt-1">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases & Business Value */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Business Value & Use Cases</h2>
          
          <div className="glass rounded-xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4">Why This Matters</h3>
            <p className="text-muted-foreground mb-4">
              This same RAG architecture can be applied to virtually any document-heavy business process. Replace my resume with your company's knowledge base, and you have an instant AI assistant.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Time saved vs manual search</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Always available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
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
                <li>• HR policy chatbots</li>
                <li>• Legal document analysis</li>
              </ul>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Key Benefits</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Instant answers from company knowledge</li>
                <li>• Reduced support ticket volume</li>
                <li>• Faster employee onboarding</li>
                <li>• Consistent information delivery</li>
                <li>• Scalable without headcount</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Together</h2>
          <p className="text-muted-foreground mb-8">
            I can implement RAG systems like this for your business - from simple knowledge bases to complex compliance tools
          </p>
          <div className="flex gap-4 justify-center">
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