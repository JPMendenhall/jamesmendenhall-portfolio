"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { LatestAIPulse } from "@/components/latest-ai-pulse"

export default function AIPulsePage() {
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
          <div className="text-6xl mb-4">⚡</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">AI Pulse</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Daily AI & Technology Intelligence • Automated news roundup covering breakthroughs, products, and industry moves
          </p>
        </div>
      </section>

      {/* Latest Report Section */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Latest Daily Report</h2>
          <div className="glass rounded-xl overflow-hidden border border-white/10">
            <LatestAIPulse />
          </div>
          <div className="text-center mt-6">
            <Button 
              variant="outline" 
              className="border-white/20"
              onClick={() => window.open('https://github.com/JPMendenhall/ai-pulse/tree/main/reports/daily', '_blank')}
            >
              View Report Archive
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}