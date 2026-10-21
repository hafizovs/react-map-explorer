import { placeSchema, type Place } from './model'

const SEED: Place[] = [
  {
    id: '1',
    name: 'River Cafe',
    category: 'cafe',
    lat: 55.75,
    lng: 37.62,
    description: 'Quiet spot by the water.',
  },
  {
    id: '2',
    name: 'Modern Art Museum',
    category: 'museum',
    lat: 55.76,
    lng: 37.61,
    description: 'Rotating contemporary exhibits.',
  },
  {
    id: '3',
    name: 'Central Park',
    category: 'park',
    lat: 55.74,
    lng: 37.63,
    description: 'Green escape in the city center.',
  },
  {
    id: '4',
    name: 'Design Shop',
    category: 'shop',
    lat: 55.755,
    lng: 37.625,
    description: 'Local makers and stationery.',
  },
  {
    id: '5',
    name: 'Corner Espresso',
    category: 'cafe',
    lat: 55.752,
    lng: 37.618,
    description: 'Single-origin pour-over.',
  },
]

export async function fetchPlaces(): Promise<Place[]> {
  await new Promise((r) => setTimeout(r, 200))
  return placeSchema.array().parse(SEED)
}
