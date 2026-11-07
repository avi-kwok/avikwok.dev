import { Sparkle } from 'lucide-react'

// Twinkling gold sparkles for "shiny = new" items. spots: [{ top|bottom, left|right, size, delay }]
export function Sparkles({ spots }) {
  return spots.map(({ size = 12, delay = '0s', ...pos }, i) => (
    <Sparkle
      key={i}
      aria-hidden="true"
      className="sparkle"
      size={size}
      fill="currentColor"
      strokeWidth={1}
      style={{ ...pos, animationDelay: delay }}
    />
  ))
}
