"use client"

export default function Preloader() {
  return (
    <div className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl floating" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl floating"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Text */}
        <div className="preloader-text text-center">
          <h1 className="text-5xl md:text-6xl font-bold glow-cyan mb-2">MAJD Zarai</h1>
          <p className="text-sm md:text-base text-muted-foreground tracking-widest">AI ENGINEER • Data Scientist</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-card/50 rounded-full overflow-hidden border border-primary/20 backdrop-blur-sm">
          <div className="progress-bar w-0 h-full bg-gradient-to-r from-primary to-secondary rounded-full" />
        </div>

        <p className="text-xs text-muted-foreground tracking-widest">Loading Experience</p>
      </div>
    </div>
  )
}
