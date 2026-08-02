'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 56,
  showText = true,
  variant = 'full',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Liga Canaria Image Logo */}
      <div 
        className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo_liga_canaria.png"
          alt="Logo Liga Canaria de Basket"
          width={120}
          height={120}
          className="w-full h-full object-contain drop-shadow-md"
          priority
        />
      </div>

      {showText && variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className="font-bebas text-2xl tracking-wider text-[#0B2B6B] uppercase font-bold">
            LIGA CANARIA
          </span>
          <span className="font-bebas text-lg tracking-widest text-[#28B838] uppercase font-bold flex items-center gap-1.5">
            DE BASKET
            <span className="inline-block w-2 h-2 rounded-full bg-[#FFE600] animate-ping" />
          </span>
        </div>
      )}
    </div>
  );
};

