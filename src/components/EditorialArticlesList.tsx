'use client';

import React from 'react';
import Image from 'next/image';
import { EDITORIAL_ARTICLES } from '../data/ligaData';
import { ArrowUpRight } from 'lucide-react';

export const EditorialArticlesList: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in">
      {EDITORIAL_ARTICLES.map((art) => (
        <article 
          key={art.id}
          className="bg-white rounded-3xl border-3 border-[#061A42] p-6 shadow-[6px_6px_0px_#061A42] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
        >
          <div className="md:col-span-5 h-48 rounded-2xl overflow-hidden border-2 border-[#061A42] relative">
            <Image 
              src={art.image} 
              alt={art.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500" 
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-3 left-3 bg-[#FFE600] text-[#061A42] px-2.5 py-1 rounded-full font-bebas text-xs font-bold border border-[#061A42] z-10">
              {art.tag}
            </span>
          </div>

          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-3 text-xs font-extrabold text-gray-500 font-bebas">
              <span>{art.date}</span>
              <span>•</span>
              <span className="text-[#28B838]">{art.readTime}</span>
            </div>

            <h3 className="font-display text-2xl font-extrabold uppercase text-[#061A42] leading-snug text-balance">
              {art.title}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {art.summary}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-[#0B2B6B]">
                Por {art.author}
              </span>
              <a 
                href="/noticias" 
                className="inline-flex items-center gap-1 text-xs font-bold font-bebas bg-[#0B2B6B] text-[#FFE600] px-3 py-1.5 rounded-full border border-[#061A42]"
              >
                LEER COMPLETO <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};
