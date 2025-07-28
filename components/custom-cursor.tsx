"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'product', 'loading'

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    }
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input') || target.closest('[data-interactive="true"]')) {
      setCursorType('pointer');
    } else if (target.closest('[data-product="true"]')) {
      setCursorType('product');
    } else {
      setCursorType('default');
    }
  }, []);

  const onMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('button') && !target.closest('a') && !target.closest('input') && !target.closest('[data-interactive="true"]') && !target.closest('[data-product="true"]')) {
      setCursorType('default');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, [onMouseMove, onMouseOver, onMouseOut]);

  // Hide cursor on touch devices only
  if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor fixed z-50 pointer-events-none transition-all duration-150 ease-out transform -translate-x-1/2 -translate-y-1/2
        ${cursorType === 'default' ? 'w-6 h-6 border-2 border-orange-400 rounded-full opacity-80' : ''}
        ${cursorType === 'pointer' ? 'w-10 h-10 bg-orange-400 rounded-full opacity-70 blur-sm' : ''}
        ${cursorType === 'product' ? 'w-16 h-16 bg-teal-400 border-2 border-teal-600 rounded-full opacity-90 blur-sm shadow-lg' : ''}
        ${cursorType === 'loading' ? 'w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin' : ''}
      `}
      style={{ willChange: 'transform' }}
    />
  );
}
