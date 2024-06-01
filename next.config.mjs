/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";

const nextConfig = {
  pageExtensions: ["tsx", "ts", "jsx", "js"],
  webpack: (config, options) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
  // Optional: If you want to use the `src` directory as the base path for your pages
  // basePath: '/src',
};

export default nextConfig;
