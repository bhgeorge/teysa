module.exports = {
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
    fontWeights: {
      extralight: '200',
      regular: '400',
      bold: '600',
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
