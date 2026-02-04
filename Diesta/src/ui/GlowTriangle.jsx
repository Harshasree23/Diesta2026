export default function GlowingTriangle() {
  return (
    <svg
      width="240"
      height="210"
      viewBox="0 0 240 210"
      className="relative"
    >
      {/* Background triangle */}
      <polygon
        points="120,10 10,200 230,200"
        fill="rgba(209, 206, 206, 0.6)"
      />

      {/* Animated golden border */}
      <polygon
        points="120,10 10,200 230,200"
        fill="none"
        stroke="gold"
        strokeWidth="3"
        strokeDasharray="680"  // perimeter of triangle
        strokeDashoffset="680"
        className="animate-dash"
      />
    </svg>
  )
}
