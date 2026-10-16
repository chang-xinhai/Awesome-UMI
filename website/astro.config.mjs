import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://chang-xinhai.github.io",
  base: "/Awesome-UMI",
  devToolbar: { enabled: false },
  trailingSlash: "always",
  build: { format: "directory" },
});
