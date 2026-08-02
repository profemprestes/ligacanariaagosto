'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { SOCIAL_LINKS } from '../data/ligaData';
import { MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#061A42] text-white pt-16 pb-12 border-t-4 border-[#FFE600] relative overflow-hidden">
      
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#28B838_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Mission (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo size={60} showText={true} />
            <p className="text-sm text-gray-300 max-w-md leading-relaxed">
              La Liga Canaria de Basket es la máxima competición deportiva del básquetbol en el departamento de Canelones, Uruguay. Promovemos el deporte, la integración de nuestros municipios y el crecimiento constante de las formativas.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-[#FFE600] font-bebas tracking-widest">
              <MapPin className="w-4 h-4 text-[#28B838]" />
              <span>CANELONES, URUGUAY • DESDE 2012</span>
            </div>
          </div>

          {/* Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bebas text-xl text-[#FFE600] font-bold tracking-wider">
              SECCIONES PRINCIPALES
            </h4>
            <ul className="space-y-2 text-sm text-gray-300 font-medium">
              <li>
                <Link href="/" className="hover:text-[#28B838] transition-colors">→ Inicio Portal LCB</Link>
              </li>
              <li>
                <Link href="/torneo" className="hover:text-[#28B838] transition-colors">→ Torneo & Tabla de Posiciones</Link>
              </li>
              <li>
                <Link href="/clubes" className="hover:text-[#28B838] transition-colors">→ Clubes y Franquicias 3D</Link>
              </li>
              <li>
                <Link href="/sedes" className="hover:text-[#28B838] transition-colors">→ Sedes y Gimnasios</Link>
              </li>
              <li>
                <Link href="/estadisticas" className="hover:text-[#28B838] transition-colors">→ Figuras & Cromos LCB</Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:text-[#28B838] transition-colors">→ Noticias & Diario Oficial</Link>
              </li>
            </ul>
          </div>

          {/* Sponsors & Support (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bebas text-xl text-[#FFE600] font-bold tracking-wider">
              REDES OFICIALES
            </h4>
            <div className="space-y-2 text-xs">
              <a 
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-2xl border border-white/15 hover:bg-[#FFE600] hover:text-[#061A42] transition-colors flex items-center justify-between font-bold"
              >
                <span>Facebook Oficial LCB</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a 
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-2xl border border-white/15 hover:bg-[#28B838] hover:text-white transition-colors flex items-center justify-between font-bold"
              >
                <span>Instagram @ligacanariabasket</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Sponsor Banner Badges */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-gray-400 font-bebas tracking-wider">
          <div className="flex items-center gap-6">
            <span>INTENDENCIA DE CANELONES</span>
            <span>•</span>
            <span>SECRETARÍA NACIONAL DEL DEPORTE</span>
            <span>•</span>
            <span>MUNICIPIOS CANARIOS</span>
          </div>

          <div className="text-gray-400 font-medium text-xs">
            © 2026 Liga Canaria de Basket. Todos los derechos reservados.
          </div>
        </div>

      </div>

    </footer>
  );
};
