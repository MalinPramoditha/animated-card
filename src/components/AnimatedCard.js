'use client'
import React, { useState } from 'react'

export default function AnimatedCard({
  children, 
  colors = "#4B4D4D 0%, #4B4D4D 20%, #a21caf 40%,  #f59e0b 60%,#4B4D4D 80%, #4B4D4D 100%",
  speed = "10",
  initialAngle = "0deg",
  followMouse = false,
  className,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  const style = {
    background: followMouse 
      ? (isHovered 
          ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors})`
          : `linear-gradient(var(--angle), ${colors})`)
      : `linear-gradient(var(--angle), ${colors})`,
    '--rotation-speed': `${speed}s`,
    '--initial-angle': initialAngle,
    '--angle': initialAngle,
    transition: 'background 0.2s ease',
  }

  return (
    <div 
      style={style} 
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`
        flex w-full h-full rounded-[20px] p-4 
        ${!isHovered || !followMouse ? 'animate-gradient-rotate' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  )
}
