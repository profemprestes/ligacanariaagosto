'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { LiveScoreboardBar } from '../../components/LiveScoreboardBar';
import { LeaderboardSection } from '../../components/LeaderboardSection';
import { Footer } from '../../components/Footer';
import { FixtureModal } from '../../components/FixtureModal';
import { AccessibilityWidget } from '../../components/AccessibilityWidget';
import { Flame, Star, Award, TrendingUp } from 'lucide-react';

export default function EstadisticasPage() {
  const [isFixtureModalOpen, setIsFixtureModalOpen] = useState(false);

  return (
    <main id="main-content" className="min-h-screen bg-white text-[#061A42] selection:bg-[#FFE600] selection:text-[#061A42] overflow-x-hidden pt-28">
      {/* Floating Navigation Menu */}
      <Navbar onOpenFixtureModal={() => setIsFixtureModalOpen(true)} />

      {/* Sticky Live Scoreboard Bar */}
      <LiveScoreboardBar />

      {/* Page Header */}
      <section className="py-12 bg-[#061A42] text-white border-b-4 border-[#FFE600] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="editorial-tag text-[#061A42]">
            ESTADÍSTICAS Y FIGURAS DESTACADAS
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight">
            CROMOS Y <span className="text-[#FFE600]">LÍDERES LCB</span>
          </h1>
          
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
            Métricas oficiales, anotadores, asistidores, reboteros y la colección de figuritas virtuales coleccionables de las estrellas de Canelones.
          </p>
        </div>
      </section>

      {/* Collectible Cards Leaderboard */}
      <LeaderboardSection />

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
