import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luuppi ry',
    short_name: 'Luuppi',
    description:
      'Luuppi ry is subject assosiation for students of mathematics, statistical data analysis and computer science at Tampere University.',
    start_url: '/',
    display: 'standalone',
    background_color: '#5c61a3',
    theme_color: '#5c61a3',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: '/icon1.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon2.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
