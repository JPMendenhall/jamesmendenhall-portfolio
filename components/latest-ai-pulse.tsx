"use client"

import { useEffect, useState } from "react"

export function LatestAIPulse() {
  const [reportUrl, setReportUrl] = useState("")
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadReport = async () => {
      // Generate today's date in YYYYMMDD format
      const today = new Date()
      const year = today.getFullYear()
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const day = String(today.getDate()).padStart(2, '0')
      const dateStr = `${year}${month}${day}`
      
      const todayUrl = `https://raw.githack.com/JPMendenhall/ai-pulse/main/reports/daily/report_${dateStr}.html`
      
      // Try to fetch today's report
      try {
        const response = await fetch(todayUrl, { method: 'HEAD' })
        if (response.ok) {
          setReportUrl(todayUrl)
        } else {
          // Today's report doesn't exist, try yesterday
          const yesterday = new Date(today)
          yesterday.setDate(yesterday.getDate() - 1)
          const yearY = yesterday.getFullYear()
          const monthY = String(yesterday.getMonth() + 1).padStart(2, '0')
          const dayY = String(yesterday.getDate()).padStart(2, '0')
          const dateStrY = `${yearY}${monthY}${dayY}`
          
          const yesterdayUrl = `https://raw.githack.com/JPMendenhall/ai-pulse/main/reports/daily/report_${dateStrY}.html`
          setReportUrl(yesterdayUrl)
        }
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

  if (!reportUrl) {
    return (
      <div className="flex items-center justify-center h-[400px] bg-black/50 rounded-lg">
        <div className="text-muted-foreground">Loading report...</div>
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