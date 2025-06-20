// @ts-check
import { defineConfig, envField } from 'astro/config'; // El envField define el la variable de entorno

// https://astro.build/config
export default defineConfig({
    output: "server",
    env: {
        schema: {
            SHOW_BUY_BUTTON: envField.boolean({ context: "server", access: "public"}),
            SCORE_API_ENDPOINT:envField.string({ context: "server", access: "public"})
        }
    }
});
