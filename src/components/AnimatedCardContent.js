import React from 'react'

export default function AnimatedCardContent({
  children,
  className,
  }) {
  return (
    <div className={`flex bg-background p-4 rounded-[16px] w-full h-full ${className}`}>
      {children}
    </div>
  )
}
