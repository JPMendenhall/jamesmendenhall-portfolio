import { Button } from "@/components/ui/button"
import { ArrowRight, type LucideIcon } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  icon: LucideIcon
  link: string
}

export function ProjectCard({ title, description, tags, icon: Icon, link }: ProjectCardProps) {
  return (
    <Link href={link}>
      <div className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 group min-h-[400px] flex flex-col cursor-pointer">
        <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>

        <h3 className="text-2xl font-bold mb-3 text-balance">{title}</h3>

        <p className="text-muted-foreground text-base mb-6 leading-relaxed flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-foreground text-sm flex items-center">
          View Project
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}