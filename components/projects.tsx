"use client"

import { ProjectCard } from "@/components/project-card"
import { MessageSquare, Gamepad2, Zap, Bot, Palette, Shapes } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  const projects = [
    {
      title: "Fringe",
      description: "Web3 artist portfolios built from on-chain data. Each page lists an artist's minted work across Nifty Gateway, Known Origin, MakersPlace, Foundation, Async and more, including platforms that have shut down.",
      tags: ["Node.js", "PostgreSQL", "viem", "Ethereum"],
      icon: Palette,
      link: "https://fringe.art"
    },
    {
      title: "Long-Form Generative Art",
      description: "Seeded, deterministic art created from JavaScript. A token's hash drives the random generator, so the same hash always draws the same piece. Released on Art Blocks and Verse.",
      tags: ["JavaScript", "Art Blocks", "Verse", "Ethereum"],
      icon: Shapes,
      link: "https://jamesmendenhall.art/generative"
    },
    {
      title: "AI Pulse",
      description: "Daily AI news report. A GitHub Actions job pulls articles from 50+ sources each morning, GPT-4o-mini summarizes them, and the result is published as an HTML page.",
      tags: ["NewsAPI", "OpenAI", "GitHub Actions", "Automation"],
      icon: Zap,
      link: "/ai-pulse"
    },
    {
      title: "Underground NFT Bot",
      description: "Discord bot that posts NFT listings and sales for the collections you track, with alerts for under-floor listings and sweeps. Access requires holding Subterrestrials NFTs, checked on-chain.",
      tags: ["Node.js", "Discord", "OpenSea API", "viem"],
      icon: Bot,
      link: "https://bot.jamesmendenhall.art"
    },
    {
      title: "Personal AI Assistant",
      description: "The chatbot on this site. A Flask API on Railway puts my résumé and project notes into GPT-4o-mini's prompt, and Langfuse logs each call's tokens, cost, and latency.",
      tags: ["Python", "Flask", "OpenAI", "Langfuse"],
      icon: MessageSquare,
      link: "/personal-ai"
    },
{
      title: "Sneks",
      description: "Snake game for holders of the Sneks NFT collection on Base. The server replays each run from its seed and inputs to check the score, and a GitHub Actions job posts one Snek to X daily with a caption written by Claude.",
      tags: ["P5.js", "Ethereum", "Python", "GitHub Actions"],
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

        <div className="flex gap-4 justify-center flex-wrap mt-8 mb-16 md:mb-8">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('https://jamesmendenhall.art', '_blank')}
            >
              Art
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