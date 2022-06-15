/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/preview.js'],
  theme: {
    colors: {
      theme: {
        bg: 'var(--theme-bg)',
        'bg-alt': 'var(--theme-bg-alt)',
        text: 'var(--theme-text)',
        'text-alt': 'var(--theme-text-alt)',
        error: 'var(--theme-error)',
        success: 'var(--theme-success)',
        warning: 'var(--theme-warning)',
      },
      white: '#eae3f2',
      black: '#0e0c13',
      purple: {
        black: '#160f2d',
        dark: '#3e3165',
      },
      gray: {
        white: '#c4b4bd',
      },
      pink: {
        DEFAULT: '#d1758b',
      },
      orange: {
        DEFAULT: '#f1c28d',
      },
      teal: {
        dark: '#265157',
        DEFAULT: '#417c76',
      },
      red: {
        dark: '#942a2a',
      },
      yellow: {
        dark: '#9a822b',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    fontWeights: {
      extralight: '200',
      regular: '400',
      bold: '700',
    },
    extend: {
      spacing: {
        gutter: '1rem',
        em: '1em',
      },
    },
  },
  plugins: [],
};
