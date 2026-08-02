'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Trophy, Flame, ChevronRight, Play, MapPin, Zap, Activity } from 'lucide-react';

interface Hero3DProps {
  onOpenFixtureModal: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenFixtureModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Monitor the reduce-motion accessibility class on the document root
  useEffect(() => {
    const checkMotion = () => {
      const isClassActive = document.documentElement.classList.contains('reduce-motion');
      setReduceMotion(isClassActive);
    };

    checkMotion();

    const observer = new MutationObserver(checkMotion);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Mouse Parallax Calculation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Interpolated smooth transform values
  const tiltX = reduceMotion ? 0 : mousePos.y * -14; // degree
  const tiltY = reduceMotion ? 0 : mousePos.x * 14; // degree
  const translateTextX = reduceMotion ? 0 : mousePos.x * 20;
  const translateTextY = reduceMotion ? 0 : mousePos.y * 20;
  const translateBallX = reduceMotion ? 0 : mousePos.x * -35;
  const translateBallY = reduceMotion ? 0 : mousePos.y * -35;

  return (
    <section 
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F4F6F8] flex flex-col justify-between perspective-2000"
    >
      {/* Editorial Background Geometry (Asymmetric Vibrant Green Block) */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[62%] h-[85%] bg-[#28B838] editorial-clip-1 transition-transform duration-700 ease-out -z-0 opacity-95"
        style={{
          transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0px)`
        }}
      />

      {/* Decorative Diagonal Editorial Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0B2B6B08_1px,transparent_1px),linear-gradient(to_bottom,#0B2B6B08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main 3D Interactive Canvas */}
      <div 
        className="max-w-7xl mx-auto w-full relative z-10 transition-transform duration-200 ease-out transform-style-3d my-auto"
        style={{
          transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Massive Editorial Typography & Controls (7 Cols) */}
          <div 
            className="lg:col-span-7 space-y-6 transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${translateTextX}px, ${translateTextY}px, 40px)`
            }}
          >
            {/* Editorial Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#061A42] text-[#FFE600] font-bebas tracking-widest text-sm sm:text-base border border-[#FFE600]/30 shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] animate-ping" />
              <span>TEMPORADA OFICIAL 2026 • CANELONES, URUGUAY</span>
            </div>

            {/* Overlapping Asymmetric Headline */}
            <div className="relative">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold uppercase leading-[0.88] tracking-tight text-[#061A42] drop-shadow-sm">
                LIGA <br />
                <span className="text-[#0B2B6B] relative inline-block">
                  CANARIA
                  {/* Underline accent */}
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-[#FFE600] -rotate-1 -z-10" />
                </span> <br />
                <span className="text-[#28B838] bg-[#061A42] px-3 py-1 inline-block text-white rotate-1 shadow-2xl mt-1">
                  DE BASKET
                </span>
              </h1>
            </div>

            {/* Editorial Subtext */}
            <p className="text-base sm:text-xl font-medium text-[#061A42] max-w-xl leading-relaxed border-l-4 border-[#0B2B6B] pl-4 bg-white/70 backdrop-blur-sm p-3 rounded-r-2xl shadow-sm">
              El básquetbol canario reescrito con principios de diseño editorial moderno, dinamismo tridimensional y pasión departamental pura.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenFixtureModal}
                className="bg-[#FFE600] hover:bg-[#E6D000] text-[#061A42] font-bebas text-xl sm:text-2xl font-bold px-8 py-4 rounded-full border-3 border-[#061A42] shadow-[6px_6px_0px_#061A42] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center gap-3 cursor-pointer group pulse-yellow"
              >
                <span>EXPLORAR FIXTURE & TABLA</span>
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#clubes"
                className="bg-white hover:bg-[#0B2B6B] text-[#061A42] hover:text-white font-bebas text-xl sm:text-2xl font-bold px-7 py-4 rounded-full border-2 border-[#061A42] shadow-md transition-all flex items-center gap-2 group"
              >
                <Trophy className="w-5 h-5 text-[#28B838] group-hover:text-[#FFE600]" />
                <span>CLUBES EN 3D</span>
              </a>
            </div>

            {/* Quick Live Stats Pill */}
            <div className="grid grid-cols-3 gap-3 max-w-lg pt-4">
              <div className="bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0B2B6B] font-bebas">8</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Clubes Canarios</div>
              </div>
              <div className="bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#28B838] font-bebas">1.2K+</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Jugadores</div>
              </div>
              <div className="bg-white/90 p-3 rounded-2xl border border-gray-200 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#061A42] font-bebas">5</div>
                <div className="text-xs font-bold text-gray-600 uppercase">Sedes Regionales</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Parallax Graphic Composition (5 Cols) */}
          <div 
            className="lg:col-span-5 relative flex justify-center items-center h-[380px] sm:h-[480px] transition-transform duration-300 ease-out"
            style={{
              transform: `translate3d(${translateBallX}px, ${translateBallY}px, 70px)`
            }}
          >
            {/* 3D Basketball Graphic Composition with Shadow */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Retro Editorial Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#061A42] ring-4 ring-[#FFE600] opacity-80" />

              {/* Middle Retro Accent Badge */}
              <div className="absolute -inset-4 bg-[#0B2B6B] rounded-2xl shadow-[8px_8px_0px_#061A42] border-4 border-[#061A42] transform-style-3d" />

              {/* Central Official Logo Badge in Retro Style */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#0B2B6B] p-6 shadow-[8px_8px_0px_#061A42] border-4 border-[#061A42] flex flex-col items-center justify-center overflow-hidden group">
                <Image
                  src="/logo_liga_canaria.png"
                  alt="Liga Canaria de Basket"
                  width={260}
                  height={260}
                  className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />

                {/* Overlapping Floating Badge */}
                <div className="absolute inset-x-4 bottom-4 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border-2 border-[#061A42] text-center shadow-xl">
                  <span className="font-bebas text-lg sm:text-xl text-[#0B2B6B] font-bold block leading-none">
                    LIGA CANARIA DE BASKET
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#28B838] font-black uppercase tracking-wider">
                    TEMPORADA OFICIAL 2026
                  </span>
                </div>
              </div>

              {/* Floating Action Editorial Card (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-6 bg-[#FFE600] text-[#061A42] p-3 rounded-2xl border-2 border-[#061A42] shadow-[4px_4px_0px_#061A42] z-20 font-bebas tracking-wide text-sm font-bold rotate-6 animate-pulse">
                ⚡ EN VIVO • CLAUSURA
              </div>

              {/* Floating Match Card (Bottom Left) */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 bg-white text-[#061A42] p-3 rounded-2xl border-2 border-[#061A42] shadow-[4px_4px_0px_#061A42] z-20 -rotate-3 text-xs font-bold space-y-1">
                <div className="text-[10px] text-[#28B838] font-black uppercase">PRÓXIMO CLÁSICO</div>
                <div className="font-bebas text-lg text-[#0B2B6B] leading-none">
                  ALBION VS SAUCE
                </div>
                <div className="text-[11px] text-gray-600 font-semibold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#28B838]" /> Canelones Capital
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Live News Ticker Banner */}
      <div className="mt-12 relative z-10 w-full bg-[#061A42] text-white py-3 px-4 rounded-2xl border-2 border-[#FFE600] shadow-xl overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="bg-[#FFE600] text-[#061A42] font-bebas font-extrabold text-sm px-3 py-1 rounded-lg flex-shrink-0 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-[#061A42] animate-spin" />
            ÚLTIMA HORA LCB
          </div>

          {/* Scrolling Ticker Text */}
          <div className="overflow-hidden whitespace-nowrap w-full">
            <div className="inline-block animate-marquee font-medium text-sm sm:text-base tracking-wide space-x-8">
              <span className="text-[#FFE600] font-bold">🏀 ALBION 78 - 72 SAUCE</span> (Final Dramático)
              <span className="text-gray-400">•</span>
              <span className="text-white font-bold">PANDO CLASIFICA A PLAYOFFS</span> (Invicto de local)
              <span className="text-gray-400">•</span>
              <span className="text-[#32D643] font-bold">SALINAS SUB-21 CONSEGUIRÁ SU TERCER TRIUNFO SEGUIDO</span>
              <span className="text-gray-400">•</span>
              <span className="text-[#FFE600] font-bold">SEDES MUNICIPALES HABILITADAS PARA COPA CANELONES 2026</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
