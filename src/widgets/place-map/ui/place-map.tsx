import { clusterPlaces } from '@/features/cluster-places'
import { useSelectionStore } from '@/features/select-place/model/selection-store'
import type { Place } from '@/entities/place'
import { cn } from '@/shared/lib/cn'

type PlaceMapProps = {
  places: Place[]
}

export function PlaceMap({ places }: PlaceMapProps) {
  const markers = clusterPlaces(places, 12)
  const setSelectedId = useSelectionStore((s) => s.setSelectedId)
  const selectedId = useSelectionStore((s) => s.selectedId)

  return (
    <div
      className="relative min-h-[320px] flex-1 overflow-hidden rounded-xl border border-slate-300 bg-gradient-to-br from-sky-100 to-emerald-50"
      aria-label="Map preview"
    >
      <p className="absolute left-3 top-3 rounded bg-white/80 px-2 py-1 text-xs text-slate-600">
        Lightweight map mock (no tile server)
      </p>
      {markers.map((marker) =>
        marker.type === 'cluster' ? (
          <button
            key={marker.ids.join('-')}
            type="button"
            className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            title={`${marker.count} places`}
          >
            {marker.count}
          </button>
        ) : (
          <button
            key={marker.place.id}
            type="button"
            onClick={() => setSelectedId(marker.place.id)}
            className={cn(
              'absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow',
              selectedId === marker.place.id ? 'bg-blue-600 scale-125' : 'bg-rose-500',
            )}
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            title={marker.place.name}
          />
        ),
      )}
    </div>
  )
}
