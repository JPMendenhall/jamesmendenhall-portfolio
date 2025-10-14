export function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 pt-16 pb-4">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-950 opacity-50" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1
          className="text-xl md:text-2xl tracking-tight mb-4 text-balance text-white"
          style={{
            fontFamily: "var(--font-press-start)",
          }}
        >
          jamesMendenhall.dev
          <span className="animate-blink">|</span>
        </h1>

        {/* Tagline */}
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-2 leading-relaxed text-balance">
          Compliance + AI Integration Specialist building intelligent enterprise systems
        </p>
      </div>
    </section>
  )
}