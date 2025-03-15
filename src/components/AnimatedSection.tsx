
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-right' | 'fade-in-left' | 'scale-up';
  delay?: number;
  threshold?: number;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wasIntersected = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !wasIntersected.current) {
            const target = entry.target as HTMLElement;
            
            // Add animation class after delay
            setTimeout(() => {
              target.classList.add(`animate-${animation}`);
              target.style.opacity = '1';
            }, delay);
            
            wasIntersected.current = true;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px',
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay, threshold]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("opacity-0", className)} 
      style={{ animationFillMode: 'forwards' }}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
