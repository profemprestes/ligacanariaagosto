'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { LiveScoreboardBar } from '../../components/LiveScoreboardBar';
import { StandingsTable } from '../../components/StandingsTable';
import { UpcomingMatchesList } from '../../components/UpcomingMatchesList';
import { Footer } from '../../components/Footer';
import { FixtureModal } from '../../components/FixtureModal';
import { AccessibilityWidget } from '../../components/AccessibilityWidget';
import { Trophy, Calendar, Sparkles, Award, ShieldCheck } from 'lucide-react';

export default function TorneoPage() {
  const [isFixtureModalOpen, setIsFixtureModalOpen] = useState(false);
  const [tab, setTab] = useState<'TABLA' | 'FIXTURE'>('TABLA');

  return (
    <main className="min-h-screen bg-[#F4F6F8] text-[#061A42] selection:bg-[#FFE600] selection:text-[#061A42] overflow-x-hidden pt-28">
      {/* Floating Navigation Menu */}
      <Navbar onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* Sticky Live Scoreboard Bar */}
      <LiveScoreboardBar />

      {/* Page Header */}
      <section className="py-12 bg-[#061A42] text-white border-b-4 border-[#FFE600] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#28B838]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="editorial-tag text-[#061A42]">
            COMPETICIÓN OFICIAL 2026
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            TORNEO <span className="text-[#FFE600]">CLAUSURA LCB</span>
          </h1>
          
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
            Consulta las posiciones actualizadas punto a punto, fixtures semanales, clasificaciones a Playoffs y el camino al título del básquetbol de Canelones.
          </p>

          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setTab('TABLA')}
              className={`px-6 py-2.5 rounded-full font-bebas text-lg font-bold transition-all cursor-pointer ${
                tab === 'TABLA'
                  ? 'bg-[#FFE600] text-[#061A42] border-2 border-white shadow-[3px_3px_0px_#FFFFFF]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              🏆 TABLA DE POSICIONES
            </button>
            <button
              onClick={() => setTab('FIXTURE')}
              className={`px-6 py-2.5 rounded-full font-bebas text-lg font-bold transition-all cursor-pointer ${
                tab === 'FIXTURE'
                  ? 'bg-[#FFE600] text-[#061A42] border-2 border-white shadow-[3px_3px_0px_#FFFFFF]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              📅 PRÓXIMAS FECHAS Y CRONOGRAMA
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {tab === 'TABLA' ? (
          <div className="space-y-8">
            <StandingsTable onOpenDetails={() => setIsFixtureModalOpen(true)} />
            
            {/* Format rules card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-3xl border-2 border-[#061A42] shadow-md space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#FFE600] flex items-center justify-center font-bold text-[#061A42] mb-3">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="font-bebas text-xl text-[#061A42] font-bold">1° AL 4° PUESTO: PLAYOFFS</h4>
                <p className="text-xs text-gray-600">
                  Clasifican directamente a las semifinales de la Copa de Oro al mejor de 3 partidos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-[#061A42] shadow-md space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#28B838] text-white flex items-center justify-center font-bold mb-3">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bebas text-xl text-[#061A42] font-bold">5° AL 8° PUESTO: COPA DE PLATA</h4>
                <p className="text-xs text-gray-600">
                  Disputan el cuadro eliminatorio por la permanencia y trofeo de plata del torneo.
                </p>
              </div>

              <div className="bg-white p-6 rounded-3xl border-2 border-[#061A42] shadow-md space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#0B2B6B] text-white flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bebas text-xl text-[#061A42] font-bold">CRITERIOS DE DESEMPATE</h4>
                <p className="text-xs text-gray-600">
                  En caso de igualar en puntos, se toma en cuenta el gol average entre los equipos empatados.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-gray-300">
              <h3 className="font-bebas text-3xl font-extrabold text-[#061A42]">
                PARTIDOS FECHA EN CURSO
              </h3>
              <button
                onClick={() => setIsFixtureModalOpen(true)}
                className="bg-[#FFE600] text-[#061A42] font-bebas text-base font-bold px-4 py-2 rounded-full border border-[#061A42] flex items-center gap-1.5 cursor-pointer shadow-sm hover:scale-105 transition-transform"
              >
                <Calendar className="w-4 h-4" />
                ABRIR CALENDARIO COMPLETO
              </button>
            </div>
            <UpcomingMatchesList />
          </div>
        )}
      </section>

      {/* Editorial Magazine Footer */}
      <Footer />

      {/* Interactive Fixture & Schedule Modal */}
      <FixtureModal
        isOpen={isFixtureModalOpen}
        onClose={() => setIsFixtureModalOpen(false)}
      />

      <AccessibilityWidget />
    </main>
  );
}
