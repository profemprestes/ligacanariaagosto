'use client';

import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { LiveScoreboardBar } from '../../components/LiveScoreboardBar';
import { InteractiveCanelonesMap } from '../../components/InteractiveCanelonesMap';
import { VenueViewer } from '../../components/VenueViewer';
import { Footer } from '../../components/Footer';
import { FixtureModal } from '../../components/FixtureModal';
import { AccessibilityWidget } from '../../components/AccessibilityWidget';
import { MapPin, Navigation, Compass, Info } from 'lucide-react';

export default function SedesPage() {
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
            INFRAESTRUCTURA Y GEOLOCALIZACIÓN
          </div>
          
          <h1 className="font-display text-4xl sm:text-6xl font-black uppercase text-white tracking-tight text-balance">
            SEDES Y <span className="text-[#FFE600]">CANCHAS CANARIAS</span>
          </h1>
          
          <p className="max-w-2xl text-gray-300 text-sm sm:text-base">
            Ubica los gimnasios cerrados, complejos municipales y estadios donde se disputan los partidos de la Liga Canaria de Basket.
          </p>
        </div>
      </section>

      {/* Interactive Canelones Map */}
      <InteractiveCanelonesMap />

      {/* Venue Inspector Section */}
      <section className="py-16 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display text-3xl font-extrabold uppercase text-[#061A42] text-balance">
              EXPLORADOR DE SEDES
            </h2>
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">
              Superficies de parquet, tableros electrónicos y accesos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <VenueViewer />
            </div>

            <div className="lg:col-span-5 space-y-6 bg-white p-6 rounded-3xl border-3 border-[#061A42] shadow-[6px_6px_0px_#061A42]">
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                <Navigation className="w-6 h-6 text-[#28B838]" />
                <h3 className="font-bebas text-2xl font-bold text-[#061A42] text-balance">
                  RECOMENDACIONES PARA VISITANTES
                </h3>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Compass className="w-5 h-5 text-[#0B2B6B] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#061A42]">Estacionamiento Tarifado/Libre:</strong>
                    Todas las sedes de Canelones cuentan con zona de parqueo habilitada para delegaciones y público.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="w-5 h-5 text-[#28B838] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#061A42]">Apertura de Puertas:</strong>
                    Las boleterías y accesos abren 45 minutos antes del inicio estipulado en el fixture oficial.
                  </div>
                </li>
              </ul>
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
