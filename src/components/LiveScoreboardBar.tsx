'use client';

import React, { useState, useEffect } from 'react';
import { Activity, Radio, ChevronRight, ChevronLeft, Volume2, VolumeX, Flame } from 'lucide-react';

interface LiveMatch {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  period: string;
  timeRemaining: string;
  venue: string;
  category: string;
  status: 'EN VIVO' | 'PRÓXIMO' | 'FINAL';
  lastPlay?: string;
}

const INITIAL_LIVE_MATCHES: LiveMatch[] = [
  {
    id: 'live-1',
    homeTeam: 'Club Albion',
    awayTeam: 'C.A. Sauce',
    homeScore: 68,
    awayScore: 65,
    period: '4TO CUARTO',
    timeRemaining: '02:45',
    venue: 'Gimnasio Albion',
    category: 'Primera División',
    status: 'EN VIVO',
    lastPlay: 'Triple convertido por G. Fernández (Albion)'
  },
  {
    id: 'live-2',
    homeTeam: 'Pando Basket',
    awayTeam: 'Juventud Las Piedras',
    homeScore: 82,
    awayScore: 79,
    period: 'FINAL',
    timeRemaining: '00:00',
    venue: 'Gimnasio Santiago Cigliutti',
    category: 'Primera División',
    status: 'FINAL',
    lastPlay: 'Doble en el segundo final de M. Rodríguez'
  },
  {
    id: 'live-3',
    homeTeam: 'Salinas Basket',
    awayTeam: 'Santa Lucía B.C.',
    homeScore: 48,
    awayScore: 42,
    period: '3ER CUARTO',
    timeRemaining: '06:18',
    venue: 'Polideportivo Salinas',
    category: 'Formativa Sub-21',
    status: 'EN VIVO',
    lastPlay: 'Tiro libre anotado por L. Pereyra (Salinas)'
  },
  {
    id: 'live-4',
    homeTeam: 'Atlético Tala',
    awayTeam: 'Canelones Capital',
    homeScore: 0,
    awayScore: 0,
    period: '20:30 HS',
    timeRemaining: 'HOY',
    venue: 'Gimnasio Abierto Tala',
    category: 'Primera División',
    status: 'PRÓXIMO',
    lastPlay: 'Calentamiento previo en cancha'
  }
];

export const LiveScoreboardBar: React.FC = () => {
  const [matches, setMatches] = useState<LiveMatch[]>(INITIAL_LIVE_MATCHES);
  const [activeMatchIndex, setActiveMatchIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasPulse, setHasPulse] = useState(false);

  // Live score simulation loop to give real-time feel
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      setMatches((prevMatches) => {
        return prevMatches.map((m) => {
          if (m.status !== 'EN VIVO') return m;

          // Randomly add 2 or 3 points to one of the teams
          const randomTeam = Math.random() > 0.5 ? 'home' : 'away';
          const pointsToAdd = Math.random() > 0.6 ? 3 : 2;

          const updatedHome = randomTeam === 'home' ? m.homeScore + pointsToAdd : m.homeScore;
          const updatedAway = randomTeam === 'away' ? m.awayScore + pointsToAdd : m.awayScore;

          // Pulse animation on score update
          setHasPulse(true);
          setTimeout(() => setHasPulse(false), 800);

          return {
            ...m,
            homeScore: updatedHome,
            awayScore: updatedAway,
            lastPlay:
              randomTeam === 'home'
                ? `¡Puntos anotados por ${m.homeTeam}! (+${pointsToAdd})`
                : `¡Puntos anotados por ${m.awayTeam}! (+${pointsToAdd})`,
          };
        });
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [isSimulating]);

  const activeMatch = matches[activeMatchIndex];

  return (
    <div className="sticky top-[72px] sm:top-[80px] z-40 bg-[#061A42] text-white border-y-2 border-[#FFE600] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        
        {/* Left Badge: Live Status & Simulation Switch */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start border-b md:border-b-0 border-white/10 pb-2 md:pb-0">
          <div className="flex items-center gap-2 bg-[#28B838] text-white font-bebas text-sm sm:text-base px-3 py-1 rounded-full border border-white/20 shadow-sm flex-shrink-0">
            <Radio className="w-4 h-4 text-[#FFE600] animate-pulse" />
            <span>TABLERO EN VIVO LCB</span>
          </div>

          <button
            onClick={() => setIsSimulating(!isSimulating)}
            className={`px-2.5 py-1 rounded-full text-[11px] font-bebas tracking-wide border transition-all ${
              isSimulating
                ? 'bg-[#FFE600] text-[#061A42] font-bold border-[#061A42]'
                : 'bg-white/10 text-gray-300 border-white/20'
            }`}
          >
            {isSimulating ? '⚡ MODO EN DIRECTO' : 'PAUSADO'}
          </button>
        </div>

        {/* Center Active Match Score Banner */}
        <div className="flex items-center justify-center gap-3 w-full md:w-auto my-1 md:my-0">
          <button
            onClick={() => setActiveMatchIndex((prev) => (prev - 1 + matches.length) % matches.length)}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Partido anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className={`bg-[#0B2B6B] px-4 py-1.5 rounded-2xl border border-white/20 flex items-center gap-4 transition-transform duration-300 ${hasPulse ? 'scale-105 border-[#FFE600]' : ''}`}>
            
            {/* Home Team */}
            <div className="text-right">
              <span className="font-display font-extrabold text-sm sm:text-base uppercase text-white block leading-tight">
                {activeMatch.homeTeam}
              </span>
              <span className="text-[10px] text-gray-300 block font-bebas">LOCAL</span>
            </div>

            {/* Score */}
            <div className="bg-[#061A42] px-3 py-1 rounded-xl border border-[#FFE600] text-center min-w-[80px]">
              <div className="font-bebas text-xl sm:text-2xl font-bold text-[#FFE600] leading-none">
                {activeMatch.status === 'PRÓXIMO' ? 'VS' : `${activeMatch.homeScore} - ${activeMatch.awayScore}`}
              </div>
              <div className="text-[9px] text-[#28B838] font-bold font-bebas tracking-wider uppercase mt-0.5">
                {activeMatch.period}
              </div>
            </div>

            {/* Away Team */}
            <div className="text-left">
              <span className="font-display font-extrabold text-sm sm:text-base uppercase text-white block leading-tight">
                {activeMatch.awayTeam}
              </span>
              <span className="text-[10px] text-gray-300 block font-bebas">VISITANTE</span>
            </div>

          </div>

          <button
            onClick={() => setActiveMatchIndex((prev) => (prev + 1) % matches.length)}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Siguiente partido"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Right Info & Last Play Ticker */}
        <div className="hidden lg:flex items-center gap-3 text-xs text-gray-300">
          <div className="bg-white/5 px-3 py-1 rounded-xl border border-white/10 max-w-xs truncate">
            <span className="text-[#28B838] font-bold font-bebas uppercase mr-1.5">Última jugada:</span>
            <span>{activeMatch.lastPlay}</span>
          </div>

          <div className="bg-[#FFE600] text-[#061A42] font-bebas px-2.5 py-1 rounded-lg font-bold text-xs">
            {activeMatch.category}
          </div>
        </div>

      </div>
    </div>
  );
};
