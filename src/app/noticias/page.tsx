'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { LiveScoreboardBar } from '../../components/LiveScoreboardBar';
import { EpicMomentsNewspaperCarousel } from '../../components/EpicMomentsNewspaperCarousel';
import { EditorialArticlesList } from '../../components/EditorialArticlesList';
import { Footer } from '../../components/Footer';
import { FixtureModal } from '../../components/FixtureModal';
import { AccessibilityWidget } from '../../components/AccessibilityWidget';
import { Newspaper, Sparkles, BookOpen } from 'lucide-react';

export default function NoticiasPage() {
  const [isFixtureModalOpen, setIsFixtureModalOpen] = useState(false);

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
            PRENSA Y COBERURA EDITORIAL
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight text-balance">
            EL DIARIO DE <span className="text-[#28B838]">LA LIGA CANARIA</span>
          </h1>
          
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
            Crónicas completas, titulares históricos, fotos exclusivas y cobertura periodística de cada jornada del básquetbol canario.
          </p>
        </div>
      </section>

      {/* Vintage 3D Newspaper Carousel */}
      <EpicMomentsNewspaperCarousel />

      {/* All Articles Section */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between border-b-2 border-[#061A42]/15 pb-4">
            <div>
              <span className="editorial-tag text-[#061A42] mb-1">
                TODAS LAS NOTICIAS
              </span>
              <h2 className="font-display text-3xl font-extrabold uppercase text-[#061A42] text-balance">
                ÚLTIMAS CRÓNICAS PUBLICADAS
              </h2>
            </div>
            <BookOpen className="w-8 h-8 text-[#0B2B6B]" />
          </div>

          <EditorialArticlesList />
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
