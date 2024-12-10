import React from 'react'
import { cn } from '../utils'

export default function AnimatedCardContent({
  children,
  className,
  style,
}) {
  return (
    <div 
      style={style} 
      className={cn(className, 'flex w-full h-full p-2 rounded-[12px] bg-background')}
    >
      {children}
    </div>
  )
}
