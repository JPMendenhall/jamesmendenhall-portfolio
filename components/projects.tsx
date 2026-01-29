"use client"

import { ProjectCard } from "@/components/project-card"
import { MessageSquare, TrendingUp, Gamepad2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "AI Pulse",
      description: "Daily AI news roundup running automatically every morning. Collects from 50+ sources, synthesizes with GPT-4o-mini, and generates beautiful HTML reports via GitHub Actions.",
      tags: ["NewsAPI", "OpenAI", "GitHub Actions", "Automation"],
      icon: Zap,
      link: "/ai-pulse"
    },
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

        {/* Projects grid - now 2x2 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap mt-8 mb-16 md:mb-8">
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('/James_Mendenhall_Resume.pdf')}
            >
              Download Resume
            </Button> 
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('https://www.linkedin.com/in/jpmendenhall', '_blank')}
            >
              Contact Me
            </Button>
        </div>
      </div>
    </section>
  )
}