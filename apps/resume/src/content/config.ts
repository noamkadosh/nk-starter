// eslint-disable-next-line import/no-unresolved
import { defineCollection, z } from "astro:content"

const resumeCollection = defineCollection({
    schema: z.object({
        description: z.string(),
        pdfLink: z.string(),
        title: z.string(),
    }),
    type: "content",
})

export const collections = {
    resume: resumeCollection,
}
