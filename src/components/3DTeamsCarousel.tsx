'use client';

import React, { useState, useEffect } from 'react';
import { CLUBES_CANELONES, Club } from '../data/ligaData';
import { ChevronLeft, ChevronRight, Trophy, MapPin, Shield, Star, Award, Info, X } from 'lucide-react';

export const TeamsCarousel3D: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const totalClubs = CLUBES_CANELONES.length;

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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoRotate || reduceMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalClubs);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotate, totalClubs, reduceMotion]);

  const handlePrev = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev - 1 + totalClubs) % totalClubs);
  };

  const handleNext = () => {
    setIsAutoRotate(false);
    setActiveIndex((prev) => (prev + 1) % totalClubs);
  };

  return (
    <section id="clubes" className="py-24 bg-[#061A42] text-white relative overflow-hidden perspective-2000">
      
      {/* Background Decorative Asymmetric Blocks */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#28B838]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0B2B6B] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="editorial-tag mb-3">
              CARRUSEL TRIDIMENSIONAL DE CLUBES
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase text-white tracking-tight text-balance">
              LOS CLUBES DE <br />
              <span className="text-[#FFE600] underline decoration-[#28B838] underline-offset-8">
                CANELONES EN 3D
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`px-4 py-2 rounded-full text-xs font-bold font-bebas tracking-wider border transition-colors ${
                isAutoRotate 
                  ? 'bg-[#28B838] text-white border-[#28B838]' 
                  : 'bg-white/10 text-gray-300 border-white/20'
              }`}
            >
              {isAutoRotate ? '⚡ ROTACIÓN 3D AUTOMÁTICA' : 'PAUSADO'}
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3.5 rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-[#061A42] border border-white/20 transition-all cursor-pointer"
                aria-label="Anterior Club"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="p-3.5 rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-[#061A42] border border-white/20 transition-all cursor-pointer"
                aria-label="Siguiente Club"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Tilted Card Carousel Container */}
        <div className="relative h-[520px] sm:h-[580px] flex items-center justify-center transform-style-3d my-8">
          {CLUBES_CANELONES.map((club, index) => {
            // Calculate relative offset from active index
            let offset = index - activeIndex;
            if (offset < -Math.floor(totalClubs / 2)) offset += totalClubs;
            if (offset > Math.floor(totalClubs / 2)) offset -= totalClubs;

            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // 3D positioning transform
            const rotateY = reduceMotion ? 0 : offset * -28; // Degree of tilt
            const translateZ = reduceMotion ? 0 : (isCenter ? 120 : -absOffset * 180); // Depth Z
            const translateX = reduceMotion ? 0 : offset * (isSmallScreen ? 140 : 260); // X spread
            const opacity = isCenter ? 1 : (reduceMotion ? 0 : Math.max(0.2, 1 - absOffset * 0.35));
            const scale = isCenter ? 1.05 : (reduceMotion ? 1 : Math.max(0.7, 1 - absOffset * 0.15));

            return (
              <button
                key={club.id}
                type="button"
                onClick={() => {
                  if (isCenter) {
                    setSelectedClub(club);
                  } else {
                    setActiveIndex(index);
                    setIsAutoRotate(false);
                  }
                }}
                className="absolute w-[290px] sm:w-[360px] h-[460px] sm:h-[520px] rounded-3xl transition-[transform,opacity] duration-700 ease-out cursor-pointer transform-style-3d select-none group text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061A42]"
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: totalClubs - absOffset,
                }}
              >
                {/* Card Outer Structure with Editorial Border */}
                <div 
                  className={`w-full h-full rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden border-4 transition-[border-color,background-color,box-shadow] duration-300 shadow-2xl ${
                    isCenter 
                      ? 'border-[#FFE600] shadow-[10px_10px_0px_#061A42] bg-[#0B2B6B]' 
                      : 'border-white/20 bg-[#0B2B6B]/80 backdrop-blur-md shadow-lg'
                  }`}
                >
                  {/* Card Background Image with Dark Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={club.image} 
                      alt={club.name}
                      width={360}
                      height={520}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061A42] via-[#0B2B6B]/80 to-transparent" />
                  </div>

                  {/* Top Badge Symbol & Serie Badge */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-4xl sm:text-5xl drop-shadow-md">
                        {club.badgeSymbol}
                      </span>
                      <span className={`text-[11px] font-bold font-bebas px-2.5 py-0.5 rounded-full border shadow-sm ${
                        club.serie === 'SERIE A'
                          ? 'bg-[#FFE600] text-[#061A42] border-[#061A42]'
                          : 'bg-emerald-400 text-[#061A42] border-[#061A42]'
                      }`}>
                        {club.serie}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#FFE600] text-[#061A42] px-3 py-1 rounded-full font-bebas text-sm font-bold shadow-md">
                      <Trophy className="w-3.5 h-3.5 text-[#061A42]" />
                      <span>{club.championships} TÍTULOS</span>
                    </div>
                  </div>

                  {/* Middle Club Information */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <div className="text-xs font-bold text-[#28B838] uppercase tracking-widest font-bebas flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {club.city}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white leading-none group-hover:text-[#FFE600] transition-colors text-balance">
                      {club.name}
                    </h3>
                    <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed">
                      {club.description}
                    </p>
                  </div>

                  {/* Bottom Stats Grid & Callout */}
                  <div className="relative z-10 pt-4 border-t border-white/15 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-lg font-bold font-bebas text-[#FFE600]">{club.stats.pg}</div>
                      <div className="text-[10px] text-gray-300 uppercase">Ganas</div>
                    </div>
                    <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-lg font-bold font-bebas text-white">{club.stats.pp}</div>
                      <div className="text-[10px] text-gray-300 uppercase">Perd</div>
                    </div>
                    <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                      <div className="text-lg font-bold font-bebas text-[#28B838]">{club.stats.pts}</div>
                      <div className="text-[10px] text-gray-300 uppercase">Puntos</div>
                    </div>
                  </div>

                  {/* Center Card Click Hint */}
                  {isCenter && (
                    <div className="relative z-10 mt-3 text-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFE600] font-bebas tracking-wider underline">
                        <Info className="w-3.5 h-3.5" />
                        VER FICHA TÉCNICA DEL CLUB
                      </span>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {CLUBES_CANELONES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => {
                setActiveIndex(i);
                setIsAutoRotate(false);
              }}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                i === activeIndex ? 'w-10 bg-[#FFE600]' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Ir al club ${c.name}`}
            />
          ))}
        </div>

      </div>

      {/* Interactive Modal for Selected Club Details */}
      {selectedClub && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#0B2B6B] border-4 border-[#FFE600] rounded-3xl max-w-2xl w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-6">
            
            {/* Close Modal Button */}
            <button
              onClick={() => setSelectedClub(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-[#FFE600] hover:text-[#061A42] transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <span className="text-6xl">{selectedClub.badgeSymbol}</span>
              <div>
                <span className="text-xs font-bold text-[#FFE600] font-bebas tracking-widest uppercase">
                  FUNDADO EN {selectedClub.founded} • CANELONES
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-balance">
                  {selectedClub.name}
                </h3>
                <p className="text-sm text-gray-300 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#28B838]" />
                  {selectedClub.city}
                </p>
              </div>
            </div>

            {/* Club Description & Stadium */}
            <div className="space-y-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <p className="text-sm leading-relaxed text-gray-200">
                {selectedClub.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-[#061A42] p-3 rounded-xl">
                  <span className="text-gray-400 block uppercase">Estadio Oficial</span>
                  <span className="text-white font-bold text-sm">{selectedClub.stadium}</span>
                </div>
                <div className="bg-[#061A42] p-3 rounded-xl">
                  <span className="text-gray-400 block uppercase">Capitán del Equipo</span>
                  <span className="text-[#FFE600] font-bold text-sm">{selectedClub.captain}</span>
                </div>
              </div>
            </div>

            {/* Statistics Row */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="bg-[#28B838]/20 border border-[#28B838] p-3 rounded-2xl">
                <span className="text-2xl font-bold font-bebas text-[#32D643] block tabular-nums">
                  {selectedClub.stats.pg}
                </span>
                <span className="text-xs text-gray-300 font-bold uppercase">Partidos Ganados</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                <span className="text-2xl font-bold font-bebas text-white block tabular-nums">
                  {selectedClub.stats.pp}
                </span>
                <span className="text-xs text-gray-300 font-bold uppercase">Partidos Perdidos</span>
              </div>
              <div className="bg-[#FFE600]/20 border border-[#FFE600] p-3 rounded-2xl">
                <span className="text-2xl font-bold font-bebas text-[#FFE600] block tabular-nums">
                  {selectedClub.stats.pts}
                </span>
                <span className="text-xs text-gray-300 font-bold uppercase">Puntos en Tabla</span>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedClub(null)}
                className="bg-[#FFE600] text-[#061A42] font-bebas text-lg font-bold px-6 py-2.5 rounded-full hover:bg-white transition-colors"
              >
                CERRAR FICHA
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
