export const mainTheme = {
  fonts: {
    primary: 'Poppins, sans-serif',
  },
  colors: {
    /* ---- camada nova: tokens de superfície, texto e acento ---- */
    bg: '#090C0A',
    bgSoft: '#0E120F',
    surface: 'rgba(255, 255, 255, 0.035)',
    surfaceHover: 'rgba(255, 255, 255, 0.06)',
    surfaceSolid: '#141915',
    border: 'rgba(255, 255, 255, 0.09)',
    borderStrong: 'rgba(61, 220, 90, 0.35)',

    text: '#E8EDE9',
    textMuted: '#9AA69D',
    textFaint: '#6B776F',

    accent: '#3DDC5A',
    accentDeep: '#14361F',
    accentGlow: 'rgba(61, 220, 90, 0.25)',

    /* ---- camada original: mantida para não quebrar nada ---- */
    backGreen400: '#111D13',
    backGreen300: '#415D43',
    backGreen200: '#709775',
    backGreen100: '#8FB996',
    backGreen00: '#A1CCA5',

    primary600: '#121214',
    primary500: '#143601',
    primary400: '#1A4301',
    primary300: '#245501',
    primary200: '#538D22',
    primary100: '#73A942',
    primary00: '#AAD576',

    secondary400: '#152614',
    secondary300: '#1E441E',
    secondary200: '#2A7221',
    secondary100: '#119822',
    secondary00: '#31CB00',

    grey600: '#121214',
    grey500: '#373A3E',
    grey400: '#595959',
    grey300: '#7F7F7F',
    grey200: '#A5A5A5',
    grey100: '#CCCCCC',
    grey00: '#F2F2F2',

    white: '#fff',
    black: '#000',

    red: '#E60000',
  },
  radii: {
    sm: '8px',
    md: '12px',
    lg: '18px',
    pill: '999px',
  },
  shadows: {
    soft: '0 2px 12px rgba(0, 0, 0, 0.35)',
    card: '0 12px 32px rgba(0, 0, 0, 0.45)',
    glow: '0 0 0 1px rgba(61, 220, 90, 0.35), 0 12px 36px rgba(61, 220, 90, 0.18)',
  },
  transitions: {
    fast: '160ms cubic-bezier(0.22, 1, 0.36, 1)',
    base: '280ms cubic-bezier(0.22, 1, 0.36, 1)',
    slow: '460ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
  gradients: {
    heading: 'linear-gradient(120deg, #F2F7F3 0%, #A1CCA5 45%, #3DDC5A 100%)',
    hairline: 'linear-gradient(90deg, transparent 0%, rgba(61,220,90,0.45) 50%, transparent 100%)',
  },
};

export type MainTheme = typeof mainTheme;
