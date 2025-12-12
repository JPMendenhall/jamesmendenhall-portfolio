"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Gamepad2, Shield, Code, Database, Bot, Twitter, Trophy } from "lucide-react"
import Link from "next/link"

export default function SneksPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sneks</h1>
          <p className="text-xl text-muted-foreground mb-8">
            NFT arcade game on Base L2 with AI-powered content automation
          </p>
        </div>
      </section>

      {/* Game Preview */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-6">🐍</div>
          <p className="text-2xl font-bold mb-2">SNEKS</p>
          <p className="text-muted-foreground mb-4">Web3 Gaming + AI Content Automation</p>
          <p className="text-sm text-yellow-400 mb-6 flex items-center justify-center gap-2">
            <Trophy className="h-4 w-4" />
            Bi-weekly prizes for top scores
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open('https://sneks.art', '_blank')}
            >
              <Gamepad2 className="h-5 w-5 mr-2" />
              Play at sneks.art
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('https://x.com/sneksart', '_blank')}
            >
              <Twitter className="h-5 w-5 mr-2" />
              Follow @sneksart
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Breakdown</h2>
          
          <div className="space-y-6">
            {/* Game Frontend */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend: P5.js Game Engine</h3>
                  <p className="text-muted-foreground mb-3">
                    Classic snake mechanics with seedable random generation for deterministic replay. Mobile-responsive controls, real-time scoring, and dynamic speed scaling as snake grows.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Controls:</strong> Keyboard (WASD/arrows) and touch support</li>
                    <li>• <strong>Deterministic RNG:</strong> Enables server-side verification</li>
                    <li>• <strong>Input Logging:</strong> Every move timestamped for replay</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blockchain */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Blockchain: Base L2 NFTs</h3>
                  <p className="text-muted-foreground mb-3">
                    NFT collection on Base blockchain verified via OpenSea API. Daily turns allocated to holders. All gameplay off-chain (gas-free). Bi-weekly prize competitions for top leaderboard scores.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Collection:</strong> 10,000 Sneks on Base L2</li>
                    <li>• <strong>Verification:</strong> Real-time OpenSea API checks</li>
                    <li>• <strong>Gas-Free:</strong> Play without transaction fees</li>
                    <li>• <strong>Prizes:</strong> Bi-weekly competitions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend: Render + PostgreSQL</h3>
                  <p className="text-muted-foreground mb-3">
                    Node.js backend on Render with PostgreSQL for leaderboards and score verification. Server replays game using seed + input log to validate scores (anti-cheat). Automated cron jobs for maintenance.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Hosting:</strong> Render (always-on Node.js)</li>
                    <li>• <strong>Database:</strong> PostgreSQL for scores and turns</li>
                    <li>• <strong>Anti-Cheat:</strong> Deterministic replay verification</li>
                    <li>• <strong>Automation:</strong> Cron jobs for leaderboard clearing</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* AI Content */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Automation: Claude API + GitHub Actions</h3>
                  <p className="text-muted-foreground mb-3">
                    Daily Twitter posts automated via GitHub Actions. Posts one NFT from the 10k collection per day. Claude API generates Aesop Rock-style captions from NFT metadata. Zero manual posting.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Daily Posts:</strong> One NFT per day from collection</li>
                    <li>• <strong>AI Captions:</strong> Claude API writes tweet text</li>
                    <li>• <strong>Style:</strong> Aesop Rock-inspired (lyrical, cryptic)</li>
                    <li>• <strong>Automation:</strong> GitHub Actions + Twitter API</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-muted-foreground mb-8">
            Connect your wallet and compete for bi-weekly prizes
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open('https://sneks.art', '_blank')}
            >
              <Gamepad2 className="h-4 w-4 mr-2" />
              Play Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20"
              onClick={() => window.open('https://opensea.io/collection/sneksart', '_blank')}
            >
              View Collection
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20">
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
