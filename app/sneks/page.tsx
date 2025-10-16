"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Gamepad2, Shield, Zap, Code, Database, Cpu } from "lucide-react"
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
            Interactive NFT-based arcade game combining blockchain verification with nostalgic gameplay
          </p>
        </div>
      </section>

      {/* Simple Game Preview */}
      <section className="px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-8xl mb-6">🐍</div>
          <p className="text-2xl font-bold mb-2">SNEKS</p>
          <p className="text-muted-foreground mb-6">Nostalgic Arcade Experience</p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => window.open('https://sneks.art', '_blank')}
          >
            <Gamepad2 className="h-5 w-5 mr-2" />
            Play at sneks.art
          </Button>
        </div>
      </section>

      {/* Technical Breakdown */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Breakdown</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Frontend: P5.js Game Engine</h3>
                  <p className="text-muted-foreground mb-3">
                    Built with P5.js for smooth, canvas-based gameplay. Classic snake mechanics with modern twist: players control a snake that grows as it collects points. Features responsive controls, real-time scoring, and nostalgic pixel-perfect aesthetics.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Wallet Integration:</strong> MetaMask and WalletConnect support</li>
                    <li>• <strong>Responsive Design:</strong> Works on desktop and mobile</li>
                    <li>• <strong>Real-time Feedback:</strong> Immediate scoring and animations</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Blockchain Integration</h3>
                  <p className="text-muted-foreground mb-3">
                    Players connect their Ethereum wallet to verify NFT ownership via OpenSea API. Off-chain leaderboard ensures fast, gas-free gameplay while maintaining blockchain-verified authenticity. Only verified NFT holders can compete on the leaderboard.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>OpenSea API:</strong> Real-time NFT ownership verification</li>
                    <li>• <strong>Web3 Providers:</strong> Multiple wallet options</li>
                    <li>• <strong>Off-chain Gaming:</strong> No gas fees during gameplay</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backend: Python Score Validation</h3>
                  <p className="text-muted-foreground mb-3">
                    When a player submits a score, the Python backend re-simulates the entire game to verify legitimacy. This prevents client-side cheating by validating that the reported score is physically possible given the gameplay mechanics.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>Score Re-simulation:</strong> Backend replays each game</li>
                    <li>• <strong>Cheat Prevention:</strong> 100% validation before leaderboard update</li>
                    <li>• <strong>Database Storage:</strong> Secure player scores and statistics</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Raspberry Pi Automation</h3>
                  <p className="text-muted-foreground mb-3">
                    A Raspberry Pi runs 24/7 handling backend operations: processing score submissions, updating the leaderboard, and posting daily results to social media. Demonstrates resource-efficient deployment and hardware integration skills.
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• <strong>24/7 Operation:</strong> Always available for players</li>
                    <li>• <strong>Automated Updates:</strong> Daily social media posts with results</li>
                    <li>• <strong>Minimal Resources:</strong> Runs on single-board computer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Challenges Solved */}
      <section className="px-4 py-16 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Challenges Solved</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Cheat Prevention</h3>
              <p className="text-muted-foreground text-sm">
                Backend re-simulates each game using the exact sequence of moves to verify scores are legitimate. Prevents client-side manipulation and ensures fair competition.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">NFT Verification</h3>
              <p className="text-muted-foreground text-sm">
                Real-time checks against OpenSea API ensure only verified NFT holders can compete. Combines Web3 authentication with traditional gameplay.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Off-Chain Gaming</h3>
              <p className="text-muted-foreground text-sm">
                Instant gameplay without gas fees while maintaining blockchain-verified authenticity. Best of both worlds: fast UX and verifiable ownership.
              </p>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Hardware Automation</h3>
              <p className="text-muted-foreground text-sm">
                Raspberry Pi handles all backend operations 24/7 with minimal resources. Demonstrates efficient system design and deployment skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Demonstrates */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What This Demonstrates</h2>
          
          <div className="glass rounded-xl p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Full-Stack Development</h4>
                  <p className="text-muted-foreground text-sm">
                    Frontend game engine, backend API, database management, automation - complete system ownership from concept to deployment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Blockchain Integration</h4>
                  <p className="text-muted-foreground text-sm">
                    Web3 wallet connection, NFT verification via OpenSea API, understanding of on-chain vs off-chain tradeoffs for optimal UX.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-400">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Security & Validation</h4>
                  <p className="text-muted-foreground text-sm">
                    Score verification through re-simulation, preventing cheating, secure API design. Understanding of attack vectors and mitigation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-orange-400">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hardware & Automation</h4>
                  <p className="text-muted-foreground text-sm">
                    Raspberry Pi deployment, 24/7 operation, resource optimization, social media integration. Beyond just software development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-400">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Technical Range</h4>
                  <p className="text-muted-foreground text-sm">
                    Not just AI integration - demonstrates versatility with gaming, blockchain, hardware, and creative problem-solving across domains.
                  </p>
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
            Connect your wallet and compete on the leaderboard!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => window.open('https://sneks.art', '_blank')}
            >
              <Gamepad2 className="h-4 w-4 mr-2" />
              Play at sneks.art
            </Button>
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20">
                Back to Home
              </Button>
            </Link>
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
    </main>
  )
}