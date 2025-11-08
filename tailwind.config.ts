import type { Config } from 'tailwindcss';
import { designTokens } from './src/lib/design/tokens';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          50: designTokens.color.primary[50],
          100: designTokens.color.primary[100],
          200: designTokens.color.primary[200],
          300: designTokens.color.primary[300],
          400: designTokens.color.primary[400],
          500: designTokens.color.primary[500],
          600: designTokens.color.primary[600],
          700: designTokens.color.primary[700],
          800: designTokens.color.primary[800],
          900: designTokens.color.primary[900],
          DEFAULT: designTokens.color.primary[500],
        },
        // Secondary colors - Green (Bull market)
        success: {
          50: designTokens.color.secondary.green[50],
          100: designTokens.color.secondary.green[100],
          200: designTokens.color.secondary.green[200],
          300: designTokens.color.secondary.green[300],
          400: designTokens.color.secondary.green[400],
          500: designTokens.color.secondary.green[500],
          600: designTokens.color.secondary.green[600],
          700: designTokens.color.secondary.green[700],
          800: designTokens.color.secondary.green[800],
          900: designTokens.color.secondary.green[900],
          DEFAULT: designTokens.color.secondary.green[500],
        },
        // Secondary colors - Red (Bear market)
        danger: {
          50: designTokens.color.secondary.red[50],
          100: designTokens.color.secondary.red[100],
          200: designTokens.color.secondary.red[200],
          300: designTokens.color.secondary.red[300],
          400: designTokens.color.secondary.red[400],
          500: designTokens.color.secondary.red[500],
          600: designTokens.color.secondary.red[600],
          700: designTokens.color.secondary.red[700],
          800: designTokens.color.secondary.red[800],
          900: designTokens.color.secondary.red[900],
          DEFAULT: designTokens.color.secondary.red[500],
        },
        // Accent colors
        accent: {
          50: designTokens.color.accent[50],
          100: designTokens.color.accent[100],
          200: designTokens.color.accent[200],
          300: designTokens.color.accent[300],
          400: designTokens.color.accent[400],
          500: designTokens.color.accent[500],
          600: designTokens.color.accent[600],
          700: designTokens.color.accent[700],
          800: designTokens.color.accent[800],
          900: designTokens.color.accent[900],
          DEFAULT: designTokens.color.accent[500],
        },
        // Grayscale
        gray: {
          0: designTokens.color.grayscale[0],
          50: designTokens.color.grayscale[50],
          100: designTokens.color.grayscale[100],
          200: designTokens.color.grayscale[200],
          300: designTokens.color.grayscale[300],
          400: designTokens.color.grayscale[400],
          500: designTokens.color.grayscale[500],
          600: designTokens.color.grayscale[600],
          700: designTokens.color.grayscale[700],
          800: designTokens.color.grayscale[800],
          900: designTokens.color.grayscale[900],
          1000: designTokens.color.grayscale[1000],
          DEFAULT: designTokens.color.grayscale[500],
        },
        // Semantic colors
        warning: designTokens.color.semantic.warning,
        error: designTokens.color.semantic.error,
        info: designTokens.color.semantic.info,
        // Backgrounds
        background: {
          primary: designTokens.color.background.primary,
          secondary: designTokens.color.background.secondary,
          tertiary: designTokens.color.background.tertiary,
          dark: designTokens.color.background.dark,
          DEFAULT: designTokens.color.background.primary,
        },
      },
      fontFamily: {
        sans: designTokens.typography.fontFamily.heading.split(', '),
        mono: designTokens.typography.fontFamily.mono.split(', '),
      },
      fontSize: {
        h1: [
          designTokens.typography.fontSize.h1.size,
          {
            lineHeight: designTokens.typography.fontSize.h1.lineHeight,
            fontWeight: designTokens.typography.fontSize.h1.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h1.letterSpacing,
          },
        ],
        h2: [
          designTokens.typography.fontSize.h2.size,
          {
            lineHeight: designTokens.typography.fontSize.h2.lineHeight,
            fontWeight: designTokens.typography.fontSize.h2.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h2.letterSpacing,
          },
        ],
        h3: [
          designTokens.typography.fontSize.h3.size,
          {
            lineHeight: designTokens.typography.fontSize.h3.lineHeight,
            fontWeight: designTokens.typography.fontSize.h3.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h3.letterSpacing,
          },
        ],
        h4: [
          designTokens.typography.fontSize.h4.size,
          {
            lineHeight: designTokens.typography.fontSize.h4.lineHeight,
            fontWeight: designTokens.typography.fontSize.h4.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h4.letterSpacing,
          },
        ],
        h5: [
          designTokens.typography.fontSize.h5.size,
          {
            lineHeight: designTokens.typography.fontSize.h5.lineHeight,
            fontWeight: designTokens.typography.fontSize.h5.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h5.letterSpacing,
          },
        ],
        h6: [
          designTokens.typography.fontSize.h6.size,
          {
            lineHeight: designTokens.typography.fontSize.h6.lineHeight,
            fontWeight: designTokens.typography.fontSize.h6.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.h6.letterSpacing,
          },
        ],
        large: [
          designTokens.typography.fontSize.large.size,
          {
            lineHeight: designTokens.typography.fontSize.large.lineHeight,
            fontWeight: designTokens.typography.fontSize.large.fontWeight.toString(),
          },
        ],
        base: [
          designTokens.typography.fontSize.base.size,
          {
            lineHeight: designTokens.typography.fontSize.base.lineHeight,
            fontWeight: designTokens.typography.fontSize.base.fontWeight.toString(),
          },
        ],
        small: [
          designTokens.typography.fontSize.small.size,
          {
            lineHeight: designTokens.typography.fontSize.small.lineHeight,
            fontWeight: designTokens.typography.fontSize.small.fontWeight.toString(),
          },
        ],
        xsmall: [
          designTokens.typography.fontSize.xsmall.size,
          {
            lineHeight: designTokens.typography.fontSize.xsmall.lineHeight,
            fontWeight: designTokens.typography.fontSize.xsmall.fontWeight.toString(),
            letterSpacing: designTokens.typography.fontSize.xsmall.letterSpacing,
          },
        ],
      },
      fontWeight: {
        regular: designTokens.typography.fontWeight.regular.toString(),
        medium: designTokens.typography.fontWeight.medium.toString(),
        semibold: designTokens.typography.fontWeight.semibold.toString(),
        bold: designTokens.typography.fontWeight.bold.toString(),
      },
      lineHeight: {
        none: designTokens.typography.lineHeight.none.toString(),
        tight: designTokens.typography.lineHeight.tight.toString(),
        snug: designTokens.typography.lineHeight.snug.toString(),
        normal: designTokens.typography.lineHeight.normal.toString(),
        relaxed: designTokens.typography.lineHeight.relaxed.toString(),
        loose: designTokens.typography.lineHeight.loose.toString(),
      },
      spacing: {
        0: designTokens.spacing[0],
        1: designTokens.spacing[1],
        2: designTokens.spacing[2],
        3: designTokens.spacing[3],
        4: designTokens.spacing[4],
        5: designTokens.spacing[5],
        6: designTokens.spacing[6],
        8: designTokens.spacing[8],
        10: designTokens.spacing[10],
        12: designTokens.spacing[12],
        16: designTokens.spacing[16],
        20: designTokens.spacing[20],
        24: designTokens.spacing[24],
      },
      borderRadius: {
        none: designTokens.radius.none,
        sm: designTokens.radius.sm,
        DEFAULT: designTokens.radius.base,
        md: designTokens.radius.md,
        lg: designTokens.radius.lg,
        xl: designTokens.radius.xl,
        full: designTokens.radius.full,
      },
      boxShadow: {
        none: designTokens.shadow.none,
        sm: designTokens.shadow.sm,
        DEFAULT: designTokens.shadow.base,
        md: designTokens.shadow.md,
        lg: designTokens.shadow.lg,
        xl: designTokens.shadow.xl,
        '2xl': designTokens.shadow['2xl'],
        inner: designTokens.shadow.inner,
      },
      zIndex: {
        hide: designTokens.zIndex.hide.toString(),
        base: designTokens.zIndex.base.toString(),
        dropdown: designTokens.zIndex.dropdown.toString(),
        sticky: designTokens.zIndex.sticky.toString(),
        fixed: designTokens.zIndex.fixed.toString(),
        'modal-backdrop': designTokens.zIndex.modalBackdrop.toString(),
        modal: designTokens.zIndex.modal.toString(),
        popover: designTokens.zIndex.popover.toString(),
        tooltip: designTokens.zIndex.tooltip.toString(),
      },
    },
  },
  plugins: [],
};

export default config;

