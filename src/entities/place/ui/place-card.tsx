import type { Place } from '@/entities/place/model'
import { cn } from '@/shared/lib/cn'

type PlaceCardProps = {
  place: Place
  selected?: boolean
  onSelect: () => void
}

export function PlaceCard({ place, selected, onSelect }: PlaceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full rounded-lg border p-3 text-left transition',
        selected ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300',
      )}
    >
      <p className="font-medium text-slate-900">{place.name}</p>
      <p className="text-xs uppercase tracking-wide text-slate-500">{place.category}</p>
      <p className="mt-1 text-sm text-slate-600">{place.description}</p>
    </button>
  )
}
