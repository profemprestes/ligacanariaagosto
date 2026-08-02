'use client';

import React, { useState } from 'react';
import { Trophy, Award, Flame, Filter, Search, Zap, Star, Shield, ChevronRight, Activity, Eye } from 'lucide-react';
import { CLUBES_CANELONES } from '../data/ligaData';

export interface PlayerLeader {
  id: string;
  name: string;
  nickname: string;
  clubId: string;
  clubName: string;
  jerseyNumber: number;
  position: 'Base' | 'Escolta' | 'Alero' | 'Ala-Pívot' | 'Pívot';
  height: string;
  age: number;
  image: string;
  cardType: 'GOLD' | 'SILVER' | 'BRONZE' | 'REGULAR';
  stats: {
    pointsPerGame: number;
    reboundsPerGame: number;
    assistsPerGame: number;
    efficiency: number;
    gamesPlayed: number;
    fieldGoalPct: number;
  };
  highlightQuote: string;
}

const PLAYER_LEADERS: PlayerLeader[] = [
  {
    id: 'p1',
    name: 'Gonzalo Fernández',
    nickname: 'El Canario',
    clubId: 'albion',
    clubName: 'Club Albion',
    jerseyNumber: 10,
    position: 'Escolta',
    height: '1.92 m',
    age: 26,
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    cardType: 'GOLD',
    stats: {
      pointsPerGame: 24.8,
      reboundsPerGame: 6.2,
      assistsPerGame: 5.4,
      efficiency: 28.5,
      gamesPlayed: 13,
      fieldGoalPct: 52.4,
    },
    highlightQuote: 'Máximo anotador de la temporada con 322 puntos totales.'
  },
  {
    id: 'p2',
    name: 'Matías Rodríguez',
    nickname: 'Mati',
    clubId: 'pando',
    clubName: 'Urupan / Pando',
    jerseyNumber: 7,
    position: 'Base',
    height: '1.85 m',
    age: 28,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    cardType: 'GOLD',
    stats: {
      pointsPerGame: 19.5,
      reboundsPerGame: 4.8,
      assistsPerGame: 9.8,
      efficiency: 27.2,
      gamesPlayed: 13,
      fieldGoalPct: 48.9,
    },
    highlightQuote: 'Líder absoluto en asistencias con casi 10 pases gol por partido.'
  },
  {
    id: 'p3',
    name: 'Facundo Silva',
    nickname: 'Rayo',
    clubId: 'sauce',
    clubName: 'C.A. Sauce',
    jerseyNumber: 15,
    position: 'Ala-Pívot',
    height: '2.01 m',
    age: 29,
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?q=80&w=800&auto=format&fit=crop',
    cardType: 'GOLD',
    stats: {
      pointsPerGame: 18.2,
      reboundsPerGame: 12.4,
      assistsPerGame: 2.8,
      efficiency: 26.8,
      gamesPlayed: 13,
      fieldGoalPct: 56.1,
    },
    highlightQuote: 'Dominador del cristal con 12.4 rebotes por encuentro.'
  },
  {
    id: 'p4',
    name: 'Lucas Pereyra',
    nickname: 'Costero',
    clubId: 'salinas',
    clubName: 'Salinas Basket',
    jerseyNumber: 23,
    position: 'Alero',
    height: '1.96 m',
    age: 24,
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
    cardType: 'SILVER',
    stats: {
      pointsPerGame: 21.4,
      reboundsPerGame: 7.1,
      assistsPerGame: 4.2,
      efficiency: 23.1,
      gamesPlayed: 12,
      fieldGoalPct: 47.8,
    },
    highlightQuote: 'Referente ofensivo de la Costa de Oro con 41% en triples.'
  },
  {
    id: 'p5',
    name: 'Bruno Rossi',
    nickname: 'El Mago',
    clubId: 'laspiedras',
    clubName: 'Juventud Las Piedras',
    jerseyNumber: 5,
    position: 'Base',
    height: '1.83 m',
    age: 27,
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
    cardType: 'SILVER',
    stats: {
      pointsPerGame: 17.8,
      reboundsPerGame: 3.9,
      assistsPerGame: 8.5,
      efficiency: 22.4,
      gamesPlayed: 13,
      fieldGoalPct: 45.2,
    },
    highlightQuote: 'Visión de juego privilegiada y especialista en clutch.'
  },
  {
    id: 'p6',
    name: 'Santiago Morales',
    nickname: 'Chino',
    clubId: 'santalucia',
    clubName: 'Santa Lucía B.C.',
    jerseyNumber: 33,
    position: 'Pívot',
    height: '2.06 m',
    age: 31,
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop',
    cardType: 'SILVER',
    stats: {
      pointsPerGame: 14.6,
      reboundsPerGame: 11.2,
      assistsPerGame: 1.9,
      efficiency: 21.8,
      gamesPlayed: 13,
      fieldGoalPct: 58.7,
    },
    highlightQuote: 'Muralla defensiva con 2.4 tapones por partido.'
  },
  {
    id: 'p7',
    name: 'Diego Cabrera',
    nickname: 'Tala',
    clubId: 'tala',
    clubName: 'Atlético Tala',
    jerseyNumber: 12,
    position: 'Alero',
    height: '1.94 m',
    age: 25,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop',
    cardType: 'BRONZE',
    stats: {
      pointsPerGame: 18.9,
      reboundsPerGame: 8.4,
      assistsPerGame: 3.1,
      efficiency: 20.6,
      gamesPlayed: 13,
      fieldGoalPct: 49.3,
    },
    highlightQuote: 'Intensidad física imparable atacando la pintura.'
  },
  {
    id: 'p8',
    name: 'Joaquín Olivera',
    nickname: 'El Titán',
    clubId: 'albion',
    clubName: 'Club Albion',
    jerseyNumber: 21,
    position: 'Pívot',
    height: '2.04 m',
    age: 28,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    cardType: 'BRONZE',
    stats: {
      pointsPerGame: 13.5,
      reboundsPerGame: 10.8,
      assistsPerGame: 2.2,
      efficiency: 19.8,
      gamesPlayed: 13,
      fieldGoalPct: 54.9,
    },
    highlightQuote: 'Especialista en rebotes ofensivos y segundas oportunidades.'
  }
];

