import plugin from 'tailwindcss/plugin';

export const tailwindPreset = {
  content: [],
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
        interact: 'var(--theme-interact)',
        'interact-hover': 'var(--theme-interact-hover)',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      spacing: {
        gutter: '1rem',
        em: '1em',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.theme-orzhov': {
          '--theme-text': '#fbfae9',
          '--theme-text-alt': '#f8f3c9',
          '--theme-bg': '#150f10',
          '--theme-bg-alt': '#392c38',
          '--theme-error': '#d386af',
          '--theme-success': '#9dd975',
          '--theme-warning': '#dcbd67',
          '--theme-interact': '#dcbd67',
          '--theme-interact-hover': '#e9d49b',
        },
        '.animate-drop': {
          '@apply transform transition-all -translate-y-8 opacity-0': {},
        },
        '.animate-drop.enter-active': {
          '@apply translate-y-0 opacity-100': {},
        },
        '.animate-drop.enter-done': {
          '@apply translate-y-0 opacity-100': {},
        },
      });
    }),
  ],
};
