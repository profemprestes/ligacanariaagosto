'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, Building2, Users, Calendar, Search, Filter, Shield, Trophy } from 'lucide-react';

interface VenueLocation {
  id: string;
  name: string;
  club: string;
  city: string;
  zone: 'Ruta 5' | 'Ruta 8' | 'Costa de Oro' | 'Eje Central';
  address: string;
  capacity: number;
  surface: string;
  nextMatch: string;
  x: number; // SVG Percentage coordinates for map pins
  y: number;
  featuredColor: string;
}

const CANELONES_LOCATIONS: VenueLocation[] = [
  {
    id: 'loc-canelones',
    name: 'Gimnasio Municipal Canelones',
    club: 'Canelones Capital B.C.',
    city: 'Canelones Capital',
    zone: 'Ruta 5',
    address: 'Calle Baltasar Brum s/n esq. Treinta y Tres',
    capacity: 1200,
    surface: 'Piso Flotante Madera Dura',
    nextMatch: 'Sábado 08 de Agosto - 20:30 hs vs Atlético Tala',
    x: 38,
    y: 32,
    featuredColor: '#0B2B6B'
  },
  {
    id: 'loc-las-piedras',
    name: 'Polideportivo Las Piedras',
    club: 'Juventud Las Piedras',
    city: 'Las Piedras',
    zone: 'Ruta 5',
    address: 'Av. Instrucciones del Año XIII y Ruta 67',
    capacity: 1800,
    surface: 'Parquet Profesional FIBA',
    nextMatch: 'Domingo 09 de Agosto - 19:00 hs vs Urupan',
    x: 32,
    y: 72,
    featuredColor: '#28B838'
  },
  {
    id: 'loc-pando',
    name: 'Gimnasio Santiago A. Cigliutti',
    club: 'Urupan de Pando',
    city: 'Pando',
    zone: 'Ruta 8',
    address: 'Calle Wilson Ferreira Aldunate 1120',
    capacity: 2200,
    surface: 'Piso Flotante Multideportivo',
    nextMatch: 'Viernes 07 de Agosto - 21:00 hs vs Club Albion',
    x: 62,
    y: 60,
    featuredColor: '#061A42'
  },
  {
    id: 'loc-sauce',
    name: 'Gimnasio Municipal de Sauce',
    club: 'C.A. Sauce Basket',
    city: 'Sauce',
    zone: 'Eje Central',
    address: 'Calle Coronel Peirano s/n',
    capacity: 950,
    surface: 'Tabloncillo Sintético',
    nextMatch: 'Sábado 08 de Agosto - 18:30 hs vs Santa Lucía',
    x: 48,
    y: 48,
    featuredColor: '#FFE600'
  },
  {
    id: 'loc-salinas',
    name: 'Polideportivo Costero Salinas',
    club: 'Salinas Basket Club',
    city: 'Salinas',
    zone: 'Costa de Oro',
    address: 'Ruta Interbalnearia Km 38.500',
    capacity: 1100,
    surface: 'Piso Flotante de Arce',
    nextMatch: 'Sábado 08 de Agosto - 17:00 hs vs Salinas Sub-21',
    x: 78,
    y: 78,
    featuredColor: '#0B2B6B'
  },
  {
    id: 'loc-santa-lucia',
    name: 'Gimnasio Santa Lucía',
    club: 'Santa Lucía B.C.',
    city: 'Santa Lucía',
    zone: 'Ruta 5',
    address: 'Calle Rivera 450',
    capacity: 850,
    surface: 'Piso de Madera Clasificado',
    nextMatch: 'Domingo 09 de Agosto - 18:00 hs vs C.A. Sauce',
    x: 22,
    y: 28,
    featuredColor: '#061A42'
  },
  {
    id: 'loc-tala',
    name: 'Gimnasio Abierto Tala',
    club: 'Atlético Tala',
    city: 'Tala',
    zone: 'Ruta 8',
    address: 'Ruta 7 y Av. José Artigas',
    capacity: 900,
    surface: 'Piso Sintético de Alta Absorción',
    nextMatch: 'Sábado 08 de Agosto - 20:30 hs en Canelones',
    x: 60,
    y: 22,
    featuredColor: '#28B838'
  },
  {
    id: 'loc-albion',
    name: 'Gimnasio Albion',
    club: 'Club Albion',
    city: 'Pan de Azúcar / Regional',
    zone: 'Costa de Oro',
    address: 'Av. Félix de Lizarza 820',
    capacity: 1400,
    surface: 'Piso Flotante Profesional',
    nextMatch: 'Viernes 07 de Agosto - 21:00 hs en Pando',
    x: 88,
    y: 65,
    featuredColor: '#0B2B6B'
  }
];

