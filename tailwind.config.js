/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          50: '#faf5f0',
          100: '#f5ede5',
          200: '#f0dccb',
          300: '#e8c4a8',
          400: '#dfa857',
          500: '#d68f3a',
          600: '#c0741f',
          700: '#a85918',
          800: '#824617',
          900: '#6a3a14',
        },
        tech: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#145231',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.700'),
            'a': {
              color: theme('colors.accent.600'),
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.accent.700'),
                textDecoration: 'underline',
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.serif'),
              color: theme('colors.slate.900'),
              fontWeight: '700',
              letterSpacing: '-0.02em',
            },
            'h1': {
              fontSize: '2.5em',
            },
            'code': {
              color: theme('colors.accent.700'),
              backgroundColor: theme('colors.slate.100'),
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
            'pre': {
              backgroundColor: theme('colors.slate.900'),
              borderLeft: `4px solid ${theme('colors.accent.600')}`,
            },
            'blockquote': {
              borderLeftColor: theme('colors.accent.600'),
              fontStyle: 'italic',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.slate.300'),
            'a': {
              color: theme('colors.accent.400'),
              '&:hover': {
                color: theme('colors.accent.300'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              color: theme('colors.slate.100'),
            },
            'code': {
              color: theme('colors.accent.300'),
              backgroundColor: theme('colors.slate.800'),
            },
            'pre': {
              backgroundColor: theme('colors.slate.950'),
              borderLeftColor: theme('colors.accent.500'),
            },
            'blockquote': {
              borderLeftColor: theme('colors.accent.500'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Fira Sans', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Fira Code', 'monospace'],
      },
      maxWidth: {
        prose: '65ch',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.95' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
