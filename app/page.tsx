import { Hero } from "@/components/hero"
import ChatInterface from "@/components/chat-interface"
import { Projects } from "@/components/projects"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      {/* Chat Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Ask Me Anything
            </h2>
            <p className="text-gray-400">
              Try the AI assistant - ask about my experience, projects, or skills
            </p>
          </div>
          
          <ChatInterface compact={true} />
          
          <div className="text-center mt-4">
            <Link 
              href="/ai-assistant"
              className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
            >
              Use the paperclip upload button to upload a job posting and gauge fit"
            </Link>
          </div>
        </div>
      </section>
      
      <Projects />
    </main>
  )
}