export const InteractiveCanelonesMap: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('TODAS');
  const [selectedLoc, setSelectedLoc] = useState<VenueLocation>(CANELONES_LOCATIONS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = CANELONES_LOCATIONS.filter((loc) => {
    const matchesZone = selectedZone === 'TODAS' || loc.zone === selectedZone;
    const matchesSearch =
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesZone && matchesSearch;
  });

  return (
    <section id="sedes" className="py-24 bg-white text-[#061A42] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#0B2B6B] text-white font-bebas px-4 py-1.5 rounded-full text-sm border border-[#FFE600] shadow-sm">
            <MapPin className="w-4 h-4 text-[#FFE600]" />
            <span>UBICACIONES Y SEDES OFICIALES</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-black uppercase text-[#061A42] tracking-tight">
            MAPA INTERACTIVO DE CANELONES
          </h2>

          <p className="text-gray-600 text-sm sm:text-base font-sans">
            Explora la distribución de gimnasios, estadios y sedes de los clubes participantes de la Liga Canaria de Basket en el departamento.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#061A42] text-white p-4 sm:p-6 rounded-2xl shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Zone Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {['TODAS', 'Ruta 5', 'Ruta 8', 'Costa de Oro', 'Eje Central'].map((zone) => (
                <button
                  key={zone}
                  onClick={() => setSelectedZone(zone)}
                  className={`px-3.5 py-1.5 rounded-xl font-bebas text-xs sm:text-sm tracking-wider transition-all cursor-pointer ${
                    selectedZone === zone
                      ? 'bg-[#FFE600] text-[#061A42] font-bold shadow-md'
                      : 'bg-white/10 text-gray-200 hover:bg-white/20'
                  }`}
                >
                  {zone === 'TODAS' ? '📍 TODAS LAS ZONAS' : zone}
                </button>
              ))}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar club, ciudad o gimnasio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-400 pl-9 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#FFE600]"
              />
            </div>

          </div>
        </div>

        {/* Map & Detail Cards Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Stylized Blue & White Canelones Map (7 Cols) */}
          <div className="lg:col-span-7 bg-[#061A42] border-4 border-[#0B2B6B] rounded-3xl p-6 relative overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between">
            
            {/* Subtle Map Grid Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Map Title Tag */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-bebas text-[#FFE600] text-sm tracking-wider bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                DEPARTAMENTO DE CANELONES
              </span>
              <span className="text-xs text-blue-200 font-sans">
                {filteredLocations.length} Sedes encontradas
              </span>
            </div>

            {/* Interactive SVG Canvas Area */}
            <div className="relative w-full h-[360px] my-4 rounded-2xl bg-[#0B2B6B]/40 border border-white/10 overflow-hidden flex items-center justify-center">
              
              {/* Decorative Canelones Department Outline Representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full p-6 text-white/10 fill-blue-900/40 stroke-white/20 stroke-[0.5]">
                <path d="M 15 20 Q 30 10 60 15 Q 90 20 85 50 Q 80 80 75 85 Q 40 90 20 70 Q 10 50 15 20 Z" />
                {/* Connecting Route Lines */}
                <path d="M 22 28 L 32 72 L 38 32 L 48 48 L 62 60 L 78 78" className="stroke-white/15 stroke-[0.8] stroke-dasharray-[2_2]" />
              </svg>

              {/* Map Location Pins */}
              {filteredLocations.map((loc) => {
                const isSelected = selectedLoc.id === loc.id;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setSelectedLoc(loc)}
                    style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-all duration-300 z-20 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                  >
                    <div className="relative flex flex-col items-center">
                      
                      {/* Pin Icon with Glow */}
                      <div className={`p-2 rounded-full border-2 transition-all ${
                        isSelected
                          ? 'bg-[#FFE600] text-[#061A42] border-white shadow-[0_0_20px_#FFE600]'
                          : 'bg-[#0B2B6B] text-white border-white/40 hover:border-[#FFE600]'
                      }`}>
                        <MapPin className="w-5 h-5" />
                      </div>

                      {/* City Name Label Tag */}
                      <span className={`text-[10px] font-bebas tracking-wide px-2 py-0.5 rounded-md mt-1 whitespace-nowrap shadow-md transition-colors ${
                        isSelected
                          ? 'bg-[#FFE600] text-[#061A42] font-bold'
                          : 'bg-[#061A42]/90 text-white border border-white/20'
                      }`}>
                        {loc.city}
                      </span>

                    </div>
                  </button>
                );
              })}

            </div>

            {/* Map Legend */}
            <div className="relative z-10 flex items-center justify-between text-[11px] text-blue-200 border-t border-white/10 pt-3">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600] inline-block" />
                Sede Seleccionada
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-white inline-block" />
                Gimnasios Afiliados
              </span>
            </div>

          </div>

          {/* Right Column: Selected Venue Details Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F8FAFC] border-3 border-[#0B2B6B] rounded-3xl p-6 shadow-xl space-y-6">
              
              {/* Venue Header */}
              <div className="space-y-2 border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between">
                  <span className="bg-[#0B2B6B] text-white font-bebas text-xs px-3 py-1 rounded-full">
                    {selectedLoc.zone}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#0B2B6B]" />
                    {selectedLoc.city}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-black text-[#061A42] uppercase leading-tight">
                  {selectedLoc.name}
                </h3>

                <p className="text-sm font-bold text-[#28B838] flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#0B2B6B]" />
                  Club Local: {selectedLoc.club}
                </p>
              </div>

              {/* Venue Specs Grid */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                
                <div className="bg-white p-3 rounded-2xl border border-gray-200 space-y-1">
                  <span className="text-gray-500 block text-[10px] font-bold uppercase">CAPACIDAD</span>
                  <span className="text-sm font-black text-[#061A42] flex items-center gap-1">
                    <Users className="w-4 h-4 text-[#0B2B6B]" />
                    {selectedLoc.capacity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} Espectadores
                  </span>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-gray-200 space-y-1">
                  <span className="text-gray-500 block text-[10px] font-bold uppercase">SUPERFICIE</span>
                  <span className="text-sm font-black text-[#061A42] flex items-center gap-1 truncate">
                    <Trophy className="w-4 h-4 text-[#28B838]" />
                    {selectedLoc.surface}
                  </span>
                </div>

              </div>

              {/* Address Box */}
              <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-2">
                <span className="text-xs font-bold text-[#0B2B6B] block uppercase tracking-wider">
                  DIRECCIÓN Y ACCESO:
                </span>
                <p className="text-xs text-gray-700 font-medium leading-relaxed">
                  {selectedLoc.address}
                </p>
              </div>

              {/* Next Match Box */}
              <div className="bg-[#061A42] text-white p-4 rounded-2xl space-y-2 border-2 border-[#FFE600]">
                <span className="text-[10px] font-bebas text-[#FFE600] tracking-wider block">
                  PRÓXIMO ENCUENTRO PROGRAMADO
                </span>
                <p className="text-xs font-bold text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FFE600] flex-shrink-0" />
                  {selectedLoc.nextMatch}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedLoc.name} ${selectedLoc.city} Uruguay`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#0B2B6B] hover:bg-[#061A42] text-white font-bebas text-base py-3 rounded-2xl border-2 border-[#0B2B6B] flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer text-center"
              >
                <Navigation className="w-4 h-4 text-[#FFE600]" />
                ABRIR CÓMO LLEGAR EN GOOGLE MAPS
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
