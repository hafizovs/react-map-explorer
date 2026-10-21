import type { Place } from '@/entities/place'

export type MapMarker =
  | { type: 'place'; place: Place; x: number; y: number }
  | { type: 'cluster'; count: number; x: number; y: number; ids: string[] }

/** Project lat/lng into 0–100% and merge nearby markers (client-side mock clustering). */
export function clusterPlaces(places: Place[], cellSize = 8): MapMarker[] {
  if (places.length === 0) return []

  const lats = places.map((p) => p.lat)
  const lngs = places.map((p) => p.lng)
  const minLat = Math.min(...lats)
  const maxLat = Math.max(...lats)
  const minLng = Math.min(...lngs)
  const maxLng = Math.max(...lngs)

  const toXY = (place: Place) => {
    const x =
      maxLng === minLng ? 50 : ((place.lng - minLng) / (maxLng - minLng)) * 100
    const y =
      maxLat === minLat ? 50 : ((maxLat - place.lat) / (maxLat - minLat)) * 100
    return { x, y }
  }

  const buckets = new Map<string, { places: Place[]; x: number; y: number }>()

  for (const place of places) {
    const { x, y } = toXY(place)
    const key = `${Math.floor(x / cellSize)}:${Math.floor(y / cellSize)}`
    const bucket = buckets.get(key)
    if (bucket) {
      bucket.places.push(place)
    } else {
      buckets.set(key, { places: [place], x, y })
    }
  }

  return [...buckets.values()].map(({ places: grouped, x, y }) => {
    if (grouped.length === 1) {
      return { type: 'place' as const, place: grouped[0]!, x, y }
    }
    return {
      type: 'cluster' as const,
      count: grouped.length,
      x,
      y,
      ids: grouped.map((p) => p.id),
    }
  })
}
