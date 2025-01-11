import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    modules: {
      scopeBehaviour: "local", // 本地作用域（默認值）
    },
  },

  server: {
    port: 3060, // 設置伺服器埠號為 3060
  },
});
