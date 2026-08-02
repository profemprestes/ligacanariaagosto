'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, Calendar, Trophy, MapPin, Users, Share2, Home, Flame, Newspaper } from 'lucide-react';

interface NavbarProps {
  onOpenFixtureModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenFixtureModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '/', icon: Home },
    { name: 'TORNEO & TABLA', href: '/torneo', icon: Trophy },
    { name: 'CLUBES 3D', href: '/clubes', icon: Users },
    { name: 'SEDES CANELONES', href: '/sedes', icon: MapPin },
    { name: 'FIGURAS LCB', href: '/estadisticas', icon: Flame },
    { name: 'NOTICIAS', href: '/noticias', icon: Newspaper },
    { name: 'REDES SOCIALES', href: '/#redes', icon: Share2 },
  ];

  return (
    <>
      {/* Backdrop for Mobile Navigation overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/45 backdrop-blur-xs z-40 lg:hidden pointer-events-auto animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 pt-3 md:pt-5 px-4 sm:px-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        {/* Off-Center Floating Navigation Container */}
        <div 
          className={`w-full flex items-center justify-between gap-4 px-4 py-2.5 sm:px-6 sm:py-3 rounded-2xl md:rounded-full border transition-all duration-300 shadow-xl ${
            isScrolled
              ? 'bg-white/95 backdrop-blur-md border-[#0B2B6B]/15 shadow-2xl translate-y-0'
              : 'bg-white/85 backdrop-blur-sm border-white/60 shadow-lg'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Logo size={46} showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2.5 py-1.5 rounded-full text-xs xl:text-sm font-extrabold transition-all flex items-center gap-1.5 tracking-wider font-bebas ${
                    isActive
                      ? 'bg-[#0B2B6B] text-[#FFE600] shadow-sm'
                      : 'text-[#061A42] hover:text-[#0B2B6B] hover:bg-[#28B838]/10'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FFE600]' : 'text-[#28B838]'}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button (Yellow Accent) */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenFixtureModal}
              className="bg-[#FFE600] hover:bg-[#E6D000] text-[#061A42] font-bebas tracking-wider text-base sm:text-lg font-bold px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-2 pulse-yellow cursor-pointer"
            >
              <Flame className="w-4 h-4 text-[#061A42] fill-[#061A42] animate-bounce" />
              <span>VER FIXTURE</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#F4F6F8] text-[#061A42] hover:bg-[#0B2B6B] hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden pointer-events-auto mt-2 max-w-md mx-auto bg-white border-2 border-[#061A42] rounded-3xl p-5 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[calc(100vh-120px)] overflow-y-auto">
          <div className="flex flex-col gap-3">
            <div className="text-xs font-extrabold text-[#28B838] font-bebas tracking-widest px-2 uppercase">
              PÁGINAS LIGA CANARIA DE BASKET
            </div>
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-base font-bold flex items-center justify-between border transition-colors ${
                    isActive
                      ? 'bg-[#0B2B6B] text-[#FFE600] border-[#061A42]'
                      : 'text-[#061A42] hover:bg-[#28B838]/15 border-gray-100'
                  }`}
                >
                  <span className="flex items-center gap-2.5 font-bebas tracking-wider text-lg">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-[#FFE600]' : 'text-[#28B838]'}`} />
                    {link.name}
                  </span>
                  <span className="font-extrabold">→</span>
                </Link>
              );
            })}
            <div className="pt-2 border-t border-gray-200 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenFixtureModal) onOpenFixtureModal();
                }}
                className="w-full bg-[#FFE600] text-[#061A42] font-bebas text-xl font-bold py-3 rounded-2xl border-2 border-[#061A42] shadow-[3px_3px_0px_#061A42] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                VER FIXTURE COMPLETO
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
};
