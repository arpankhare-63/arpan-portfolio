import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Check if you're deploying to GitHub Pages
const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/arpan-portfolio/" : "/", 
});
