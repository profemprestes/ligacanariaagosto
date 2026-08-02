export interface Club {
  id: string;
  name: string;
  city: string;
  serie: 'SERIE A' | 'SERIE B';
  founded: string;
  color: string;
  accentColor: string;
  badgeSymbol: string;
  logo?: string;
  championships: number;
  stadium: string;
  captain: string;
  stats: {
    pg: number;
    pp: number;
    pts: number;
  };
  description: string;
  image: string;
}

export interface Venue {
  id: string;
  name: string;
  city: string;
  address: string;
  capacity: number;
  surface: string;
  image: string;
  nextMatch: string;
  clubs: string[];
  coordinates: { x: number; y: number };
}

export interface Match {
  id: string;
  round: string;
  date: string;
  time: string;
  venue: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  status: 'FINAL' | 'PRÓXIMO' | 'EN VIVO';
  category: string;
  serie?: 'SERIE A' | 'SERIE B';
}

export interface Standing {
  pos: number;
  team: string;
  serie: 'SERIE A' | 'SERIE B';
  pj: number;
  pg: number;
  pp: number;
  pf: number;
  pc: number;
  dif: number;
  pts: number;
}

export interface Article {
  id: string;
  tag: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
}

export const CLUBES_CANELONES: Club[] = [
  // SERIE A
  {
    id: 'sauce-bbc',
    name: 'Sauce BBC',
    city: 'Sauce, Canelones',
    serie: 'SERIE A',
    founded: '1968',
    color: '#28B838',
    accentColor: '#0B2B6B',
    badgeSymbol: '🌿',
    logo: '/equipos/logo_sauce.jpg',
    championships: 4,
    stadium: 'Gimnasio Municipal de Sauce',
    captain: 'Facundo "Rayo" Silva',
    stats: { pg: 9, pp: 1, pts: 19 },
    description: 'Institución mítica de la ciudad natal de Artigas, líder indiscutido de la Serie A con un juego físico y veloz.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'salinas-all-branca',
    name: 'Salinas All Branca',
    city: 'Salinas, Costa de Oro',
    serie: 'SERIE A',
    founded: '1984',
    color: '#0B2B6B',
    accentColor: '#FFE600',
    badgeSymbol: '🍸',
    championships: 3,
    stadium: 'Polideportivo Costero Salinas',
    captain: 'Lucas "Costero" Pereyra',
    stats: { pg: 7, pp: 3, pts: 17 },
    description: 'El poderoso conjunto de la Costa de Oro, caracterizado por su tiro perimetral efectivo y mística competitiva.',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'albion-pan-de-azucar',
    name: 'Albion Pan de Azúcar',
    city: 'Pan de Azúcar',
    serie: 'SERIE A',
    founded: '1952',
    color: '#0B2B6B',
    accentColor: '#FFE600',
    badgeSymbol: '🦅',
    logo: '/equipos/logo_albion.jpg',
    championships: 5,
    stadium: 'Gimnasio Albion Pan de Azúcar',
    captain: 'Gonzalo "El Canario" Fernández',
    stats: { pg: 8, pp: 2, pts: 18 },
    description: 'Baluarte del básquetbol regional con una hinchada apasionada y un plantel experimentado.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'esqueleto-atlantida',
    name: 'Esqueleto Atlántida',
    city: 'Atlántida, Costa de Oro',
    serie: 'SERIE A',
    founded: '2015',
    color: '#061A42',
    accentColor: '#28B838',
    badgeSymbol: '💀',
    championships: 2,
    stadium: 'Complejo Deportivo Atlántida',
    captain: 'Matías "Hueso" Martínez',
    stats: { pg: 6, pp: 4, pts: 16 },
    description: 'Equipo revelación de las últimas temporadas, referente de la zona balnearia de Canelones.',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'tala',
    name: 'Tala',
    city: 'Tala, Canelones',
    serie: 'SERIE A',
    founded: '1975',
    color: '#28B838',
    accentColor: '#FFE600',
    badgeSymbol: '🌾',
    championships: 1,
    stadium: 'Gimnasio Abierto Tala',
    captain: 'Diego "Tala" Cabrera',
    stats: { pg: 1, pp: 9, pts: 11 },
    description: 'Representante del interior canario, con garra inquebrantable y gran sentido de pertenencia.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'canarios-canelones',
    name: 'Canarios de Canelones',
    city: 'Canelones Capital',
    serie: 'SERIE A',
    founded: '1938',
    color: '#FFE600',
    accentColor: '#061A42',
    badgeSymbol: '🐤',
    logo: '/equipos/logo_canarios.jpg',
    championships: 3,
    stadium: 'Gimnasio Complejo Plaza de Deportes',
    captain: 'Nicolás "Canario" Bauzá',
    stats: { pg: 5, pp: 5, pts: 15 },
    description: 'El cuadro de la capital departamental, símbolo de tradición y semillero de jóvenes promesas.',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'santa-lucia',
    name: 'Santa Lucía',
    city: 'Santa Lucía, Canelones',
    serie: 'SERIE A',
    founded: '1961',
    color: '#061A42',
    accentColor: '#28B838',
    badgeSymbol: '🏰',
    logo: '/equipos/logo_santalucia.jpg',
    championships: 2,
    stadium: 'Gimnasio Municipal de Santa Lucía',
    captain: 'Santiago "Chino" Morales',
    stats: { pg: 2, pp: 8, pts: 12 },
    description: 'Mística a orillas del río Santa Lucía, formador constante de talentos para selecciones locales.',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'juanico',
    name: 'Juanicó',
    city: 'Juanicó, Canelones',
    serie: 'SERIE A',
    founded: '1945',
    color: '#0B2B6B',
    accentColor: '#28B838',
    badgeSymbol: '🍇',
    championships: 1,
    stadium: 'Polideportivo Juanicó',
    captain: 'Rodrigo "Vino" Suárez',
    stats: { pg: 3, pp: 7, pts: 13 },
    description: 'Orgullo de la zona vitivinícola canaria, aguerrido y luchador en cada posesión de juego.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'iguanas-las-piedras',
    name: 'Iguanas de Las Piedras',
    city: 'Las Piedras, Canelones',
    serie: 'SERIE A',
    founded: '2018',
    color: '#28B838',
    accentColor: '#FFE600',
    badgeSymbol: '🦎',
    championships: 1,
    stadium: 'Polideportivo Municipal Las Piedras',
    captain: 'Bruno "Iguana" Rossi',
    stats: { pg: 4, pp: 6, pts: 14 },
    description: 'Franquicia joven y dinámica de la ciudad pedrense, caracterizada por su intensidad defensiva.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  },

  // SERIE B
  {
    id: 'ateneo-piriapolis',
    name: 'Ateneo Piriápolis',
    city: 'Piriápolis',
    serie: 'SERIE B',
    founded: '1934',
    color: '#0B2B6B',
    accentColor: '#FFE600',
    badgeSymbol: '🏛️',
    championships: 3,
    stadium: 'Gimnasio Ateneo Piriápolis',
    captain: 'Agustín "Pirata" Ramos',
    stats: { pg: 7, pp: 1, pts: 15 },
    description: 'Líder de la Serie B, representante de la ciudad balnearia del este con un básquet de alta jerarquía.',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'nacional-montevideo',
    name: 'Nacional Montevideo',
    city: 'Montevideo / Canelones',
    serie: 'SERIE B',
    founded: '1899',
    color: '#0B2B6B',
    accentColor: '#28B838',
    badgeSymbol: '🔴',
    championships: 2,
    stadium: 'Gimnasio Complejo Canelones',
    captain: 'Felipe "Tricolor" Méndez',
    stats: { pg: 6, pp: 2, pts: 14 },
    description: 'Escuadra invitada de gran convocatoria que engalana el campeonato de la Divisional B.',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sauce-azul',
    name: 'Sauce Azul',
    city: 'Sauce, Canelones',
    serie: 'SERIE B',
    founded: '2021',
    color: '#0B2B6B',
    accentColor: '#FFE600',
    badgeSymbol: '💙',
    championships: 0,
    stadium: 'Gimnasio Municipal de Sauce',
    captain: 'Joaquín "Azul" Castro',
    stats: { pg: 3, pp: 5, pts: 11 },
    description: 'Segunda plantilla del básquetbol sauceño, proyectando jóvenes talentos a la máxima categoría.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'empalme-olmos',
    name: 'Empalme Olmos',
    city: 'Empalme Olmos, Canelones',
    serie: 'SERIE B',
    founded: '1950',
    color: '#28B838',
    accentColor: '#061A42',
    badgeSymbol: '🚂',
    championships: 1,
    stadium: 'Gimnasio Empalme Olmos',
    captain: 'Esteban "Riel" Olivera',
    stats: { pg: 5, pp: 3, pts: 13 },
    description: 'La fuerza ferroviaria de Canelones con un juego colectivo sólido y afición local entusiasta.',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'esqueleto-b',
    name: 'Esqueleto B',
    city: 'Atlántida, Costa de Oro',
    serie: 'SERIE B',
    founded: '2023',
    color: '#061A42',
    accentColor: '#FFE600',
    badgeSymbol: '☠️',
    championships: 0,
    stadium: 'Complejo Deportivo Atlántida',
    captain: 'Mateo "Junior" Sosa',
    stats: { pg: 1, pp: 7, pts: 9 },
    description: 'Filial de Esqueleto Atlántida en la Serie B, enfocada en la formación y desarrollo competitivo.',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'san-miguel-cerrillos',
    name: 'San Miguel de Los Cerrillos',
    city: 'Los Cerrillos, Canelones',
    serie: 'SERIE B',
    founded: '1965',
    color: '#FFE600',
    accentColor: '#0B2B6B',
    badgeSymbol: '⚜️',
    championships: 1,
    stadium: 'Gimnasio Los Cerrillos',
    captain: 'Gonzalo "San Miguel" Díaz',
    stats: { pg: 2, pp: 6, pts: 10 },
    description: 'Cuadro tradicional de la zona poniente canaria, en plena lucha por el ascenso a la Serie A.',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  }
];

export const SEDES_CANELONES: Venue[] = [
  {
    id: 'sauce-municipal',
    name: 'Gimnasio Municipal de Sauce',
    city: 'Sauce',
    address: 'Calle Carmelo René González 320, Sauce',
    capacity: 1400,
    surface: 'Parquet de Lapacho Tratado',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Sauce BBC vs. Salinas All Branca (Sábado 20:30 hs)',
    clubs: ['Sauce BBC', 'Sauce Azul'],
    coordinates: { x: 55, y: 48 }
  },
  {
    id: 'salinas-polideportivo',
    name: 'Polideportivo Costero Salinas',
    city: 'Salinas',
    address: 'Ruta Interbalnearia Km 38.500, Salinas',
    capacity: 1200,
    surface: 'Parquet Técnico con Iluminación LED',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Salinas All Branca vs. Esqueleto Atlántida (Viernes 21:00 hs)',
    clubs: ['Salinas All Branca'],
    coordinates: { x: 85, y: 75 }
  },
  {
    id: 'albion-pandeazucar',
    name: 'Gimnasio Albion Pan de Azúcar',
    city: 'Pan de Azúcar',
    address: 'Av. Félix de Lizarza y Rivera, Pan de Azúcar',
    capacity: 1600,
    surface: 'Parquet Flotante Guatambú',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Albion Pan de Azúcar vs. Tala (Sábado 19:30 hs)',
    clubs: ['Albion Pan de Azúcar'],
    coordinates: { x: 92, y: 80 }
  },
  {
    id: 'atlantida-complejo',
    name: 'Complejo Deportivo Atlántida',
    city: 'Atlántida',
    address: 'Ruta 11 y Av. Circunvalación, Atlántida',
    capacity: 1300,
    surface: 'Parquet Profesional FIBA',
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Esqueleto Atlántida vs. Canarios de Canelones (Domingo 19:00 hs)',
    clubs: ['Esqueleto Atlántida', 'Esqueleto B'],
    coordinates: { x: 88, y: 70 }
  },
  {
    id: 'polideportivo-laspiedras',
    name: 'Polideportivo Municipal Las Piedras',
    city: 'Las Piedras',
    address: 'Av. Bicentenario esq. Ruta 67, Las Piedras',
    capacity: 2200,
    surface: 'Parquet Flotante Guatambú',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Iguanas de Las Piedras vs. Juanicó (Viernes 20:30 hs)',
    clubs: ['Iguanas de Las Piedras'],
    coordinates: { x: 30, y: 70 }
  },
  {
    id: 'municipal-canelones',
    name: 'Gimnasio Complejo Plaza de Deportes',
    city: 'Canelones Capital',
    address: 'Calle Monegal y Treinta y Tres, Canelones',
    capacity: 1500,
    surface: 'Piso Técnico Sintético Deportivo',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Canarios de Canelones vs. Santa Lucía (Sábado 21:00 hs)',
    clubs: ['Canarios de Canelones', 'Nacional Montevideo'],
    coordinates: { x: 45, y: 35 }
  },
  {
    id: 'ateneo-piriapolis-venue',
    name: 'Gimnasio Ateneo Piriápolis',
    city: 'Piriápolis',
    address: 'Calle Piria y Tucumán, Piriápolis',
    capacity: 1500,
    surface: 'Parquet Multicapa Aprobado',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop',
    nextMatch: 'Ateneo Piriápolis vs. Empalme Olmos (Sábado 20:00 hs)',
    clubs: ['Ateneo Piriápolis'],
    coordinates: { x: 95, y: 85 }
  }
];

export const POSICIONES_SERIE_A: Standing[] = [
  { pos: 1, team: 'Sauce BBC', serie: 'SERIE A', pj: 10, pg: 9, pp: 1, pf: 820, pc: 710, dif: +110, pts: 19 },
  { pos: 2, team: 'Albion Pan de Azúcar', serie: 'SERIE A', pj: 10, pg: 8, pp: 2, pf: 795, pc: 720, dif: +75, pts: 18 },
  { pos: 3, team: 'Salinas All Branca', serie: 'SERIE A', pj: 10, pg: 7, pp: 3, pts: 17, pf: 780, pc: 735, dif: +45 },
  { pos: 4, team: 'Esqueleto Atlántida', serie: 'SERIE A', pj: 10, pg: 6, pp: 4, pts: 16, pf: 760, pc: 740, dif: +20 },
  { pos: 5, team: 'Canarios de Canelones', serie: 'SERIE A', pj: 10, pg: 5, pp: 5, pts: 15, pf: 730, pc: 725, dif: +5 },
  { pos: 6, team: 'Iguanas de Las Piedras', serie: 'SERIE A', pj: 10, pg: 4, pp: 6, pts: 14, pf: 715, pc: 740, dif: -25 },
  { pos: 7, team: 'Juanicó', serie: 'SERIE A', pj: 10, pg: 3, pp: 7, pts: 13, pf: 690, pc: 730, dif: -40 },
  { pos: 8, team: 'Santa Lucía', serie: 'SERIE A', pj: 10, pg: 2, pp: 8, pts: 12, pf: 670, pc: 735, dif: -65 },
  { pos: 9, team: 'Tala', serie: 'SERIE A', pj: 10, pg: 1, pp: 9, pts: 11, pf: 640, pc: 765, dif: -125 }
];

export const POSICIONES_SERIE_B: Standing[] = [
  { pos: 1, team: 'Ateneo Piriápolis', serie: 'SERIE B', pj: 8, pg: 7, pp: 1, pf: 640, pc: 540, dif: +100, pts: 15 },
  { pos: 2, team: 'Nacional Montevideo', serie: 'SERIE B', pj: 8, pg: 6, pp: 2, pf: 615, pc: 550, dif: +65, pts: 14 },
  { pos: 3, team: 'Empalme Olmos', serie: 'SERIE B', pj: 8, pg: 5, pp: 3, pf: 580, pc: 560, dif: +20, pts: 13 },
  { pos: 4, team: 'Sauce Azul', serie: 'SERIE B', pj: 8, pg: 3, pp: 5, pf: 540, pc: 570, dif: -30, pts: 11 },
  { pos: 5, team: 'San Miguel de Los Cerrillos', serie: 'SERIE B', pj: 8, pg: 2, pp: 6, pf: 510, pc: 565, dif: -55, pts: 10 },
  { pos: 6, team: 'Esqueleto B', serie: 'SERIE B', pj: 8, pg: 1, pp: 7, pf: 490, pc: 590, dif: -100, pts: 9 }
];

export const POSICIONES_TABLA: Standing[] = [...POSICIONES_SERIE_A, ...POSICIONES_SERIE_B];

export const MATCHES_PROXIMOS: Match[] = [
  {
    id: 'm1',
    round: 'FECHA 11 - SERIE A',
    date: 'VIERNES 8 AGOSTO',
    time: '20:30 HS',
    venue: 'Gimnasio Municipal de Sauce',
    homeTeam: 'Sauce BBC',
    awayTeam: 'Salinas All Branca',
    status: 'PRÓXIMO',
    category: 'Primera División',
    serie: 'SERIE A'
  },
  {
    id: 'm2',
    round: 'FECHA 11 - SERIE A',
    date: 'SÁBADO 9 AGOSTO',
    time: '19:30 HS',
    venue: 'Gimnasio Albion Pan de Azúcar',
    homeTeam: 'Albion Pan de Azúcar',
    awayTeam: 'Esqueleto Atlántida',
    status: 'PRÓXIMO',
    category: 'Primera División',
    serie: 'SERIE A'
  },
  {
    id: 'm3',
    round: 'FECHA 11 - SERIE A',
    date: 'SÁBADO 9 AGOSTO',
    time: '21:00 HS',
    venue: 'Polideportivo Municipal Las Piedras',
    homeTeam: 'Iguanas de Las Piedras',
    awayTeam: 'Juanicó',
    status: 'PRÓXIMO',
    category: 'Primera División',
    serie: 'SERIE A'
  },
  {
    id: 'm4',
    round: 'FECHA 9 - SERIE B',
    date: 'DOMINGO 10 AGOSTO',
    time: '18:00 HS',
    venue: 'Gimnasio Ateneo Piriápolis',
    homeTeam: 'Ateneo Piriápolis',
    awayTeam: 'Nacional Montevideo',
    status: 'PRÓXIMO',
    category: 'Divisional B',
    serie: 'SERIE B'
  },
  {
    id: 'm5',
    round: 'FECHA 9 - SERIE B',
    date: 'DOMINGO 10 AGOSTO',
    time: '20:00 HS',
    venue: 'Gimnasio Empalme Olmos',
    homeTeam: 'Empalme Olmos',
    awayTeam: 'Sauce Azul',
    status: 'PRÓXIMO',
    category: 'Divisional B',
    serie: 'SERIE B'
  },
  {
    id: 'm6',
    round: 'FECHA 10 - RESULTADO RECIENTE',
    date: 'ÚLTIMO SÁBADO',
    time: 'FINAL',
    venue: 'Gimnasio Municipal de Sauce',
    homeTeam: 'Sauce BBC',
    awayTeam: 'Canarios de Canelones',
    homeScore: 82,
    awayScore: 74,
    status: 'FINAL',
    category: 'Primera División',
    serie: 'SERIE A'
  }
];

export const EDITORIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    tag: 'ANÁLISIS EDITORIAL',
    title: 'Sauce BBC y Ateneo Piriápolis lideran las posiciones en la Liga Canaria',
    summary: 'Revisamos la apasionante lucha en la Serie A con Sauce BBC al frente y la implacable campaña de Ateneo Piriápolis en la Serie B.',
    date: '02 AGOSTO 2026',
    readTime: '4 MIN LECTURA',
    author: 'Redacción Liga Canaria',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-2',
    tag: 'SERIE A VS SERIE B',
    title: 'Batalla de franquicias: El nivel competitivo de las 15 instituciones',
    summary: 'Con 9 equipos en la Serie A y 6 en la Serie B, la Liga Canaria de Basket celebra una temporada récord en convocatoria y nivel técnico.',
    date: '30 JULIO 2026',
    readTime: '3 MIN LECTURA',
    author: 'Depto. de Estadísticas LCB',
    image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'art-3',
    tag: 'TALENTOS CANARIOS',
    title: 'Iguanas de Las Piedras y Salinas All Branca agitan la tabla de posiciones',
    summary: 'Las actuaciones estelares de las figuras locales mantienen en vilo la clasificación a la Copa de Oro 2026.',
    date: '27 JULIO 2026',
    readTime: '5 MIN LECTURA',
    author: 'Observatorio Deportivo',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=800&auto=format&fit=crop'
  }
];

export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1RnSzyweir/',
  instagram: 'https://www.instagram.com/ligacanariabasket?igsh=ZXdicTQyOGNqZDVs',
  handleInstagram: '@ligacanariabasket',
  handleFacebook: 'Liga Canaria de Basket Oficial'
};

