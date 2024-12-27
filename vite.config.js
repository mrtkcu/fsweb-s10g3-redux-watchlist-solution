import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This makes the app accessible externally (important for cloud platforms)
    port: process.env.PORT || 3000, // Use the port assigned by Render or default to 3000
  },
  test: {
    globals: true,
    environment: "jsdom",
    reporters: ["json", "verbose"],
    outputFile: "./resultz.json",
  },
});
