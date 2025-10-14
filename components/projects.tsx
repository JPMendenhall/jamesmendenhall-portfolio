import { ProjectCard } from "@/components/project-card"
import { MessageSquare, TrendingUp, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Personal AI Assistant",
      description: "RAG chatbot that answers questions about my professional background. Built with Flask API, OpenAI embeddings, and Supabase vector database. Features semantic search and job posting analysis.",
      tags: ["Python", "OpenAI", "Supabase", "Vector Search"],
      icon: MessageSquare,
      link: "/personal-ai"
    },
    {
      title: "Markets Report Agent",
      description: "Autonomous AI agent analyzing TradFi and crypto markets daily. Synthesizes data from 4 APIs using GPT-4o-mini and deploys reports automatically via GitHub Actions.",
      tags: ["AI Agents", "GitHub Actions", "Multi-API"],
      icon: TrendingUp,
      link: "/markets-report"
    },
    {
      title: "Sneks",
      description: "NFT arcade game with blockchain wallet verification. Features cheat-proof score validation through backend re-simulation and Raspberry Pi automation for leaderboard updates.",
      tags: ["P5.js", "Ethereum", "Python", "Raspberry Pi"],
      icon: Gamepad2,
      link: "/sneks"
    },
  ]

  return (
    <section className="py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 text-base px-8 py-6 rounded-full font-medium bg-transparent"
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  )
}