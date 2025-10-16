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
            <p className="text-white-400">
              Meet my AI assistant - ask about my background, projects, experience, or upload a job description to see how I align.
            </p>
          </div>
          
          <ChatInterface compact={true} />
          
          
        </div>
      </section>
      
      <Projects />
    </main>
  )
}