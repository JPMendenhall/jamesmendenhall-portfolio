"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Database, FileText, Brain } from "lucide-react"
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
            Chatbot that answers questions about my background, built on a Flask API with Langfuse tracing
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
            Each chat is logged in Langfuse.
          </p>
        </div>
      </section>

      {/* Request flow */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">From Question to Answer</h2>

          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Knowledge Base</h3>
                  <p className="text-muted-foreground">
                    Markdown files in the API's repo: my résumé, current role, project write-ups, and art background. The API reads them at startup and joins them into one block of text, about 35,000 characters.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Prompt</h3>
                  <p className="text-muted-foreground">
                    Each question goes to GPT-4o-mini with the whole knowledge base in the system prompt, plus the earlier messages from the chat. The files are small enough to send in full, so there's no vector search. The prompt tells the model to answer only from that text and to say when it doesn't know.
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
                  <h3 className="text-xl font-semibold mb-2">3. Response</h3>
                  <p className="text-muted-foreground">
                    The answer streams back to the page over server-sent events. Langfuse wraps the OpenAI client and records tokens, cost, and latency for each call.
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
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Backend: Flask API on Railway</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>Endpoints:</strong> /health, /chat, /chat-stream</li>
                  <li>• <strong>Streaming:</strong> Server-sent events from /chat-stream</li>
                  <li>• <strong>Deploys:</strong> Railway redeploys on a push to main</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Knowledge Base</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>Format:</strong> Markdown files in the repo</li>
                  <li>• <strong>Updates:</strong> Edit a file and push; the new text is live after the redeploy</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">Model</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>OpenAI:</strong> gpt-4o-mini, temperature 0.7, 500 max tokens</li>
                  <li>• <strong>History:</strong> The page sends earlier messages with each question</li>
                  <li>• <strong>Rules:</strong> Answer from the knowledge base only, keep it short, no recruiter language</li>
                </ul>
              </div>

              <div className="border-t border-white/10 pt-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Observability: Langfuse</h3>
                <ul className="space-y-2 text-muted-foreground ml-4 text-sm">
                  <li>• <strong>Tracing:</strong> OpenAI client wrapped by Langfuse</li>
                  <li>• <strong>Logged per call:</strong> Prompt and completion tokens, cost, latency</li>
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