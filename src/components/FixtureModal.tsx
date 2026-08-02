'use client';

import React, { useState } from 'react';
import { MATCHES_PROXIMOS, POSICIONES_TABLA } from '../data/ligaData';
import { X, Calendar, MapPin, Search, Filter, Trophy, Download, CheckCircle, Flame } from 'lucide-react';

interface FixtureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FixtureModal: React.FC<FixtureModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Primera División');
  const [searchTerm, setSearchTerm] = useState<string>('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in">
      
      <div className="bg-white rounded-3xl border-4 border-[#061A42] max-w-4xl w-full p-6 sm:p-8 text-[#061A42] relative shadow-2xl my-8 space-y-6">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#FFE600] text-[#061A42] rounded-2xl border-2 border-[#061A42]">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#28B838] font-bebas tracking-widest uppercase">
                CALENDARIO OFICIAL • CANELONES 2026
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#061A42] text-balance">
                FIXTURE COMPLETO & DÍAS DE PARTIDO
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-gray-100 hover:bg-[#0B2B6B] hover:text-white transition-colors cursor-pointer border border-gray-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F4F6F8] p-4 rounded-2xl border border-gray-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {['Primera División', 'Divisional B', 'Formativa Sub-21', 'Femenino'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-bebas text-sm font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0B2B6B] text-[#FFE600] border border-[#061A42]'
                    : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              name="search_fixture"
              autocomplete="off"
              aria-label="Buscar club o gimnasio en fixture"
              placeholder="Buscar club o gimnasio… (ej. Pando)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white rounded-full text-xs border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B2B6B]"
            />
          </div>

        </div>

        {/* Fixture Match Cards List */}
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2">
          {MATCHES_PROXIMOS
            .filter((m) => 
              searchTerm === '' || 
              m.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) || 
              m.awayTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
              m.venue.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((m) => (
              <div 
                key={m.id}
                className="bg-white rounded-2xl border-2 border-[#061A42] p-4 shadow-[4px_4px_0px_#061A42] flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center gap-2 text-xs font-bebas font-bold text-[#28B838]">
                    <span>{m.round}</span>
                    <span>•</span>
                    <span className="text-[#0B2B6B]">{m.date} - {m.time}</span>
                  </div>
                  <div className="font-display text-xl font-extrabold uppercase text-[#061A42]">
                    {m.homeTeam} <span className="text-[#28B838] font-bebas">VS</span> {m.awayTeam}
                  </div>
                  <div className="text-xs text-gray-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#28B838]" />
                    {m.venue}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {m.status === 'FINAL' ? (
                    <div className="bg-[#0B2B6B] text-[#FFE600] font-bebas text-xl font-bold px-4 py-2 rounded-xl tabular-nums">
                      FINAL: {m.homeScore} - {m.awayScore}
                    </div>
                  ) : (
                    <div className="bg-[#FFE600] text-[#061A42] font-bebas text-lg font-bold px-4 py-2 rounded-xl border border-[#061A42] flex items-center gap-1.5">
                      <Flame className="w-4 h-4 text-[#061A42]" />
                      PROGRAMADO
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => alert('Generando PDF del Fixture Oficial 2026 de la Liga Canaria…')}
            className="text-xs font-bold font-bebas text-[#0B2B6B] bg-[#28B838]/10 hover:bg-[#28B838] hover:text-white px-4 py-2 rounded-full transition-colors flex items-center gap-1.5"
          >
            <Download className="w-4 h-4" />
            DESCARGAR FIXTURE PDF
          </button>

          <button
            onClick={onClose}
            className="bg-[#061A42] text-white font-bebas text-lg font-bold px-6 py-2 rounded-full hover:bg-[#28B838] transition-colors"
          >
            ENTENDIDO
          </button>
        </div>

      </div>

    </div>
  );
};
