
// DEfinir Colecciones
import { defineCollection, z } from "astro:content"; // La zeta valida Esquemas


const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string(),
        })
    })
})

export const collections = { books:books } 