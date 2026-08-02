'use client';

import React, { useState, useEffect } from 'react';
import { Accessibility, Eye, Type, Contrast, Sun, Moon, Check, X, RotateCcw } from 'lucide-react';

export const AccessibilityWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [highContrast, setHighContrast] = useState<boolean>(false);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  // Load saved preferences on mount on client side
  useEffect(() => {
    queueMicrotask(() => {
      const savedFont = localStorage.getItem('lcb_font_size') as 'normal' | 'large' | 'xlarge' | null;
      if (savedFont && ['normal', 'large', 'xlarge'].includes(savedFont)) {
        setFontSize(savedFont);
      }
      const savedContrast = localStorage.getItem('lcb_high_contrast');
      if (savedContrast !== null) {
        setHighContrast(savedContrast === 'true');
      }
      const savedMotion = localStorage.getItem('lcb_reduce_motion');
      if (savedMotion !== null) {
        setReduceMotion(savedMotion === 'true');
      }
    });
  }, []);

  // Apply Font Size changes to HTML root
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('font-scale-large', 'font-scale-xlarge');
    if (fontSize === 'large') {
      root.classList.add('font-scale-large');
    } else if (fontSize === 'xlarge') {
      root.classList.add('font-scale-xlarge');
    }
    localStorage.setItem('lcb_font_size', fontSize);
  }, [fontSize]);

  // Apply High Contrast mode
  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
    localStorage.setItem('lcb_high_contrast', String(highContrast));
  }, [highContrast]);

  // Apply Reduce Motion mode
  useEffect(() => {
    const root = document.documentElement;
    if (reduceMotion) {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }
    localStorage.setItem('lcb_reduce_motion', String(reduceMotion));
  }, [reduceMotion]);

  const resetSettings = () => {
    setFontSize('normal');
    setHighContrast(false);
    setReduceMotion(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Accessibility Trigger Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#061A42] text-[#FFE600] border-3 border-[#FFE600] shadow-[0_4px_20px_rgba(6,26,66,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FFE600]"
        aria-label="Ajustes de Accesibilidad e Inclusión"
        title="Accesibilidad e Inclusión LCB"
      >
        <Accessibility className="w-8 h-8 stroke-[2.5]" />
      </button>

      {/* Floating Panel Drawer */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-80 sm:w-88 bg-[#061A42] border-4 border-[#FFE600] text-white rounded-3xl p-5 shadow-2xl space-y-5 animate-in fade-in slide-in-from-bottom-4">
          
          {/* Panel Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-3">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-[#FFE600]" />
              <h3 className="font-bebas text-xl text-white font-bold tracking-wider">
                ACCESIBILIDAD LCB
              </h3>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-gray-300 hover:text-white"
              aria-label="Cerrar panel de accesibilidad"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Setting 1: Font Size Adjustment */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-bebas text-gray-300">
              <span className="flex items-center gap-1.5 text-white">
                <Type className="w-4 h-4 text-[#FFE600]" />
                TAMAÑO DE TEXTO
              </span>
              <span className="text-[#FFE600] uppercase font-bold">
                {fontSize === 'normal' ? 'Normal (100%)' : fontSize === 'large' ? 'Grande (115%)' : 'Extra Grande (130%)'}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFontSize('normal')}
                className={`py-2 px-3 rounded-xl border text-xs font-bebas font-bold transition-all cursor-pointer ${
                  fontSize === 'normal'
                    ? 'bg-[#FFE600] text-[#061A42] border-[#FFE600] shadow-md'
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                }`}
              >
                A Normal
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`py-2 px-3 rounded-xl border text-sm font-bebas font-bold transition-all cursor-pointer ${
                  fontSize === 'large'
                    ? 'bg-[#FFE600] text-[#061A42] border-[#FFE600] shadow-md'
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                }`}
              >
                A+ Grande
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`py-2 px-3 rounded-xl border text-base font-bebas font-bold transition-all cursor-pointer ${
                  fontSize === 'xlarge'
                    ? 'bg-[#FFE600] text-[#061A42] border-[#FFE600] shadow-md'
                    : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
                }`}
              >
                A++ X-Grande
              </button>
            </div>
          </div>

          {/* Setting 2: High Contrast Toggle */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-bebas text-gray-300">
              <span className="flex items-center gap-1.5 text-white">
                <Contrast className="w-4 h-4 text-[#FFE600]" />
                ALTO CONTRASTE LCB
              </span>
              <span className="text-gray-300">WCAG AAA</span>
            </div>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bebas font-bold transition-all flex items-center justify-between cursor-pointer ${
                highContrast
                  ? 'bg-[#28B838] text-white border-white shadow-md'
                  : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
              }`}
            >
              <span>{highContrast ? '⚡ ALTO CONTRASTE ACTIVADO' : 'MODO ESTÁNDAR COLOR'}</span>
              <div className={`w-5 h-5 rounded-full border border-white flex items-center justify-center ${highContrast ? 'bg-white text-[#28B838]' : 'bg-transparent'}`}>
                {highContrast && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          </div>

          {/* Setting 3: Reduce Motion */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-bebas text-gray-300">
              <span className="flex items-center gap-1.5 text-white">
                <Eye className="w-4 h-4 text-[#FFE600]" />
                REDUCIR ANIMACIONES
              </span>
            </div>

            <button
              onClick={() => setReduceMotion(!reduceMotion)}
              className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bebas font-bold transition-all flex items-center justify-between cursor-pointer ${
                reduceMotion
                  ? 'bg-[#28B838] text-white border-white shadow-md'
                  : 'bg-white/10 text-gray-200 border-white/20 hover:bg-white/20'
              }`}
            >
              <span>{reduceMotion ? 'MOVIMIENTO REDUCIDO' : 'ANIMACIONES DYNAMIC'}</span>
              <div className={`w-5 h-5 rounded-full border border-white flex items-center justify-center ${reduceMotion ? 'bg-white text-[#28B838]' : 'bg-transparent'}`}>
                {reduceMotion && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          </div>

          {/* Reset Action */}
          <div className="pt-2 border-t border-white/10 flex justify-end">
            <button
              onClick={resetSettings}
              className="text-xs font-bebas text-gray-400 hover:text-[#FFE600] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              RESTABLECER VALORES
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
