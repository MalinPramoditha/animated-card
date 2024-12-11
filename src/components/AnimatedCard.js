'use client'
import React, { useState, useEffect } from 'react'
import { cn } from '../utils'

export default function AnimatedCard({
  children, 
  colors = "#4B4D4D 0%, #4B4D4D 20%, #a21caf 40%,  #f59e0b 60%,#4B4D4D 80%, #4B4D4D 100%",
  speed = "10",
  initialAngle = "0deg",
  followMouse = false,
  className,
  style,
}) {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = `
      @property --angle {
        syntax: '<angle>';
        initial-value: ${initialAngle};
        inherits: false;
      }
      
      @keyframes gradient-rotate {
        0% {
          --angle: ${initialAngle};
        }
        100% {
          --angle: calc(${initialAngle} + 360deg);
        }
      }
    `;
    document.head.appendChild(styleSheet);
    return () => styleSheet.remove();
  }, [initialAngle]);

  const handleMouseMove = (e) => {
    if (!followMouse) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!followMouse) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!followMouse) return;
    setIsHovered(false);
    setMousePosition({ x: 50, y: 50 });
  };

  const getBackground = () => {
    if (followMouse && isHovered) {
      return `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors})`;
    }
    return `linear-gradient(var(--angle), ${colors})`;
  };

  const cardStyle = {
    ...style,
    background: getBackground(),
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    animation: (!isHovered || !followMouse) ? `gradient-rotate ${speed}s linear infinite` : 'none',
    transition: 'background 0.2s ease',
  };

  return (
    <div 
      style={cardStyle}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        // Default styles
        'flex w-full h-full p-2 rounded-[15px]',
        // User provided styles will override defaults
        className
      )}
    >
      {children}
    </div>
  )
}
