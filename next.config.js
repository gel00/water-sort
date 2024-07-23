import path from 'path';
import { fileURLToPath } from 'url';

// Define __filename and __dirname based on import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    // Your existing config properties
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  };

export default config;
