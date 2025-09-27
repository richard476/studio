
"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface Star {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
}

export const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    const numStars = 400;
    const connectionDistance = 100;

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: 0, // not used for 2D effect
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const starColor = theme === 'dark' || theme === 'system' ? 'hsla(210, 90%, 60%, 0.8)' : 'hsla(220, 20%, 20%, 0.8)';
      
      ctx.save();
      
      stars.forEach(star => {
        // Move star
        star.x += star.vx;
        star.y += star.vy;

        // Bounce off edges
        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // Draw star
        ctx.fillStyle = starColor;
        ctx.beginPath();
        ctx.arc(star.x, star.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
      });

      // Draw lines
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dist = Math.sqrt(Math.pow(stars[i].x - stars[j].x, 2) + Math.pow(stars[i].y - stars[j].y, 2));
          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            const opacity = 1 - (dist / connectionDistance);
            ctx.strokeStyle = theme === 'dark' || theme === 'system' ? `hsla(210, 90%, 50%, ${opacity * 0.3})` : `hsla(220, 20%, 20%, ${opacity * 0.3})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-70" />;
};
