'use client';

import React from 'react';
import { MATCHES_PROXIMOS } from '../data/ligaData';
import { MapPin } from 'lucide-react';

export const UpcomingMatchesList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in">
      {MATCHES_PROXIMOS.map((m) => (
        <div 
          key={m.id}
          className="bg-white rounded-3xl border-3 border-[#061A42] p-5 shadow-[5px_5px_0px_#061A42] space-y-4"
        >
          <div className="flex items-center justify-between text-xs font-bebas font-bold">
            <span className="bg-[#28B838] text-white px-2.5 py-1 rounded-full">
              {m.round}
            </span>
            <span className="text-[#0B2B6B] font-extrabold">
              {m.date} • {m.time}
            </span>
          </div>

          <div className="bg-[#F4F6F8] p-4 rounded-2xl border border-gray-200 text-center space-y-2">
            <div className="font-display text-xl font-extrabold uppercase text-[#061A42] text-balance">
              {m.homeTeam}
            </div>
            <div className="font-bebas text-lg text-[#28B838] font-bold">
              VS
            </div>
            <div className="font-display text-xl font-extrabold uppercase text-[#061A42] text-balance">
              {m.awayTeam}
            </div>

            {m.status === 'FINAL' && (
              <div className="bg-[#0B2B6B] text-[#FFE600] font-bebas text-2xl font-bold py-1 px-4 rounded-xl inline-block mt-2 tabular-nums">
                RESULTADO: {m.homeScore} - {m.awayScore}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-bold text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#28B838]" />
              {m.venue}
            </span>
            <span className="bg-[#FFE600] text-[#061A42] px-2 py-0.5 rounded font-bebas">
              {m.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
