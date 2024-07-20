import type { Config } from 'tailwindcss';

const config: Config = {
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#787eba',
          accent: '#b166cc',
        },
      },
    ],
  },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: '#ebecfa',
          100: '#d6daf5',
          200: '#adb5eb',
          300: '#858fe0',
          400: '#5c6ad6',
          500: '#3345cc',
          600: '#2937a3',
          700: '#1f297a',
          800: '#141c52',
          900: '#0a0e29',
          950: '#050714',
        },
        background: {
          50: '#f5f5fb',
          100: '#dadaf1',
          200: '#b4b4e4',
          300: '#8f8fd6',
          400: '#6969c9',
          500: '#4444bb',
          600: '#363696',
          700: '#292970',
          800: '#1b1b4b',
          900: '#0e0e25',
          950: '#070713',
        },
        primary: {
          50: '#efeff6',
          100: '#dedfed',
          200: '#bec0da',
          300: '#9da0c8',
          400: '#7c80b6',
          500: '#5c61a3',
          600: '#494d83',
          700: '#373a62',
          800: '#252741',
          900: '#121321',
          950: '#090a10',
        },
        secondary: {
          50: '#eeeff6',
          100: '#dddfee',
          200: '#bcbedc',
          300: '#9a9ecb',
          400: '#787eba',
          500: '#575da8',
          600: '#454b87',
          700: '#343865',
          800: '#232543',
          900: '#111322',
          950: '#090911',
        },
        accent: {
          50: '#f5ecf9',
          100: '#ebd9f2',
          200: '#d8b3e6',
          300: '#c48cd9',
          400: '#b166cc',
          500: '#9d40bf',
          600: '#7e3399',
          700: '#5e2673',
          800: '#3f194d',
          900: '#1f0d26',
          950: '#100613',
        },
      },
      typography: ({ theme }: any) => ({
        custom: {
          css: {
            '--tw-prose-body': theme('colors.text[950]'),
            '--tw-prose-headings': theme('colors.text[950]'),
            '--tw-prose-lead': theme('colors.text[950]'),
            '--tw-prose-links': theme('colors.text[950]'),
            '--tw-prose-bold': theme('colors.text[950]'),
            '--tw-prose-counters': theme('colors.text[950]'),
            '--tw-prose-bullets': theme('colors.primary[400]'),
            '--tw-prose-hr': theme('colors.primary[300]'),
            '--tw-prose-quotes': theme('colors.text[950]'),
            '--tw-prose-quote-borders': theme('colors.primary[300]'),
            '--tw-prose-captions': theme('colors.text[950]'),
            '--tw-prose-code': theme('colors.text[950]'),
            '--tw-prose-pre-code': theme('colors.text[950]'),
            '--tw-prose-pre-bg': theme('colors.text[950]'),
            '--tw-prose-th-borders': theme('colors.primary[300]'),
            '--tw-prose-td-borders': theme('colors.pink[200]'),
            '--tw-prose-invert-body': theme('colors.pink[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.primary[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.primary[400]'),
            '--tw-prose-invert-bullets': theme('colors.text[950]'),
            '--tw-prose-invert-hr': theme('colors.text[950]'),
            '--tw-prose-invert-quotes': theme('colors.text[950]'),
            '--tw-prose-invert-quote-borders': theme('colors.text[950]'),
            '--tw-prose-invert-captions': theme('colors.primary[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.primary[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.text[950]'),
            '--tw-prose-invert-td-borders': theme('colors.text[950]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
export default config;
