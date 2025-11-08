/**
 * Design System Tokens
 *
 * 주식 투자 플랫폼을 위한 디자인 토큰 정의
 * - MZ 세대를 위한 트렌디한 디자인
 * - 초보 투자자를 위한 직관적인 색상 체계
 * - 금융 서비스에 적합한 신뢰감 있는 컬러
 */

export const colorTokens = {
  // Primary: 신뢰감을 주는 블루 계열 (금융 서비스 표준)
  primary: {
    50: "#E3F2FD",
    100: "#BBDEFB",
    200: "#90CAF9",
    300: "#64B5F6",
    400: "#42A5F5",
    500: "#2196F3", // Base primary color
    600: "#1E88E5",
    700: "#1976D2",
    800: "#1565C0",
    900: "#0D47A1",
  },

  // Secondary: 주가 변동 표시용 (상승: 그린, 하락: 레드)
  secondary: {
    // 상승 (Bull)
    green: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50", // Base green
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
    },
    // 하락 (Bear)
    red: {
      50: "#FFEBEE",
      100: "#FFCDD2",
      200: "#EF9A9A",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336", // Base red
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
    },
  },

  // Accent: CTA 및 하이라이트용 (주황 계열)
  accent: {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFCC80",
    300: "#FFB74D",
    400: "#FFA726",
    500: "#FF9800", // Base accent
    600: "#FB8C00",
    700: "#F57C00",
    800: "#EF6C00",
    900: "#E65100",
  },

  // Grayscale: 텍스트, 배경, 경계선용
  grayscale: {
    0: "#FFFFFF", // White
    50: "#FAFAFA", // Very light gray
    100: "#F5F5F5", // Light gray
    200: "#EEEEEE", // Lighter gray
    300: "#E0E0E0", // Light medium gray
    400: "#BDBDBD", // Medium gray
    500: "#9E9E9E", // Gray
    600: "#757575", // Dark gray
    700: "#616161", // Darker gray
    800: "#424242", // Very dark gray
    900: "#212121", // Almost black
    1000: "#000000", // Black
  },

  // Semantic colors: 상태 표시용
  semantic: {
    success: "#4CAF50",
    warning: "#FF9800",
    error: "#F44336",
    info: "#2196F3",
  },

  // Background colors
  background: {
    primary: "#FFFFFF",
    secondary: "#FAFAFA",
    tertiary: "#F5F5F5",
    dark: "#212121",
  },
} as const;

export const typographyTokens = {
  // Font Families
  fontFamily: {
    heading: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(", "),
    body: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(", "),
    mono: ["Menlo", "Monaco", "Courier New", "monospace"].join(", "),
  },

  // Font Sizes
  fontSize: {
    // Headings
    h1: {
      size: "2.5rem", // 40px
      lineHeight: "3rem", // 48px
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h2: {
      size: "2rem", // 32px
      lineHeight: "2.5rem", // 40px
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    h3: {
      size: "1.5rem", // 24px
      lineHeight: "2rem", // 32px
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
    h4: {
      size: "1.25rem", // 20px
      lineHeight: "1.75rem", // 28px
      fontWeight: 600,
      letterSpacing: "0",
    },
    h5: {
      size: "1.125rem", // 18px
      lineHeight: "1.5rem", // 24px
      fontWeight: 600,
      letterSpacing: "0",
    },
    h6: {
      size: "1rem", // 16px
      lineHeight: "1.5rem", // 24px
      fontWeight: 600,
      letterSpacing: "0",
    },

    // Body text
    large: {
      size: "1.125rem", // 18px
      lineHeight: "1.75rem", // 28px
      fontWeight: 400,
      letterSpacing: "0",
    },
    base: {
      size: "1rem", // 16px
      lineHeight: "1.5rem", // 24px
      fontWeight: 400,
      letterSpacing: "0",
    },
    small: {
      size: "0.875rem", // 14px
      lineHeight: "1.25rem", // 20px
      fontWeight: 400,
      letterSpacing: "0",
    },
    xsmall: {
      size: "0.75rem", // 12px
      lineHeight: "1rem", // 16px
      fontWeight: 400,
      letterSpacing: "0.01em",
    },
  },

  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
} as const;

// Spacing scale (8pt grid system)
export const spacingTokens = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
} as const;

// Border radius
export const radiusTokens = {
  none: "0",
  sm: "0.25rem", // 4px
  base: "0.5rem", // 8px
  md: "0.75rem", // 12px
  lg: "1rem", // 16px
  xl: "1.5rem", // 24px
  full: "9999px",
} as const;

// Shadow tokens
export const shadowTokens = {
  none: "none",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
} as const;

// Z-index scale
export const zIndexTokens = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// Export all tokens as a single object
export const designTokens = {
  color: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  shadow: shadowTokens,
  zIndex: zIndexTokens,
} as const;

export default designTokens;
