// import sharedConfig from "@repo/tailwind-config/tailwindConfig";
import sharedConfig from "../../packages/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "../../packages/ui/src/**/*{.js,.ts,.jsx,.tsx}",
      ],
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
