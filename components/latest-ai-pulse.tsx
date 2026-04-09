"use client"

import { useEffect, useState } from "react"

export function LatestAIPulse() {
  const [reportHtml, setReportHtml] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadReport = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/JPMendenhall/ai-pulse/contents/reports/daily",
          { headers: { Accept: "application/vnd.github.v3+json" } }
        )
        if (!res.ok) throw new Error("GitHub API error")
        const files: { name: string; download_url: string }[] = await res.json()

        // Sort by filename descending to get the latest report
        const latest = files
          .filter(f => f.name.endsWith(".html"))
          .sort((a, b) => b.name.localeCompare(a.name))[0]

        if (!latest) throw new Error("No reports found")

        const htmlRes = await fetch(latest.download_url)
        if (!htmlRes.ok) throw new Error("Failed to fetch report HTML")
        const html = await htmlRes.text()
        setReportHtml(html)
      } catch (err) {
        setError(true)
      }
    }

    loadReport()
  }, [])

  if (error) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-black/50 rounded-lg">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Unable to load report</p>
          <button
            onClick={() => window.open('https://github.com/JPMendenhall/ai-pulse/tree/main/reports/daily', '_blank')}
            className="text-blue-400 hover:underline"
          >
            View Archive →
          </button>
        </div>
      </div>
    )
  }

  if (!reportHtml) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-black/50 rounded-lg">
        <div className="text-muted-foreground">Loading report...</div>
      </div>
    )
  }

  return (
    <iframe
      srcDoc={reportHtml}
      className="w-full h-[3500px] md:h-[2000px] bg-black border-0"
      title="Latest AI Pulse Report"
      scrolling="no"
    />
  )
}
