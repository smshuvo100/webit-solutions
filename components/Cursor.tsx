import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for mutable values to avoid re-renders during the animation loop
  const mouse = useRef({ x: -100, y: -100 }); 
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Check if device supports hover (basically non-touch devices)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    
    // Initial visibility check
    if (mediaQuery.matches) {
       // We only want to show the custom cursor when the mouse moves initially to avoid 0,0 glitch
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Move dot immediately for responsiveness
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      
      // Check for hover targets using delegation/closest
      const target = e.target as HTMLElement;
      // Heuristic: Check for standard interactive tags or specific classes
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"]') || 
                            target.closest('a, button, input, textarea, select, [role="button"]') ||
                            target.closest('.group');
                            
      setIsHovering(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop for smooth trailing ring
    let rafId: number;
    const animate = () => {
      // Linear interpolation (Lerp) for smooth trailing
      // lerp factor 0.15 = 15% of the distance per frame
      const factor = 0.15; 
      
      ring.current.x += (mouse.current.x - ring.current.x) * factor;
      ring.current.y += (mouse.current.y - ring.current.y) * factor;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <div className={`hidden lg:block pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Central Dot - Electric Blue */}
      <div 
        ref={dotRef}
        className="absolute top-0 left-0 w-2 h-2 bg-brand-500 rounded-full -mt-1 -ml-1 will-change-transform shadow-[0_0_10px_rgba(59,130,246,0.8)]"
      />
      
      {/* Trailing Ring - Interactive State */}
      <div 
        ref={ringRef}
        className={`absolute top-0 left-0 rounded-full border border-brand-500 transition-all duration-300 ease-out will-change-transform flex items-center justify-center
          ${isHovering 
            ? 'w-16 h-16 -mt-8 -ml-8 border-opacity-30 bg-brand-500/10 backdrop-blur-[1px]' 
            : 'w-8 h-8 -mt-4 -ml-4 border-opacity-40'}
          ${isClicking ? 'scale-75 bg-brand-500/20' : 'scale-100'}
        `}
      />
    </div>
  );
};

export default Cursor;