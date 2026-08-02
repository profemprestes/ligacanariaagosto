'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Newspaper, Bookmark, Camera, Clock, Award, Sparkles } from 'lucide-react';

interface EpicMoment {
  id: string;
  editionDate: string;
  headline: string;
  subheadline: string;
  category: string;
  author: string;
  image: string;
  quote: string;
  location: string;
}

const EPIC_MOMENTS: EpicMoment[] = [
  {
    id: 'moment-1',
    editionDate: '01 DE AGOSTO DE 2026 • EDICIÓN ESPECIAL N° 142',
    headline: 'EL TRIPLE EN EL ÚLTIMO SEGUNDO EN EL GIMNASIO DE SAUCE',
    subheadline: 'Un disparo agónico desde 8.5 metros desata la locura del público en el clásico canario.',
    category: 'MOMENTO ÉPICO LCB',
    author: 'Cronista Deportivo Canario',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop',
    quote: '"Escuché el sonido de la chicharra mientras el balón flotaba en el aire. Sabía que entraba desde que salió de mis manos."',
    location: 'Gimnasio Municipal de Sauce'
  },
  {
    id: 'moment-2',
    editionDate: '28 DE JULIO DE 2026 • EDICIÓN HISTÓRICA',
    headline: 'ALBION COLMA EL POLIDEPORTIVO EN UNA NOCHE MEMORABLE',
    subheadline: 'Más de 1.800 fanáticos colmaron las gradas en una demostración inédita de pertenencia departamental.',
    category: 'COBERTURA EN CANCHA',
    author: 'Redacción Periódico El Canario',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=1200&auto=format&fit=crop',
    quote: '"El básquetbol en Canelones no es solo un juego, es la identidad viva de nuestros pueblos y barrios."',
    location: 'Polideportivo Las Piedras'
  },
  {
    id: 'moment-3',
    editionDate: '22 DE JULIO DE 2026 • ARCHIVO DE ORO',
    headline: 'EL BLOQUEO GANADOR DE URUPAN PANDO EN EL CIGLIUTTI',
    subheadline: 'Una tapa monumental a 3 segundos del final sella el invicto como local del conjunto pandense.',
    category: 'JUGADA TÁCTICA',
    author: 'Observatorio Liga Canaria',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop',
    quote: '"Cerramos el carril central con disciplina militar. Esa última defensa valió la clasificación a playoffs."',
    location: 'Gimnasio Santiago A. Cigliutti, Pando'
  },
  {
    id: 'moment-4',
    editionDate: '15 DE JULIO DE 2026 • FORMATIVAS LCB',
    headline: 'SALINAS SUB-21 CONQUISTA LA COPA REGIONAL COSTERA',
    subheadline: 'La cantera dorada de la Costa de Oro levanta el trofeo invicta tras derrotar a Santa Lucía.',
    category: 'CAMPEONES REGIONALES',
    author: 'Especial Formativas LCB',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1200&auto=format&fit=crop',
    quote: '"Cinco años de trabajo continuo en Salinas dan sus frutos con esta generación inolvidable."',
    location: 'Polideportivo Costero Salinas'
  }
];

export const EpicMomentsNewspaperCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % EPIC_MOMENTS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const activeMoment = EPIC_MOMENTS[currentIndex];

  return (
    <section className="py-24 bg-[#EFECE6] text-[#1C1917] relative overflow-hidden border-y-4 border-[#061A42]">
      
      {/* Newspaper Paper Texture Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#1C1917_0.75px,transparent_0.75px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Newspaper Top Masthead Header */}
        <div className="border-b-4 border-double border-[#1C1917] pb-6 space-y-3 text-center">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-600 font-serif border-b border-stone-400 pb-2">
            <span>VOL. XXIV • CANELONES, URUGUAY</span>
            <span className="bg-[#FFE600] text-[#061A42] px-3 py-0.5 rounded font-bebas text-sm">
              EDICIÓN IMPRESA EDITORIAL LCB
            </span>
            <span>PRECIO: PASIÓN DE BARRIO</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="text-left hidden md:block w-48">
              <span className="text-xs font-bold text-stone-500 block uppercase">REGISTRO FOTOGRÁFICO</span>
              <span className="text-xs font-serif text-[#0B2B6B]">Momentos Épicos LCB</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#061A42] font-display">
              EL DIARIO DE LA LIGA
            </h2>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-3 py-1 rounded text-xs font-bebas tracking-wider border ${
                  isAutoPlay
                    ? 'bg-[#0B2B6B] text-white border-[#061A42]'
                    : 'bg-stone-200 text-stone-700 border-stone-400'
                }`}
              >
                {isAutoPlay ? '⚡ AUTO-GIRAR' : 'PAUSADO'}
              </button>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex((prev) => (prev - 1 + EPIC_MOMENTS.length) % EPIC_MOMENTS.length);
                  }}
                  className="p-2 rounded bg-stone-300 hover:bg-[#FFE600] hover:text-[#061A42] border border-stone-500 transition-colors cursor-pointer"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    setCurrentIndex((prev) => (prev + 1) % EPIC_MOMENTS.length);
                  }}
                  className="p-2 rounded bg-stone-300 hover:bg-[#FFE600] hover:text-[#061A42] border border-stone-500 transition-colors cursor-pointer"
                  aria-label="Página siguiente"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newspaper Main Story Layout Frame */}
        <div className="bg-[#F8F6F0] rounded-2xl border-4 border-[#1C1917] p-6 sm:p-10 shadow-[12px_12px_0px_#1C1917] relative space-y-8 animate-in fade-in">
          
          {/* Top Story Stamp & Date */}
          <div className="flex flex-wrap items-center justify-between border-b-2 border-stone-800 pb-4 text-xs font-extrabold uppercase font-serif text-stone-700 gap-2">
            <span className="flex items-center gap-1.5 text-[#28B838]">
              <Newspaper className="w-4 h-4 text-[#061A42]" />
              {activeMoment.category}
            </span>
            <span>{activeMoment.editionDate}</span>
            <span className="text-[#0B2B6B]">{activeMoment.location}</span>
          </div>

          {/* Main Article Headline */}
          <div className="space-y-3">
            <h3 className="font-serif text-3xl sm:text-5xl font-black uppercase text-[#061A42] leading-tight tracking-tight">
              {activeMoment.headline}
            </h3>
            <p className="text-base sm:text-lg font-serif italic text-stone-700 leading-relaxed border-l-4 border-[#FFE600] pl-4">
              {activeMoment.subheadline}
            </p>
          </div>

          {/* Grid Layout: Photo with Old Newsprint Filter (8 Cols) + Column Article Text (4 Cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Vintage Photo Container with Newspaper Halftone Effect */}
            <div className="lg:col-span-8 relative rounded-xl border-3 border-[#1C1917] overflow-hidden group shadow-lg bg-stone-900">
              
              {/* Image with Vintage Monochrome Sepia Filter Overlay */}
              <div className="relative h-[320px] sm:h-[440px] overflow-hidden grayscale contrast-125 sepia-[0.3]">
                <img
                  src={activeMoment.image}
                  alt={activeMoment.headline}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Newspaper Halftone Dot Shader Simulation */}
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px] opacity-25 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />
              </div>

              {/* Photo Caption Strip */}
              <div className="bg-[#1C1917] text-[#EFECE6] p-3 text-xs font-serif flex items-center justify-between border-t-2 border-[#1C1917]">
                <span className="italic">
                  FOTO OFICIAL LCB: {activeMoment.location}
                </span>
                <span className="font-bold text-[#FFE600] font-bebas text-sm">
                  EDICIÓN RECOLECTOR
                </span>
              </div>
            </div>

            {/* Editorial Newspaper Text Column (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 font-serif text-sm leading-relaxed text-stone-800">
              
              <div className="p-4 bg-[#EFECE6] rounded-xl border-2 border-stone-800 space-y-2">
                <span className="text-xs font-bold text-[#0B2B6B] block uppercase tracking-wider">
                  DECLARACIÓN DE CANCHA:
                </span>
                <p className="italic text-stone-900 font-semibold text-sm">
                  {activeMoment.quote}
                </p>
                <span className="text-xs font-extrabold text-stone-600 block text-right">
                  — Por {activeMoment.author}
                </span>
              </div>

              <div className="space-y-3 border-t border-stone-400 pt-4">
                <p className="first-letter:text-4xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:text-[#061A42] first-letter:font-serif">
                  La atmosfera vivida en este encuentro refleja la vigencia del básquetbol en el departamento de Canelones. Cada fecha consolida el compromiso de los planteles y el fervor incomparable de las hinchadas locales.
                </p>

                <p className="text-xs text-stone-600 border-l-2 border-stone-400 pl-3">
                  Documento histórico archivado en la hemeroteca oficial de la Liga Canaria de Basket 2026.
                </p>
              </div>

              {/* Page Indicator Dots */}
              <div className="pt-4 flex items-center justify-center gap-2">
                {EPIC_MOMENTS.map((m, idx) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      setIsAutoPlay(false);
                      setCurrentIndex(idx);
                    }}
                    className={`h-3 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex ? 'w-8 bg-[#061A42]' : 'w-3 bg-stone-400 hover:bg-stone-600'
                    }`}
                    aria-label={`Ver momento ${m.headline}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
