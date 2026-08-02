import type {Metadata} from 'next';
import { Bebas_Neue, Inter, Syne } from 'next/font/google';
import './globals.css';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const syne = Syne({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-syne',
});

export const metadata: Metadata = {
  title: 'Liga Canaria de Basket | Canelones, Uruguay',
  description: 'Portal oficial de la Liga Canaria de Basket. Fixtures, tabla de posiciones, clubes de Canelones, sedes y noticias del básquetbol regional.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`scroll-smooth ${bebas.variable} ${inter.variable} ${syne.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var _fetch = window.fetch;
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return _fetch; },
                    set: function(v) { _fetch = v; },
                    configurable: true,
                    enumerable: true
                  });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white text-[#061A42] antialiased selection:bg-[#FFE600] selection:text-[#061A42]">
        {children}
      </body>
    </html>
  );
}

