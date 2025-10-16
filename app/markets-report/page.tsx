"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, TrendingUp, Calendar, Github, Zap, Database, Brain, Sparkles } from "lucide-react"
import Link from "next/link"
import { LatestReport } from "@/components/latest-report"

export default function MarketsReportPage() {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Markets Report Agent</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Fully autonomous AI agent analyzing traditional finance and cryptocurrency markets daily
          </p>
        </div>
      </section>

      {/* Latest Report Display */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Latest Report</h2>
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Running Daily at 6 AM ET
            </div>
          </div>
          
          <div className="glass rounded-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 border-b border-white/30">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Daily Markets Analysis</h3>
                  <p className="text-muted-foreground">Generated automatically every morning at 6 AM ET</p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline"
                    className="border-white/20"
                    onClick={() => window.open('https://github.com/JPMendenhall/markets-report/tree/main/src/reports', '_blank')}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    View Archive
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={() => window.open('https://github.com/JPMendenhall/markets-report', '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Report iframe - automatically fetches latest */}
              <div className="mb-6">
                <LatestReport />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-blue-400 text-center">Traditional Finance</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 text-center">
                    <li>• S&P 500 & Nasdaq performance</li>
                    <li>• Gold, oil, VIX volatility</li>
                    <li>• 10-year Treasury yields</li>
                    <li>• Financial news headlines</li>
                  </ul>
                </div>
                <div className="glass rounded-lg p-4">
                  <h4 className="font-semibold mb-2 text-purple-400 text-center">Cryptocurrency</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 text-center">
                    <li>• Bitcoin, Ethereum, Solana</li>
                    <li>• Total crypto market cap</li>
                    <li>• Ethereum gas prices</li>
                    <li>• Cross-market correlations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Breakdown</h2>
          
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Multi-Source Data Collection</h3>
                  <p className="text-muted-foreground mb-3">
                    Every morning at 6 AM ET, the system collects data from 4 different APIs simultaneously:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 ml-4">
                    <div>
                      <span className="font-semibold text-blue-400">tradfi.py</span>
                      <p className="text-sm text-muted-foreground">Yahoo Finance - stocks, commodities, bonds</p>
                    </div>
                    <div>
                      <span className="font-semibold text-purple-400">crypto.py</span>
                      <p className="text-sm text-muted-foreground">CoinGecko - crypto prices and market data</p>
                    </div>
                    <div>
                      <span className="font-semibold text-green-400">onchain.py</span>
                      <p className="text-sm text-muted-foreground">Etherscan - gas prices and blockchain metrics</p>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-400">news.py</span>
                      <p className="text-sm text-muted-foreground">NewsAPI - financial headlines and sentiment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. AI Analysis Engine</h3>
                  <p className="text-muted-foreground">
                    GPT-4o-mini synthesizes all collected data into a coherent market analysis. The AI has a tuned personality: sharp analyst with wit, professional but engaging. Temperature set to 0.68 for balanced insight and reliability. Output limited to 500 tokens for concise, actionable analysis.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Report Generation</h3>
                  <p className="text-muted-foreground">
                    Jinja2 templates generate beautiful HTML reports with dark theme styling. Reports display TradFi and Crypto side-by-side with color-coded performance indicators (green for gains, red for losses). Includes timestamp, market highlights, and AI commentary.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Automated Deployment</h3>
                  <p className="text-muted-foreground">
                    GitHub Actions handles the entire workflow: runs Python script at 11:00 UTC (6 AM ET), generates report, commits HTML file to repository archive organized by date. Zero manual intervention required. The archive grows automatically every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Performance Metrics</h2>
          
          <div className="glass rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">4</div>
                <div className="text-sm text-muted-foreground">Data Sources</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">6 AM</div>
                <div className="text-sm text-muted-foreground">Daily Runtime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Autonomous</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">$0.30</div>
                <div className="text-sm text-muted-foreground">Monthly Cost</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-lg font-semibold mb-4 text-center">What This Demonstrates</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>AI Agent Architecture:</strong> Beyond simple RAG</li>
                  <li>• <strong>Multi-API Orchestration:</strong> Synthesizing diverse data</li>
                  <li>• <strong>Automation & CI/CD:</strong> GitHub Actions mastery</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Prompt Engineering:</strong> Personality tuning</li>
                  <li>• <strong>Production Systems:</strong> Running daily without intervention</li>
                  <li>• <strong>Cost Optimization:</strong> Free tier APIs only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Want an Autonomous Agent?</h2>
          <p className="text-muted-foreground mb-8">
            I can build AI agents that run on schedule, synthesize data from multiple sources, and deliver insights automatically
          </p> */}
          <div className="flex gap-4 justify-center">
            <Link href="/">
              <Button size="lg" variant="outline" className="border-white/20">
                Back to Home
              </Button>
            </Link>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
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