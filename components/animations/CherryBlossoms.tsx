"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

export default function CherryBlossoms() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animRef = useRef<number>(0);

  const createPetal = useCallback((canvas: HTMLCanvasElement): Petal => {
    return {
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 100,
      size: 4 + Math.random() * 6,
      speedX: -0.5 + Math.random() * 1,
      speedY: 0.5 + Math.random() * 1.5,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: -0.02 + Math.random() * 0.04,
      opacity: 0.3 + Math.random() * 0.5,
      wobble: 0,
      wobbleSpeed: 0.02 + Math.random() * 0.03,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Init petals
    for (let i = 0; i < 30; i++) {
      const p = createPetal(canvas);
      p.y = Math.random() * canvas.height;
      petalsRef.current.push(p);
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = "#FFB7C5";
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(p.size * 0.3, -p.size * 0.3, p.size * 0.5, p.size * 0.3, 0.8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petalsRef.current.forEach((p) => {
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
          Object.assign(p, createPetal(canvas));
        }
        drawPetal(p);
      });
      animRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [createPetal]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
