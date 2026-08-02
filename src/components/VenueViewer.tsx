'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SEDES_CANELONES, CLUBES_CANELONES, Venue } from '../data/ligaData';
import { MapPin } from 'lucide-react';

export const VenueViewer: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<Venue>(SEDES_CANELONES[0]);

  return (
    <div id="sedes" className="bg-[#0B2B6B] rounded-3xl border-3 border-[#061A42] p-6 text-white shadow-[8px_8px_0px_#061A42] space-y-6">
      <div className="flex items-center justify-between border-b border-white/15 pb-4">
        <div>
          <div className="editorial-tag text-[#061A42] mb-1">
            VISOR DE SEDES Y CANCHAS
          </div>
          <h3 className="font-display text-2xl font-extrabold uppercase text-white text-balance">
            GIMNASIOS CANARIOS
          </h3>
        </div>
        <MapPin className="w-8 h-8 text-[#FFE600]" />
      </div>

      {/* Venue Selector Cards List */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#28B838] font-bebas uppercase tracking-wider block">
          SELECCIONAR GIMNASIO DE CANELONES:
        </span>
        <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-1">
          {SEDES_CANELONES.map((v) => (
            <button
              key={v.id}
              onClick={() => setSelectedVenue(v)}
              className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                selectedVenue.id === v.id
                  ? 'bg-[#FFE600] text-[#061A42] border-[#061A42] font-bold shadow-md'
                  : 'bg-white/10 text-white border-white/15 hover:bg-white/20'
              }`}
            >
              <span className="font-bebas text-base tracking-wide truncate">
                {v.name}
              </span>
              <span className="text-xs font-bold opacity-80 uppercase ml-2 flex-shrink-0">
                {v.city}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Active Selected Venue Photo & Details */}
      <div className="bg-[#061A42] rounded-2xl border-2 border-white/20 overflow-hidden space-y-4 p-4 animate-in fade-in">
        <div className="h-44 rounded-xl overflow-hidden relative border border-white/20">
          <Image 
            src={selectedVenue.image} 
            alt={selectedVenue.name}
            fill
            loading="lazy"
            className="object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 left-2 bg-[#061A42]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-[#FFE600] z-10">
            Capacidad: {selectedVenue.capacity} espectadores
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-display text-xl font-extrabold uppercase text-[#FFE600]">
            {selectedVenue.name}
          </h4>
          <p className="text-xs text-gray-300 flex items-start gap-1">
            <MapPin className="w-4 h-4 text-[#28B838] flex-shrink-0 mt-0.5" />
            {selectedVenue.address}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-white/10 text-xs">
          <div className="flex justify-between text-gray-300">
            <span>Superficie de Juego:</span>
            <span className="text-white font-bold">{selectedVenue.surface}</span>
          </div>

          <div className="flex justify-between items-center text-gray-300 py-1">
            <span>Clubes Locales:</span>
            <div className="flex items-center gap-1.5">
              {selectedVenue.clubs.map((clubName) => {
                const clubInfo = CLUBES_CANELONES.find(c => c.name === clubName);
                const logo = clubInfo?.logo;
                const emoji = clubInfo?.badgeSymbol || '🏀';
                
                return (
                  <div 
                    key={clubName} 
                    title={clubName}
                    className="w-6 h-6 rounded bg-white border border-white/20 p-0.5 flex items-center justify-center shadow-2xs flex-shrink-0"
                  >
                    {logo ? (
                      <img src={logo} alt={clubName} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-[10px]">{emoji}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#FFE600]/15 p-2.5 rounded-xl border border-[#FFE600]/30 space-y-1">
            <span className="text-[10px] text-[#FFE600] font-black uppercase tracking-wider block">
              PRÓXIMO ENCUENTRO EN ESTA SEDE:
            </span>
            <span className="text-white font-bold block text-xs">
              {selectedVenue.nextMatch}
            </span>
          </div>
        </div>

        {/* Map Radar Visual Representation */}
        <div className="pt-2">
          <span className="text-[10px] text-gray-400 font-bold uppercase block mb-1">
            Ubicación en el Departamento de Canelones
          </span>
          <div className="h-20 bg-emerald-900/30 rounded-xl border border-[#28B838]/30 relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#28B838_1px,transparent_1px)] [background-size:8px_8px] opacity-30" />
            <div className="relative z-10 flex items-center gap-2 bg-[#28B838] text-white px-3 py-1 rounded-full text-xs font-bold font-bebas shadow-lg">
              <MapPin className="w-3.5 h-3.5 text-[#FFE600]" />
              CANELONES • {selectedVenue.city.toUpperCase()}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