export const LeaderboardSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ANOTADORES' | 'REBOTES' | 'ASISTENCIAS' | 'EFICIENCIA'>('ANOTADORES');
  const [selectedClub, setSelectedClub] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalPlayer, setModalPlayer] = useState<PlayerLeader | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Monitor the reduce-motion accessibility class on the document root
  React.useEffect(() => {
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

  // Sort players according to category
  const getSortedPlayers = () => {
    return [...PLAYER_LEADERS].sort((a, b) => {
      if (selectedCategory === 'ANOTADORES') return b.stats.pointsPerGame - a.stats.pointsPerGame;
      if (selectedCategory === 'REBOTES') return b.stats.reboundsPerGame - a.stats.reboundsPerGame;
      if (selectedCategory === 'ASISTENCIAS') return b.stats.assistsPerGame - a.stats.assistsPerGame;
      return b.stats.efficiency - a.stats.efficiency;
    });
  };

  const filteredPlayers = getSortedPlayers().filter((player) => {
    const matchesClub = selectedClub === 'ALL' || player.clubId === selectedClub;
    const matchesSearch =
      player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.nickname.toLowerCase().includes(searchQuery.toLowerCase()) ||
      player.clubName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClub && matchesSearch;
  });

  const getStatValue = (player: PlayerLeader) => {
    if (selectedCategory === 'ANOTADORES') return `${player.stats.pointsPerGame} PTS`;
    if (selectedCategory === 'REBOTES') return `${player.stats.reboundsPerGame} REB`;
    if (selectedCategory === 'ASISTENCIAS') return `${player.stats.assistsPerGame} AST`;
    return `${player.stats.efficiency} EFF`;
  };

  const getStatLabel = () => {
    if (selectedCategory === 'ANOTADORES') return 'PROMEDIO PUNTOS / PJ';
    if (selectedCategory === 'REBOTES') return 'PROMEDIO REBOTES / PJ';
    if (selectedCategory === 'ASISTENCIAS') return 'PROMEDIO ASISTENCIAS / PJ';
    return 'VALORACIÓN DE EFICIENCIA';
  };

  return (
    <section id="estadisticas" className="py-24 bg-[#061A42] text-white relative overflow-hidden border-y-4 border-[#0B2B6B]">
      
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFE600_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#28B838]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B2B6B]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#28B838] text-white font-bebas px-4 py-1.5 rounded-full text-sm border border-white/20 shadow-md">
            <Trophy className="w-4 h-4 text-[#FFE600]" />
            <span>CROMOS DE COLECCIÓN LCB 2026</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight font-display text-balance">
            LÍDERES Y FIGURAS DE LA LIGA
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-sans">
            Explora las estadísticas oficiales de los máximos exponentes del básquetbol canario presentados en formato cromo retro de colección.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0B2B6B] border-2 border-white/10 p-4 sm:p-6 rounded-3xl shadow-2xl space-y-4">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Tab Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
              {[
                { id: 'ANOTADORES', label: '🔥 ANOTADORES (PPG)', icon: Flame },
                { id: 'REBOTES', label: '🛡️ REBOTES (RPG)', icon: Shield },
                { id: 'ASISTENCIAS', label: '⚡ ASISTENCIAS (APG)', icon: Zap },
                { id: 'EFICIENCIA', label: '⭐ EFICIENCIA (EFF)', icon: Star },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-4 py-2 rounded-xl font-bebas text-xs sm:text-sm tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? 'bg-[#FFE600] text-[#061A42] font-extrabold shadow-lg scale-105'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Club Filter Selector & Search */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              
              {/* Club Dropdown Filter */}
              <div className="relative w-full sm:w-56">
                <Filter className="w-4 h-4 text-[#FFE600] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedClub}
                  onChange={(e) => setSelectedClub(e.target.value)}
                  aria-label="Filtrar líderes por club"
                  className="w-full bg-[#061A42] border border-white/20 text-white pl-9 pr-8 py-2 rounded-xl text-xs font-bebas tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600] cursor-pointer appearance-none"
                >
                  <option value="ALL">🏀 TODOS LOS CLUBES</option>
                  {CLUBES_CANELONES.map((club) => (
                    <option key={club.id} value={club.id}>
                      {club.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-60">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  name="search_player"
                  autoComplete="off"
                  aria-label="Buscar jugador por nombre"
                  placeholder="Buscar jugador… (ej. Fernández)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#061A42] border border-white/20 text-white placeholder-gray-400 pl-9 pr-4 py-2 rounded-xl text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFE600]"
                />
              </div>

            </div>

          </div>

          <div className="text-center sm:text-left text-xs font-bebas tracking-wider text-[#28B838]">
            ORDENADO POR: <span className="text-[#FFE600]">{getStatLabel()}</span> • {filteredPlayers.length} CROMOS ENCONTRADOS
          </div>

        </div>

        {/* Collectible Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPlayers.map((player, index) => {
            const rank = index + 1;
            const isTop3 = rank <= 3;

            return (
              <button
                key={player.id}
                type="button"
                onClick={() => setModalPlayer(player)}
                className={`group relative cursor-pointer perspective-1000 text-left focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFE600] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B2B6B] rounded-2xl w-full ${
                  reduceMotion ? '' : 'transition-transform duration-300 hover:-translate-y-2'
                }`}
              >
                {/* Collectible Trading Card Frame - Retro Matte cardboard look */}
                <div className={`relative rounded-2xl p-4 border-3 border-[#061A42] shadow-[6px_6px_0px_#061A42] ${
                  player.cardType === 'GOLD'
                    ? 'bg-[#FFE600]'
                    : player.cardType === 'SILVER'
                    ? 'bg-[#E2E8F0]'
                    : 'bg-[#D97706]'
                }`}>
                  
                  {/* Card Inner Screen */}
                  <div className="bg-[#061A42] rounded-xl p-3 border-2 border-white/20 space-y-3 relative overflow-hidden">

                    {/* Top Card Badge: Rank Number & Jersey # */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bebas text-xs font-extrabold ${
                        rank === 1
                          ? 'bg-[#FFE600] text-[#061A42]'
                          : rank === 2
                          ? 'bg-slate-200 text-[#061A42]'
                          : rank === 3
                          ? 'bg-amber-600 text-white'
                          : 'bg-white/10 text-gray-300'
                      }`}>
                        {isTop3 && <Trophy className="w-3.5 h-3.5" />}
                        <span>CROMO #{rank}</span>
                      </div>

                      <div className="bg-[#0B2B6B] text-[#FFE600] font-bebas text-sm font-extrabold px-2 py-0.5 rounded-md border border-[#FFE600]/40">
                        N° {player.jerseyNumber}
                      </div>
                    </div>

                    {/* Player Image Photo Area */}
                    <div className="relative h-48 sm:h-52 rounded-lg overflow-hidden border-2 border-white/20 bg-slate-900 group-hover:border-[#FFE600] transition-colors">
                      <img
                        src={player.image}
                        alt={player.name}
                        width={260}
                        height={320}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Primary Category Highlight Badge */}
                      <div className="absolute bottom-2 right-2 bg-[#28B838] text-white font-bebas text-sm px-2.5 py-0.5 rounded-md border border-white/30 shadow-lg">
                        {getStatValue(player)}
                      </div>

                      {/* Position Stamp */}
                      <div className="absolute top-2 left-2 bg-[#061A42]/90 text-white font-bebas text-xs px-2 py-0.5 rounded border border-white/20">
                        {player.position}
                      </div>
                    </div>

                    {/* Player Identity */}
                    <div className="space-y-1 text-center border-b border-white/10 pb-2">
                      <span className="text-[10px] font-bebas text-[#28B838] tracking-widest uppercase block">
                        {player.clubName}
                      </span>
                      <h3 className="font-serif font-black text-lg text-white uppercase leading-tight truncate text-balance">
                        {player.name}
                      </h3>
                      <p className="text-xs text-[#FFE600] font-bebas italic">
                        “{player.nickname}”
                      </p>
                    </div>

                    {/* Mini Stats Breakdown */}
                    <div className="grid grid-cols-3 gap-1 text-center text-[10px] font-bebas">
                      <div className="bg-white/5 p-1.5 rounded-lg border border-white/10">
                        <span className="text-gray-400 block text-[9px]">PTS/PJ</span>
                        <span className="text-white font-bold text-xs tabular-nums">{player.stats.pointsPerGame}</span>
                      </div>
                      <div className="bg-white/5 p-1.5 rounded-lg border border-white/10">
                        <span className="text-gray-400 block text-[9px]">REB/PJ</span>
                        <span className="text-white font-bold text-xs tabular-nums">{player.stats.reboundsPerGame}</span>
                      </div>
                      <div className="bg-white/5 p-1.5 rounded-lg border border-white/10">
                        <span className="text-gray-400 block text-[9px]">AST/PJ</span>
                        <span className="text-white font-bold text-xs tabular-nums">{player.stats.assistsPerGame}</span>
                      </div>
                    </div>

                    {/* Card Footer Button */}
                    <div className="pt-1 flex items-center justify-between text-[10px] text-gray-400 font-bebas">
                      <span>LCB 2026 OFFICIAL</span>
                      <span className="text-[#FFE600] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                        VER FICHA <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                  </div>

                </div>
              </button>
            );
          })}
        </div>

      </div>

      {/* Collectible Card Modal */}
      {modalPlayer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-[#061A42] border-4 border-[#FFE600] rounded-3xl p-6 max-w-lg w-full text-white space-y-6 relative shadow-2xl">
            
            <button
              onClick={() => setModalPlayer(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <img
                src={modalPlayer.image}
                alt={modalPlayer.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-[#FFE600]"
              />
              <div>
                <span className="bg-[#28B838] text-white text-xs font-bebas px-2.5 py-0.5 rounded-full">
                  {modalPlayer.clubName}
                </span>
                <h3 className="font-serif text-2xl font-black text-white uppercase mt-1 text-balance">
                  {modalPlayer.name}
                </h3>
                <p className="text-xs text-[#FFE600] font-bebas">
                  N° {modalPlayer.jerseyNumber} • {modalPlayer.position} • {modalPlayer.height} • {modalPlayer.age} años
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bebas text-gray-400 tracking-wider uppercase block">
                DESGLOSE DE ESTADÍSTICAS TEMPORADA 2026:
              </span>

              <div className="grid grid-cols-2 gap-3 text-center font-bebas">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-xs text-gray-400 block">PUNTOS POR PARTIDO</span>
                  <span className="text-2xl text-[#FFE600] font-bold tabular-nums">{modalPlayer.stats.pointsPerGame}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-xs text-gray-400 block">REBOTES POR PARTIDO</span>
                  <span className="text-2xl text-[#28B838] font-bold tabular-nums">{modalPlayer.stats.reboundsPerGame}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-xs text-gray-400 block">ASISTENCIAS POR PARTIDO</span>
                  <span className="text-2xl text-blue-400 font-bold tabular-nums">{modalPlayer.stats.assistsPerGame}</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-xs text-gray-400 block">EFECTIVIDAD DE TIRO</span>
                  <span className="text-2xl text-white font-bold tabular-nums">{modalPlayer.stats.fieldGoalPct}%</span>
                </div>
              </div>
            </div>

            <div className="bg-[#0B2B6B] p-4 rounded-xl border border-white/10 text-xs italic text-gray-200">
              “{modalPlayer.highlightQuote}”
            </div>

            <button
              onClick={() => setModalPlayer(null)}
              className="w-full bg-[#FFE600] text-[#061A42] font-bebas text-base py-2.5 rounded-xl font-extrabold cursor-pointer hover:bg-yellow-300 transition-colors"
            >
              CERRAR CROMO
            </button>

          </div>
        </div>
      )}

    </section>
  );
};
