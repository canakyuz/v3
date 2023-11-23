import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "nepal": {
        50: "244 248 250",
        100: "229 238 244",
        200: "209 226 236",
        300: "178 208 222",
        400: "141 183 205",
        500: "125 167 197",
        600: "94 137 178",
        700: "83 120 162",
        800: "72 98 133",
        900: "61 82 107",
        950: "41 52 66",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config
