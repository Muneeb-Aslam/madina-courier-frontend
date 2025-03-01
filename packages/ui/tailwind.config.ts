import sharedConfig from "@repo/tailwind-config/tailwindConfig";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: ["./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
        },
      },
    },
  ],
};

export default config;
