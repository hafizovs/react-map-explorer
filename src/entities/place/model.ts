import { z } from 'zod'

export const placeCategorySchema = z.enum(['cafe', 'museum', 'park', 'shop'])
export type PlaceCategory = z.infer<typeof placeCategorySchema>

export const placeSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: placeCategorySchema,
  lat: z.number(),
  lng: z.number(),
  description: z.string(),
})

export type Place = z.infer<typeof placeSchema>
