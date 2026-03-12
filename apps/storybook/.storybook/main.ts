import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@lyttle/ui/styles": path.resolve(__dirname, "../../../packages/ui/src/styles/globals.css"),
          "@lyttle/ui": path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
          // @/components/ui/xxx → packages/ui/src/components/xxx (shadcn path convention)
          "@/components/ui": path.resolve(__dirname, "../../../packages/ui/src/components"),
          "@/lib": path.resolve(__dirname, "../../../packages/ui/src/lib"),
          "@/hooks": path.resolve(__dirname, "../../../packages/ui/src/hooks"),
          "@": path.resolve(__dirname, "../../../packages/ui/src"),
        },
      },
    });
  },
};

export default config;