'use client';

import { animate, inView, scroll, stagger } from "motion";
import React, { useEffect, useRef } from "react";

interface MotionExampleProps {
  title: string;
}

export default function MotionExample({ title }: MotionExampleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current || !headingRef.current || !itemsRef.current) return;
    
    // Animate the heading when component mounts
    animate(
      headingRef.current,
      { opacity: [0, 1], y: [20, 0] },
      { duration: 0.5 }
    );
    
    // Create staggered animation for items
    const items = Array.from(itemsRef.current.children);
    
    animate(
      items,
      { opacity: [0, 1], x: [-20, 0] },
      {
        duration: 0.3,
        delay: stagger(0.1)
      }
    );
    
    // Setup scroll-based animation
    inView(containerRef.current, () => {
      animate(
        containerRef.current,
        { scale: [0.95, 1] },
        { duration: 0.5 }
      );
      return () => {}; // Cleanup function
    });
    
    // Setup parallax effect
    // Simplified to avoid type errors
    scroll((info) => {
      if (!containerRef.current || !info) return;
      const scrollY = window.scrollY;
      const factor = scrollY * 0.05;
      containerRef.current.style.transform = `translateY(${factor}px)`;
    });
    
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="bg-ppc-purple/5 p-8 rounded-lg border border-ppc-purple/20 max-w-3xl mx-auto my-16"
    >
      <h2 
        ref={headingRef}
        className="text-3xl font-bold text-ppc-purple mb-6 text-center"
      >
        {title}
      </h2>
      
      <div 
        ref={itemsRef}
        className="space-y-4"
      >
        <div className="bg-white p-4 rounded-lg shadow-sm border border-ppc-purple/10">
          <p className="text-slate-600">The Motion library provides a simple and powerful way to add animations to your React components.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-ppc-purple/10">
          <p className="text-slate-600">It offers features like staggered animations, scroll-based effects, and automatic animations on element visibility.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-ppc-purple/10">
          <p className="text-slate-600">Unlike other animation libraries, Motion doesn't require special components or JSX syntax - it works directly with regular DOM elements.</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-ppc-purple/10">
          <p className="text-slate-600">This makes it extremely flexible and easy to integrate with existing codebases.</p>
        </div>
      </div>
    </div>
  );
} 