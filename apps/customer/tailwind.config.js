/** @type {import('tailwindcss').Config} */

import sharedConfig from "../../packages/tailwind-config/tailwind.config";
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...sharedConfig?.theme?.extend,
      spacing: {
        ...sharedConfig?.theme?.extend.spacing,
      },
    },
  },
  plugins: [],
};
