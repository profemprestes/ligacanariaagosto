'use client';

import React, { useState } from 'react';
import { SOCIAL_LINKS } from '../data/ligaData';
import { Share2, ExternalLink, ThumbsUp, Camera, Check, Sparkles, MessageCircle, Heart, Flame } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const [copiedFb, setCopiedFb] = useState(false);
  const [copiedIg, setCopiedIg] = useState(false);

  const handleCopy = (url: string, type: 'fb' | 'ig') => {
    navigator.clipboard.writeText(url);
    if (type === 'fb') {
      setCopiedFb(true);
      setTimeout(() => setCopiedFb(false), 2500);
    } else {
      setCopiedIg(true);
      setTimeout(() => setCopiedIg(false), 2500);
    }
  };

  return (
    <section id="redes" className="py-24 bg-[#0B2B6B] text-white relative overflow-hidden">
      
      {/* Decorative Asymmetric Geometry */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFE600]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#28B838]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="editorial-tag bg-[#FFE600] text-[#061A42] mx-auto">
            COMUNIDAD & CANALES OFICIALES
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white text-balance">
            SEGUÍ LA LIGA CANARIA <br />
            <span className="text-[#FFE600] underline decoration-[#28B838] underline-offset-8">
              EN REDES SOCIALES
            </span>
          </h2>
          <p className="text-base text-gray-200">
            Transmitimos fotos en vivo, coberturas en cancha, tablas actualizadas al instante e historias del básquetbol canario.
          </p>
        </div>

        {/* Giant Interactive Social Media Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* FACEBOOK GIANT BLOCK */}
          <div className="bg-white text-[#061A42] rounded-3xl border-4 border-[#061A42] p-8 shadow-[10px_10px_0px_#FFE600] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b-2 border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#0B2B6B] text-white flex items-center justify-center font-extrabold shadow-md border-2 border-[#061A42]">
                  <ThumbsUp className="w-7 h-7 text-[#FFE600]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#28B838] font-bebas tracking-widest uppercase">
                    PÁGINA OFICIAL DE FACEBOOK
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-[#061A42]">
                    Liga Canaria Basket
                  </h3>
                </div>
              </div>

              <span className="bg-[#FFE600] text-[#061A42] font-bebas px-3 py-1 rounded-full text-sm font-bold border border-[#061A42]">
                OFICIAL
              </span>
            </div>

            {/* Content Preview */}
            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
                Fotos oficiales de cada fecha, álbumes de las hinchadas, transmisiones en directo y fixture del fin de semana.
              </p>

              {/* Fake Live Post Preview Box */}
              <div className="bg-[#F4F6F8] p-4 rounded-2xl border-2 border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0B2B6B]">
                  <Flame className="w-4 h-4 text-[#28B838]" />
                  <span>Última publicación destacada en Facebook</span>
                </div>
                <p className="text-xs text-gray-600 font-semibold italic">
                  “¡Gran marco de público en la victoria de Albion! Reviví el álbum fotográfico completo de la Fecha 13…”
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t-2 border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => handleCopy(SOCIAL_LINKS.facebook, 'fb')}
                className="text-xs font-bold text-gray-600 hover:text-[#0B2B6B] flex items-center gap-1.5 transition-colors"
              >
                {copiedFb ? <Check className="w-4 h-4 text-[#28B838]" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedFb ? '¡Enlace copiado!' : 'Copiar enlace directo'}</span>
              </button>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0B2B6B] hover:bg-[#061A42] text-[#FFE600] font-bebas text-xl font-bold px-6 py-3 rounded-full border-2 border-[#061A42] shadow-md transition-all flex items-center gap-2 group-hover:scale-105"
              >
                <span>IR A FACEBOOK</span>
                <ExternalLink className="w-5 h-5 text-[#FFE600]" />
              </a>
            </div>

          </div>

          {/* INSTAGRAM GIANT BLOCK */}
          <div className="bg-[#28B838] text-[#061A42] rounded-3xl border-4 border-[#061A42] p-8 shadow-[10px_10px_0px_#FFE600] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-6 border-b-2 border-[#061A42]/20">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-[#061A42] text-[#FFE600] flex items-center justify-center font-extrabold shadow-md border-2 border-white">
                  <Camera className="w-7 h-7 text-[#FFE600]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#061A42] font-bebas tracking-widest uppercase">
                    INSTAGRAM OFICIAL
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase text-white">
                    @ligacanariabasket
                  </h3>
                </div>
              </div>

              <span className="bg-[#FFE600] text-[#061A42] font-bebas px-3 py-1 rounded-full text-sm font-bold border border-[#061A42]">
                STORIES & REELS
              </span>
            </div>

            {/* Content Preview */}
            <div className="py-6 space-y-4">
              <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                Minuto a minuto de la jornada, mejores jugadas (Top 5 triples), votaciones de MVP e historias en vivo desde los estadios canarios.
              </p>

              {/* Fake Live Instagram Grid Preview */}
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#061A42] h-20 rounded-xl p-2 flex flex-col justify-end text-white text-[10px] font-bold border border-white/20">
                  <span className="text-[#FFE600]">🏀 ALBION</span>
                  <span>78 - 72 SAUCE</span>
                </div>
                <div className="bg-[#0B2B6B] h-20 rounded-xl p-2 flex flex-col justify-end text-white text-[10px] font-bold border border-white/20">
                  <span className="text-[#28B838]">🔥 MVP FECHA</span>
                  <span>G. FERNÁNDEZ</span>
                </div>
                <div className="bg-[#061A42] h-20 rounded-xl p-2 flex flex-col justify-end text-white text-[10px] font-bold border border-white/20">
                  <span className="text-[#FFE600]">📍 PANDO</span>
                  <span>INVICTO LOCAL</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t-2 border-[#061A42]/20 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => handleCopy(SOCIAL_LINKS.instagram, 'ig')}
                className="text-xs font-bold text-[#061A42] hover:text-white flex items-center gap-1.5 transition-colors"
              >
                {copiedIg ? <Check className="w-4 h-4 text-white" /> : <Share2 className="w-4 h-4" />}
                <span>{copiedIg ? '¡Enlace copiado!' : 'Copiar perfil de Instagram'}</span>
              </button>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFE600] hover:bg-[#E6D000] text-[#061A42] font-bebas text-xl font-bold px-6 py-3 rounded-full border-2 border-[#061A42] shadow-md transition-all flex items-center gap-2 group-hover:scale-105"
              >
                <span>SEGUIR EN INSTAGRAM</span>
                <ExternalLink className="w-5 h-5 text-[#061A42]" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
