import { Hero } from "@/components/hero"
import ChatInterface from "@/components/chat-interface"
import { Projects } from "@/components/projects"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      
      {/* Chat Section */}
      <section className="pt-4 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <ChatInterface compact={true} />
          
          
        </div>
      </section>
      
      <Projects />
    </main>
  )
}