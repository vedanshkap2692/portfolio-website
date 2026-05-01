"use client";

import { useRef, useEffect } from "react";

export default function KatanaScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // ── Particles ──
    type Particle = { x: number; y: number; vx: number; vy: number; size: number; opacity: number; decay: number; color: string };
    const particles: Particle[] = [];
    const colors = ["rgba(139,0,0,", "rgba(197,163,85,", "rgba(220,180,100,", "rgba(180,20,40,"];

    const spawnParticles = (cx: number, cy: number, n = 6) => {
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 1.4;
        particles.push({
          x: cx, y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.6,
          size: 1.2 + Math.random() * 3.5,
          opacity: 0.5 + Math.random() * 0.4,
          decay: 0.007 + Math.random() * 0.009,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const spawnInterval = setInterval(() => {
      spawnParticles(
        W() * 0.5 + (Math.random() - 0.5) * W() * 0.7,
        H() * 0.5 + (Math.random() - 0.5) * H() * 0.7,
        4
      );
    }, 220);

    // ── Orbs ──
    type Orb = { x: number; y: number; bx: number; by: number; r: number; speed: number; phase: number; color: string };
    const orbs: Orb[] = Array.from({ length: 14 }, () => {
      const bx = W() * (0.1 + Math.random() * 0.8);
      const by = H() * (0.1 + Math.random() * 0.8);
      return {
        x: bx, y: by, bx, by,
        r: 3 + Math.random() * 9,
        speed: 0.003 + Math.random() * 0.005,
        phase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? "rgba(139,0,0," : "rgba(197,163,85,",
      };
    });

    // ── Gleam state ──
    let gleamX = -1;
    let gleamAlpha = 0;

    // ── Draw katana ──
    const drawKatana = (t: number, cx: number, cy: number) => {
      const sw = W(), sh = H();
      const len = Math.min(sw, sh) * 0.42;
      const angle = -Math.PI / 3.5 + Math.sin(t * 0.0008) * 0.07;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);

      // Shadow / depth glow
      ctx.shadowColor = "rgba(197,163,85,0.25)";
      ctx.shadowBlur = 18;

      // ── Blade ──
      const bx1 = -len, by1 = 0;
      const bx2 = len * 0.9, by2 = -2.5;
      const bx3 = len, by3 = 0;
      const bx4 = len * 0.9, by4 = 2.5;

      // Blade fill gradient
      const bladeGrad = ctx.createLinearGradient(bx1, 0, bx3, 0);
      bladeGrad.addColorStop(0, "rgba(80,80,90,0)");
      bladeGrad.addColorStop(0.2, "rgba(190,185,175,0.55)");
      bladeGrad.addColorStop(0.5, "rgba(215,210,200,0.75)");
      bladeGrad.addColorStop(0.85, "rgba(197,163,85,0.5)");
      bladeGrad.addColorStop(1, "rgba(197,163,85,0)");

      ctx.beginPath();
      ctx.moveTo(bx1, by1);
      ctx.lineTo(bx2, by2);
      ctx.lineTo(bx3, by3);
      ctx.lineTo(bx4, by4);
      ctx.closePath();
      ctx.fillStyle = bladeGrad;
      ctx.fill();

      // Sharp edge gleam line
      ctx.shadowColor = "rgba(255,250,230,0.8)";
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.moveTo(bx1 * 0.25, -0.6);
      ctx.lineTo(bx2 * 0.99, -0.6);
      ctx.strokeStyle = `rgba(255,252,230,${0.35 + Math.sin(t * 0.0025) * 0.2})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.shadowBlur = 0;

      // Traveling gleam
      if (gleamAlpha > 0) {
        const gx = gleamX;
        const gleamGrad = ctx.createLinearGradient(gx - 30, 0, gx + 30, 0);
        gleamGrad.addColorStop(0, "rgba(255,252,220,0)");
        gleamGrad.addColorStop(0.5, `rgba(255,252,220,${gleamAlpha})`);
        gleamGrad.addColorStop(1, "rgba(255,252,220,0)");
        ctx.beginPath();
        ctx.moveTo(gx - 30, -3);
        ctx.lineTo(gx + 30, -1);
        ctx.lineTo(gx + 30, 1);
        ctx.lineTo(gx - 30, 3);
        ctx.fillStyle = gleamGrad;
        ctx.fill();
        gleamX += 3.5;
        gleamAlpha -= 0.012;
      } else if (Math.random() < 0.003) {
        gleamX = bx1;
        gleamAlpha = 0.9;
      }

      // ── Tsuba (guard) ──
      ctx.shadowColor = "rgba(197,163,85,0.6)";
      ctx.shadowBlur = 10;
      const tsuba = new Path2D();
      tsuba.ellipse(-len * 0.12, 0, 7, 13, 0, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(197,163,85,0.75)";
      ctx.fill(tsuba);
      ctx.strokeStyle = "rgba(220,190,100,0.9)";
      ctx.lineWidth = 1.2;
      ctx.stroke(tsuba);
      // tsuba inner detail
      ctx.beginPath();
      ctx.arc(-len * 0.12, 0, 4, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,220,120,0.5)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      ctx.shadowBlur = 0;

      // ── Handle (tsuka) ──
      const hx = -len * 0.12 - 4;
      const hw = len * 0.28;
      const handleGrad = ctx.createLinearGradient(hx - hw, -5, hx - hw, 5);
      handleGrad.addColorStop(0, "rgba(100,10,10,0.8)");
      handleGrad.addColorStop(0.5, "rgba(60,5,5,0.9)");
      handleGrad.addColorStop(1, "rgba(100,10,10,0.8)");
      ctx.beginPath();
      ctx.roundRect(hx - hw, -4.5, hw, 9, 2);
      ctx.fillStyle = handleGrad;
      ctx.fill();

      // Handle wrap lines
      for (let i = 0; i < 6; i++) {
        const wx = hx - hw * 0.12 - i * (hw * 0.14);
        ctx.beginPath();
        ctx.moveTo(wx, -5);
        ctx.lineTo(wx - 4, 5);
        ctx.strokeStyle = "rgba(197,163,85,0.55)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ── Pommel ──
      ctx.shadowColor = "rgba(197,163,85,0.5)";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(hx - hw - 5, 0, 6, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(197,163,85,0.8)";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,220,100,0.9)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.restore();
    };

    // ── Floating kanji ──
    const kanjiList = [
      { char: "武", bx: 0.12, by: 0.18, size: 30, speed: 0.00035, amp: 12, phase: 0.0 },
      { char: "士", bx: 0.82, by: 0.25, size: 24, speed: 0.00045, amp: 9,  phase: 1.2 },
      { char: "道", bx: 0.08, by: 0.72, size: 26, speed: 0.0004,  amp: 11, phase: 2.4 },
      { char: "魂", bx: 0.88, by: 0.78, size: 22, speed: 0.0003,  amp: 10, phase: 3.6 },
      { char: "剣", bx: 0.5,  by: 0.08, size: 20, speed: 0.0006,  amp: 8,  phase: 4.8 },
      { char: "忍", bx: 0.75, by: 0.55, size: 18, speed: 0.00025, amp: 14, phase: 1.8 },
    ];

    // ── Grid lines ──
    const drawGrid = () => {
      const sw = W(), sh = H();
      ctx.save();
      ctx.strokeStyle = "rgba(139,0,0,0.04)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < sw; x += 40) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, sh); ctx.stroke();
      }
      for (let y = 0; y < sh; y += 40) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(sw, y); ctx.stroke();
      }
      ctx.restore();
    };

    let t = 0;
    let animId: number;

    const animate = () => {
      const sw = W(), sh = H();
      ctx.clearRect(0, 0, sw, sh);

      // Background
      const bgGrad = ctx.createRadialGradient(sw / 2, sh / 2, 0, sw / 2, sh / 2, Math.max(sw, sh) * 0.7);
      bgGrad.addColorStop(0, "rgba(20,8,8,1)");
      bgGrad.addColorStop(0.5, "rgba(10,5,10,1)");
      bgGrad.addColorStop(1, "rgba(5,5,10,1)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, sw, sh);

      // Grid
      drawGrid();

      // Vignette
      const vGrad = ctx.createRadialGradient(sw / 2, sh / 2, sh * 0.2, sw / 2, sh / 2, sh * 0.8);
      vGrad.addColorStop(0, "rgba(0,0,0,0)");
      vGrad.addColorStop(1, "rgba(0,0,0,0.55)");
      ctx.fillStyle = vGrad;
      ctx.fillRect(0, 0, sw, sh);

      // Red atmosphere pulse
      const atmoGrad = ctx.createRadialGradient(sw / 2, sh * 0.6, 0, sw / 2, sh * 0.6, sw * 0.5);
      atmoGrad.addColorStop(0, `rgba(139,0,0,${0.05 + Math.sin(t * 0.001) * 0.025})`);
      atmoGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = atmoGrad;
      ctx.fillRect(0, 0, sw, sh);

      // Orbs
      orbs.forEach((o) => {
        o.x = o.bx + Math.cos(t * o.speed + o.phase) * sw * 0.06;
        o.y = o.by + Math.sin(t * o.speed * 0.7 + o.phase) * sh * 0.06;
        const orbGrad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r * 2.5);
        orbGrad.addColorStop(0, o.color + "0.55)");
        orbGrad.addColorStop(0.5, o.color + "0.2)");
        orbGrad.addColorStop(1, o.color + "0)");
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = orbGrad;
        ctx.fill();
      });

      // Katana
      drawKatana(t, sw * 0.55, sh * 0.5);

      // Kanji
      kanjiList.forEach((k) => {
        const kx = k.bx * sw + Math.sin(t * k.speed) * k.amp;
        const ky = k.by * sh + Math.cos(t * k.speed * 0.7) * k.amp;
        const alpha = 0.1 + Math.sin(t * k.speed * 2 + k.phase) * 0.05;
        ctx.save();
        ctx.font = `${k.size}px 'Noto Serif JP', serif`;
        ctx.fillStyle = `rgba(197,163,85,${alpha})`;
        ctx.fillText(k.char, kx, ky);
        ctx.restore();
      });

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        p.vy += 0.018;
        p.vx *= 0.98;
        p.opacity -= p.decay;
        if (p.opacity <= 0) { particles.splice(i, 1); continue; }
        const pGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        pGrad.addColorStop(0, p.color + p.opacity + ")");
        pGrad.addColorStop(1, p.color + "0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = pGrad;
        ctx.fill();
      }

      t++;
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
