'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { LiveScoreboardBar } from '../../components/LiveScoreboardBar';
import { TeamsCarousel3D } from '../../components/3DTeamsCarousel';
import { CLUBES_CANELONES } from '../../data/ligaData';
import { Footer } from '../../components/Footer';
import { FixtureModal } from '../../components/FixtureModal';
import { AccessibilityWidget } from '../../components/AccessibilityWidget';
import { Users, Shield, MapPin, Trophy, Sparkles } from 'lucide-react';

export default function ClubesPage() {
  const [isFixtureModalOpen, setIsFixtureModalOpen] = useState(false);
  const [selectedClubId, setSelectedClubId] = useState<string>(CLUBES_CANELONES[0].id);

  const selectedClub = CLUBES_CANELONES.find((c) => c.id === selectedClubId) || CLUBES_CANELONES[0];

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#061A42] selection:bg-[#FFE600] selection:text-[#061A42] overflow-x-hidden pt-28">
      {/* Floating Navigation Menu */}
      <Navbar onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* Sticky Live Scoreboard Bar */}
      <LiveScoreboardBar />

      {/* Page Header */}
      <section className="py-12 bg-[#061A42] text-white border-b-4 border-[#28B838] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="editorial-tag text-[#061A42]">
            INSTITUCIONES DE CANELONES
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            CLUBES Y <span className="text-[#28B838]">FRANQUICIAS LCB</span>
          </h1>
          
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
            Descubre los equipos tradicionales que representan las ciudades y localidades del departamento de Canelones en la Liga Canaria de Basket.
          </p>
        </div>
      </section>

      {/* 3D Interactive Carousel Section */}
      <TeamsCarousel3D />

      {/* Roster & Club Inspector */}
      <section className="py-16 bg-[#F4F6F8] border-t-2 border-[#061A42]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-[#061A42]">
              SELECCIONA UN CLUB PARA VER DETALLES
            </h2>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
              Historia, sede, colores oficiales y logros deportivos
            </p>
          </div>

          {/* Club Buttons Pills grouped by Serie */}
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0B2B6B] font-bebas tracking-wider uppercase block text-center">
                EQUIPOS SERIE A (9)
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CLUBES_CANELONES.filter(c => c.serie === 'SERIE A').map((club) => (
                  <button
                    key={club.id}
                    onClick={() => setSelectedClubId(club.id)}
                    className={`px-3.5 py-1.5 rounded-full font-bebas text-base font-bold transition-all cursor-pointer ${
                      selectedClubId === club.id
                        ? 'bg-[#0B2B6B] text-[#FFE600] border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42]'
                        : 'bg-white text-[#061A42] border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {club.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold text-[#28B838] font-bebas tracking-wider uppercase block text-center">
                EQUIPOS SERIE B (6)
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {CLUBES_CANELONES.filter(c => c.serie === 'SERIE B').map((club) => (
                  <button
                    key={club.id}
                    onClick={() => setSelectedClubId(club.id)}
                    className={`px-3.5 py-1.5 rounded-full font-bebas text-base font-bold transition-all cursor-pointer ${
                      selectedClubId === club.id
                        ? 'bg-[#28B838] text-white border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42]'
                        : 'bg-white text-[#061A42] border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {club.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Club Inspector Card */}
          <div className="bg-white rounded-3xl border-3 border-[#061A42] p-6 sm:p-8 shadow-[8px_8px_0px_#061A42] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-gray-200 pb-6 lg:pb-0 lg:pr-8">
              <div 
                className="w-32 h-32 rounded-3xl border-4 border-[#061A42] shadow-xl flex items-center justify-center p-3.5 bg-white"
              >
                {selectedClub.logo ? (
                  <img src={selectedClub.logo} alt={selectedClub.name} className="w-full h-full object-contain" />
                ) : (
                  <div 
                    className="w-full h-full rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: selectedClub.color }}
                  >
                    <span className="text-5xl drop-shadow-md">{selectedClub.badgeSymbol}</span>
                  </div>
                )}
              </div>

              <div>
                <span className={`inline-block text-xs font-bold font-bebas px-3 py-0.5 rounded-full mb-1 border ${
                  selectedClub.serie === 'SERIE A'
                    ? 'bg-[#FFE600] text-[#061A42] border-[#061A42]'
                    : 'bg-[#28B838] text-white border-[#061A42]'
                }`}>
                  {selectedClub.serie}
                </span>
                <h3 className="font-display text-3xl font-extrabold uppercase text-[#061A42]">
                  {selectedClub.name}
                </h3>
                <p className="text-xs font-bold text-[#28B838] font-bebas tracking-wider uppercase">
                  {selectedClub.city} • CANELONES
                </p>
              </div>

              <div className="w-full bg-[#F4F6F8] p-3 rounded-2xl border border-gray-200 text-xs text-left space-y-1">
                <div className="flex justify-between text-gray-600">
                  <span>Fundación:</span>
                  <span className="font-bold text-[#061A42]">{selectedClub.founded}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Capitán:</span>
                  <span className="font-bold text-[#061A42]">{selectedClub.captain}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Gimnasio Sede:</span>
                  <span className="font-bold text-[#061A42]">{selectedClub.stadium}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#0B2B6B] font-bebas tracking-wider uppercase">
                  RESEÑA INSTITUCIONAL
                </span>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {selectedClub.description}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <span className="text-xs font-bold text-[#28B838] font-bebas tracking-wider uppercase block">
                  CUMPLIMIENTO DE REQUISITOS LCB 2026
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-bold text-emerald-800 text-center">
                    ✓ Personería Jurídica
                  </div>
                  <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-bold text-emerald-800 text-center">
                    ✓ Cancha Homologada
                  </div>
                  <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-200 font-bold text-emerald-800 text-center">
                    ✓ Plantel Femenino & Formativas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
