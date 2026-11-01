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
      className="relative min-h-[min(48svh,22rem)] w-full min-w-0 flex-1 overflow-hidden rounded-xl border border-slate-300 bg-gradient-to-br from-sky-100 to-emerald-50 sm:min-h-[280px] lg:min-h-[320px]"
      aria-label="Map preview"
    >
      <p className="absolute left-2 top-2 max-w-[calc(100%-1rem)] rounded bg-white/80 px-2 py-1 text-[0.65rem] leading-snug text-slate-600 sm:left-3 sm:top-3 sm:max-w-none sm:text-xs">
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
            className="absolute flex min-h-11 min-w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center p-0 sm:min-h-0 sm:min-w-0"
            style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            title={marker.place.name}
            aria-label={marker.place.name}
          >
            <span
              className={cn(
                'h-3 w-3 rounded-full border-2 border-white shadow',
                selectedId === marker.place.id ? 'scale-125 bg-blue-600' : 'bg-rose-500',
              )}
            />
          </button>
        ),
      )}
    </div>
  )
}
