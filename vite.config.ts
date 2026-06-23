import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// username.github.io repo serves from root, so base is "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
