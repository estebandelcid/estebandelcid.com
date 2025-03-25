"use client"

interface AnimatedDividerProps {
  className?: string
  speed?: "slow" | "medium" | "fast"
  colors?: string[]
}

export function AnimatedDivider({
  className = "",
  speed = "fast",
  colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f43f5e"],
}: AnimatedDividerProps) {
  // Calculate animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case "slow":
        return "10s"
      case "fast":
        return "3s"
      default:
        return "6s"
    }
  }

  return (
    <div
      className={`w-full h-[1px] relative overflow-hidden rounded-full opacity-40 my-20 ${className}`}
      style={{
        background: `linear-gradient(90deg, ${colors.join(", ")})`,
        backgroundSize: "200% 100%",
        animation: `gradientMove ${getDuration()} linear infinite`,
      }}
    >
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
      `}</style>
    </div>
  )
}

