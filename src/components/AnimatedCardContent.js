import React from 'react'

export default function AnimatedCardContent({
  children,
  className = 'flex w-full h-full rounded-[20px] p-4 bg-background',
  style,
  }) {
  const contentStyle = {
    ...style,
    ...className && { className }
  }

  return (
    <div style={contentStyle}>
      {children}
    </div>
  )
}
