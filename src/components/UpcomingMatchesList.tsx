'use client';

import React from 'react';
import { MATCHES_PROXIMOS, CLUBES_CANELONES } from '../data/ligaData';
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

          {(() => {
            const homeClub = CLUBES_CANELONES.find(c => c.name === m.homeTeam);
            const awayClub = CLUBES_CANELONES.find(c => c.name === m.awayTeam);
            return (
              <div className="bg-[#F4F6F8] p-4 rounded-2xl border border-gray-200 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-between w-full gap-4">
                  {/* Home Team */}
                  <div className="flex flex-col items-center text-center flex-1 min-w-0">
                    {homeClub?.logo ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-[#061A42] rounded-xl p-1 flex items-center justify-center shadow-xs flex-shrink-0 mb-1.5">
                        <img src={homeClub.logo} alt={m.homeTeam} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-3xl mb-1.5 flex-shrink-0">{homeClub?.badgeSymbol || '🏀'}</span>
                    )}
                    <div className="font-display text-xs sm:text-sm font-extrabold uppercase text-[#061A42] leading-tight truncate w-full">
                      {m.homeTeam}
                    </div>
                  </div>

                  {/* VS Divider */}
                  <div className="flex flex-col items-center justify-center flex-shrink-0">
                    <span className="font-bebas text-xs sm:text-sm text-[#28B838] font-bold bg-white px-2 py-0.5 rounded-full border border-gray-200 shadow-2xs">
                      VS
                    </span>
                  </div>

                  {/* Away Team */}
                  <div className="flex flex-col items-center text-center flex-1 min-w-0">
                    {awayClub?.logo ? (
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-[#061A42] rounded-xl p-1 flex items-center justify-center shadow-xs flex-shrink-0 mb-1.5">
                        <img src={awayClub.logo} alt={m.awayTeam} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-3xl mb-1.5 flex-shrink-0">{awayClub?.badgeSymbol || '🏀'}</span>
                    )}
                    <div className="font-display text-xs sm:text-sm font-extrabold uppercase text-[#061A42] leading-tight truncate w-full">
                      {m.awayTeam}
                    </div>
                  </div>
                </div>

                {m.status === 'FINAL' && (
                  <div className="bg-[#0B2B6B] text-[#FFE600] font-bebas text-lg sm:text-xl font-bold py-1 px-4.5 rounded-xl inline-block mt-1 tabular-nums border border-[#061A42] shadow-sm">
                    RESULTADO: {m.homeScore} - {m.awayScore}
                  </div>
                )}
              </div>
            );
          })()}

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
