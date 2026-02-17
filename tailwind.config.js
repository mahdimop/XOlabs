/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(138, 43, 226, 0.3)",
        input: "rgba(138, 43, 226, 0.2)",
        ring: "#8a2be2",
        background: "#0a0a0f",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#8a2be2",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#00d4ff",
          foreground: "#0a0a0f",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.1)",
          foreground: "rgba(255, 255, 255, 0.6)",
        },
        accent: {
          DEFAULT: "#1a1a25",
          foreground: "#ffffff",
        },
        card: {
          DEFAULT: "#12121a",
          foreground: "#f5f5f5",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [],
}
