"use client"

import { useState, useEffect } from "react"
import { Loader2, AlertCircle } from "lucide-react"

export function LatestReport() {
  const [reportHtml, setReportHtml] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchLatestReport() {
      try {
        // Fetch list of files from GitHub API
        const listResponse = await fetch(
          'https://api.github.com/repos/JPMendenhall/markets-report/contents/src/reports'
        )
        
        if (!listResponse.ok) throw new Error('Failed to fetch reports list')
        
        const files = await listResponse.json()
        
        // Filter for report HTML files and sort by name (newest first)
        const reportFiles = files
          .filter((file: any) => file.name.startsWith('report_') && file.name.endsWith('.html'))
          .sort((a: any, b: any) => b.name.localeCompare(a.name))
        
        if (reportFiles.length === 0) {
          throw new Error('No reports found')
        }
        
        // Get the most recent report
        const latestReport = reportFiles[0]
        
        // Fetch the HTML file directly from raw.githubusercontent.com via proxy
        const htmlUrl = `https://raw.githubusercontent.com/JPMendenhall/markets-report/main/src/reports/${latestReport.name}`
        const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(htmlUrl)}`
        
        const htmlResponse = await fetch(proxyUrl)
        
        if (!htmlResponse.ok) throw new Error('Failed to fetch report content')
        
        let htmlContent = await htmlResponse.text()
        
        // Remove the timestamp "• Generated at XX:XX AM"
        htmlContent = htmlContent.replace(/\s*[•·]\s*Generated at \d{1,2}:\d{2} [AP]M/gi, '')
        
        setReportHtml(htmlContent)
        setLoading(false)
      } catch (err) {
        console.error('Error fetching latest report:', err)
        setError(err instanceof Error ? err.message : 'Failed to load report')
        setLoading(false)
      }
    }

    fetchLatestReport()
  }, [])

  if (loading) {
    return (
      <div className="w-full min-h-[800px] rounded-lg border border-white/30 flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-400 mx-auto mb-4" />
          <p className="text-muted-foreground">Loading latest report...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full min-h-[800px] rounded-lg border border-white/30 flex items-center justify-center bg-zinc-900">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
          <p className="text-muted-foreground mb-4">Failed to load report</p>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="w-full"
      style={{ minHeight: '1800px' }}
    >
      <iframe
        srcDoc={reportHtml || ''}
        className="w-full rounded-lg border border-white/30"
        style={{ height: '1800px', background: '#000000' }}
        title="Latest Markets Report"
      />
    </div>
  )
}