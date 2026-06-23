import { ImageResponse } from "next/og"

export const alt = "James Mendenhall — AI Integration & Process Automation Specialist"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Generated share-preview card (no static asset needed).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 36, color: "#7c83ff", letterSpacing: 6, textTransform: "uppercase" }}>
          Indianapolis, Indiana
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>James Mendenhall</div>
        <div style={{ fontSize: 44, color: "#a1a1aa", marginTop: 24 }}>
          AI Integration &amp; Process Automation Specialist
        </div>
        <div style={{ fontSize: 28, color: "#52525b", marginTop: 48 }}>jamesmendenhall.dev</div>
      </div>
    ),
    { ...size },
  )
}
