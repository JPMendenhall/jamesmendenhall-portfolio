"use client"

import { useEffect, useState } from "react"

export function LatestAIPulse() {
  const [reportUrl, setReportUrl] = useState("")

  useEffect(() => {
    // Generate today's date in YYYYMMDD format
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const dateStr = `${year}${month}${day}`
    
    setReportUrl(`https://raw.githack.com/JPMendenhall/ai-pulse/main/reports/daily/report_${dateStr}.html`)
  }, [])

  if (!reportUrl) {
    return (
      <div className="flex items-center justify-center h-[2000px] bg-black/50 rounded-lg">
        <div className="text-muted-foreground">Loading today's report...</div>
      </div>
    )
  }

  return (
    <iframe
      src={reportUrl}
      className="w-full h-[3500px] md:h-[2000px] bg-black border-0"
      title="Latest AI Pulse Report"
      scrolling="no"
    />
  )
}