'use client';

import React, { useState } from 'react';
import { POSICIONES_TABLA, POSICIONES_SERIE_A, POSICIONES_SERIE_B } from '../data/ligaData';
import { Trophy, ChevronRight } from 'lucide-react';

interface StandingsTableProps {
  onOpenDetails?: () => void;
  limit?: number;
}

export const StandingsTable: React.FC<StandingsTableProps> = ({ onOpenDetails, limit }) => {
  const [selectedSerie, setSelectedSerie] = useState<'SERIE A' | 'SERIE B' | 'TODAS'>('SERIE A');

  let rows = POSICIONES_TABLA;
  if (selectedSerie === 'SERIE A') {
    rows = POSICIONES_SERIE_A;
  } else if (selectedSerie === 'SERIE B') {
    rows = POSICIONES_SERIE_B;
  }

  const displayRows = limit ? rows.slice(0, limit) : rows;

  return (
    <div className="bg-white rounded-3xl border-3 border-[#061A42] p-6 shadow-[8px_8px_0px_#061A42] overflow-hidden animate-in fade-in space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-[#FFE600] text-[#061A42] rounded-2xl border-2 border-[#061A42] font-extrabold">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-extrabold uppercase text-[#061A42] text-balance">
              TABLA DE POSICIONES 2026
            </h3>
            <p className="text-xs text-gray-500 font-bold uppercase">
              Clasifican los primeros 4 de cada serie a Playoffs
            </p>
          </div>
        </div>

        {/* Serie Filter Tabs */}
        <div className="flex items-center gap-2 bg-[#F4F6F8] p-1.5 rounded-2xl border border-gray-200">
          <button
            onClick={() => setSelectedSerie('SERIE A')}
            className={`px-3.5 py-1.5 rounded-xl font-bebas text-sm font-bold transition-all cursor-pointer ${
              selectedSerie === 'SERIE A'
                ? 'bg-[#0B2B6B] text-[#FFE600] shadow-md'
                : 'text-gray-600 hover:text-[#061A42]'
            }`}
          >
            SERIE A (9)
          </button>
          <button
            onClick={() => setSelectedSerie('SERIE B')}
            className={`px-3.5 py-1.5 rounded-xl font-bebas text-sm font-bold transition-all cursor-pointer ${
              selectedSerie === 'SERIE B'
                ? 'bg-[#0B2B6B] text-[#FFE600] shadow-md'
                : 'text-gray-600 hover:text-[#061A42]'
            }`}
          >
            SERIE B (6)
          </button>
          <button
            onClick={() => setSelectedSerie('TODAS')}
            className={`px-3.5 py-1.5 rounded-xl font-bebas text-sm font-bold transition-all cursor-pointer ${
              selectedSerie === 'TODAS'
                ? 'bg-[#0B2B6B] text-[#FFE600] shadow-md'
                : 'text-gray-600 hover:text-[#061A42]'
            }`}
          >
            TODAS (15)
          </button>
        </div>

        {onOpenDetails && (
          <button
            onClick={onOpenDetails}
            className="text-xs font-bold text-[#0B2B6B] bg-[#28B838]/10 hover:bg-[#28B838] hover:text-white px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 font-bebas tracking-wide cursor-pointer"
          >
            <span>VER MÁS DETALLES</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0B2B6B] text-white font-bebas text-base tracking-wider border-b-2 border-[#061A42]">
              <th className="py-3 px-3">POS</th>
              <th className="py-3 px-4">CLUB CANARIO</th>
              <th className="py-3 px-2 text-center">DIVISIÓN</th>
              <th className="py-3 px-2 text-center">PJ</th>
              <th className="py-3 px-2 text-center">PG</th>
              <th className="py-3 px-2 text-center">PP</th>
              <th className="py-3 px-2 text-center">DIF</th>
              <th className="py-3 px-4 text-center bg-[#FFE600] text-[#061A42]">PTS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 font-medium text-sm">
            {displayRows.map((row) => (
              <tr 
                key={row.team}
                className={`hover:bg-[#28B838]/10 transition-colors ${
                  row.pos <= 4 ? 'bg-emerald-50/50' : ''
                }`}
              >
                <td className="py-3.5 px-3 font-extrabold text-base font-bebas text-[#061A42]">
                  <span className={`w-7 h-7 rounded-lg inline-flex items-center justify-center tabular-nums ${
                    row.pos === 1 
                      ? 'bg-[#FFE600] text-[#061A42] font-black border border-[#061A42]' 
                      : row.pos <= 4 
                      ? 'bg-[#0B2B6B] text-white font-bold' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {row.pos}
                  </span>
                </td>
                <td className="py-3.5 px-4 font-bold text-[#061A42] text-base flex items-center gap-2">
                  {row.team}
                  {row.pos <= 4 && (
                    <span className="text-[10px] bg-[#28B838] text-white font-black px-1.5 py-0.5 rounded uppercase">
                      PLAYOFFS
                    </span>
                  )}
                </td>
                <td className="py-3.5 px-2 text-center">
                  <span className={`text-[10px] font-bold font-bebas px-2 py-0.5 rounded-full border ${
                    row.serie === 'SERIE A'
                      ? 'bg-blue-50 text-[#0B2B6B] border-blue-200'
                      : 'bg-amber-50 text-amber-800 border-amber-200'
                  }`}>
                    {row.serie}
                  </span>
                </td>
                <td className="py-3.5 px-2 text-center font-semibold text-gray-700 tabular-nums">{row.pj}</td>
                <td className="py-3.5 px-2 text-center font-bold text-[#28B838] tabular-nums">{row.pg}</td>
                <td className="py-3.5 px-2 text-center font-semibold text-gray-500 tabular-nums">{row.pp}</td>
                <td className={`py-3.5 px-2 text-center font-extrabold tabular-nums ${row.dif > 0 ? 'text-[#0B2B6B]' : 'text-red-600'}`}>
                  {row.dif > 0 ? `+${row.dif}` : row.dif}
                </td>
                <td className="py-3.5 px-4 text-center font-black text-lg font-bebas bg-[#FFE600]/20 text-[#061A42] tabular-nums">
                  {row.pts}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

