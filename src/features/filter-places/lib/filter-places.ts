import type { Place, PlaceCategory } from '@/entities/place'

export function filterPlaces(
  places: Place[],
  query: string,
  category: PlaceCategory | 'all',
): Place[] {
  const normalized = query.trim().toLowerCase()
  return places.filter((place) => {
    const matchesCategory = category === 'all' || place.category === category
    const matchesQuery =
      normalized.length === 0 ||
      place.name.toLowerCase().includes(normalized) ||
      place.description.toLowerCase().includes(normalized)
    return matchesCategory && matchesQuery
  })
}
