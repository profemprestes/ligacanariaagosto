'use client';

import React, { useState } from 'react';
import { StandingsTable } from './StandingsTable';
import { EditorialArticlesList } from './EditorialArticlesList';
import { UpcomingMatchesList } from './UpcomingMatchesList';
import { VenueViewer } from './VenueViewer';
import { Star } from 'lucide-react';

interface TournamentSplitSectionProps {
  onOpenFixtureModal: () => void;
}

export const TournamentSplitSection: React.FC<TournamentSplitSectionProps> = ({ onOpenFixtureModal }) => {
  const [activeTab, setActiveTab] = useState<'TABLA' | 'NOTICIAS' | 'PROXIMOS'>('TABLA');

  return (
    <section id="torneo" className="py-24 bg-[#F4F6F8] text-[#061A42] relative overflow-hidden">
      
      {/* Decorative Asymmetric Green Transition Block */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#28B838]/10 -skew-x-12 transform origin-top-right -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-2 border-[#0B2B6B]/15 pb-6">
          <div>
            <div className="editorial-tag mb-3">
              TABLAS Y CRÓNICAS OFICIALES
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-[#061A42] text-balance">
              EL TORNEO <br />
              <span className="text-[#0B2B6B] bg-[#FFE600] px-3 py-0.5 inline-block -rotate-1 border-2 border-[#061A42]">
                OFICIAL 2026
              </span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('TABLA')}
              className={`px-5 py-2.5 rounded-full font-bebas text-lg font-bold transition-all cursor-pointer ${
                activeTab === 'TABLA'
                  ? 'bg-[#0B2B6B] text-[#FFE600] border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42]'
                  : 'bg-white text-[#061A42] border border-gray-200 hover:bg-gray-100'
              }`}
            >
              🏆 TABLA DE POSICIONES
            </button>
            <button
              onClick={() => setActiveTab('NOTICIAS')}
              className={`px-5 py-2.5 rounded-full font-bebas text-lg font-bold transition-all cursor-pointer ${
                activeTab === 'NOTICIAS'
                  ? 'bg-[#0B2B6B] text-[#FFE600] border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42]'
                  : 'bg-white text-[#061A42] border border-gray-200 hover:bg-gray-100'
              }`}
            >
              📰 CRÓNICAS EDITORIALES
            </button>
            <button
              onClick={() => setActiveTab('PROXIMOS')}
              className={`px-5 py-2.5 rounded-full font-bebas text-lg font-bold transition-all cursor-pointer ${
                activeTab === 'PROXIMOS'
                  ? 'bg-[#0B2B6B] text-[#FFE600] border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42]'
                  : 'bg-white text-[#061A42] border border-gray-200 hover:bg-gray-100'
              }`}
            >
              ⚡ PRÓXIMA FECHA
            </button>
          </div>
        </div>

        {/* 65% / 35% Unequal Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: 65% Width (8 Cols) - Tabbed Content & Highlights */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* TAB CONTENT 1: TABLA DE POSICIONES */}
            {activeTab === 'TABLA' && (
              <StandingsTable onOpenDetails={onOpenFixtureModal} />
            )}

            {/* TAB CONTENT 2: NOTICIAS & EDITORIAL */}
            {activeTab === 'NOTICIAS' && (
              <EditorialArticlesList />
            )}

            {/* TAB CONTENT 3: PRÓXIMOS MATCHES */}
            {activeTab === 'PROXIMOS' && (
              <UpcomingMatchesList />
            )}

            {/* Editorial MVP Spotlight Banner */}
            <div className="bg-gradient-to-r from-[#061A42] to-[#0B2B6B] rounded-3xl border-3 border-[#061A42] p-6 text-white shadow-xl flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFE600]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="w-20 h-20 rounded-2xl bg-[#FFE600] border-2 border-[#061A42] flex items-center justify-center text-[#061A42] font-extrabold flex-shrink-0 shadow-lg">
                <Star className="w-10 h-10 fill-[#061A42]" />
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <span className="text-xs font-bold text-[#28B838] font-bebas tracking-widest uppercase">
                  JUGADOR DESTACADO LA FECHA
                </span>
                <h4 className="font-display text-2xl font-extrabold uppercase text-[#FFE600]">
                  Gonzalo “El Canario” Fernández
                </h4>
                <p className="text-xs text-gray-300">
                  Club Albion • 28 Puntos, 12 Rebotes y Triple ganador en la victoria sobre Sauce.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 35% Width (4 Cols) - Dynamic Canelones Venues Viewer */}
          <div className="lg:col-span-4 space-y-6">
            <VenueViewer />
          </div>

        </div>

      </div>

    </section>
  );
};
