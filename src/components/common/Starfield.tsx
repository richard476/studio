
"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: { x: number; y: number; z: number; }[] = [];
    const numStars = 1200;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * canvas.width,
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const starColor = theme === 'dark' || theme === 'system' ? '#FFFFFF' : '#000000';
      
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      stars.forEach(star => {
        star.z -= 2;
        if (star.z <= 0) {
          star.x = (Math.random() * canvas.width) - (canvas.width / 2);
          star.y = (Math.random() * canvas.height) - (canvas.height / 2);
          star.z = canvas.width;
        }

        const k = 128 / star.z;
        const px = star.x * k;
        const py = star.y * k;
        
        const size = (1 - star.z / canvas.width) * 4;
        const r = Math.max(0.1, size);
        
        const opacity = (1 - star.z / canvas.width) * 0.8;
        ctx.fillStyle = `rgba(${theme === 'dark' ? '255,255,255' : '0,0,0'}, ${opacity})`;

        ctx.beginPath();
        ctx.arc(px, py, r, 0, 2 * Math.PI);
        ctx.fill();
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(draw);
    };

    let animationFrameId: number;
    setup();
    draw();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      setup();
      draw();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-50" />;
};
