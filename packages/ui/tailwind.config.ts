import sharedConfig from "../tailwind-config/tailwind.config";
// import sharedConfig from "@repo/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: ["./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {
          ...sharedConfig?.theme?.extend,
          spacing: {
            ...sharedConfig?.theme?.extend.spacing,
          },
        },
      },
    },
  ],
};

export default config;
