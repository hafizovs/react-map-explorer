import { useQuery } from '@tanstack/react-query'
import { useMemo, useState } from 'react'

import { fetchPlaces, PlaceCard, type PlaceCategory } from '@/entities/place'
import { filterPlaces } from '@/features/filter-places'
import { useSelectionStore } from '@/features/select-place/model/selection-store'
import { ExplorerToolbar } from '@/widgets/explorer-toolbar'
import { PlaceMap } from '@/widgets/place-map'

export function ExplorerPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<PlaceCategory | 'all'>('all')
  const selectedId = useSelectionStore((s) => s.selectedId)
  const setSelectedId = useSelectionStore((s) => s.setSelectedId)

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
  })

  const visible = useMemo(
    () => filterPlaces(data ?? [], query, category),
    [category, data, query],
  )

  return (
    <div className="mx-auto flex min-h-svh max-w-6xl flex-col gap-4 p-4">
      <header>
        <h1 className="text-2xl font-semibold text-slate-900">Map explorer</h1>
        <p className="text-sm text-slate-600">Search, filter, and inspect places on a mock map.</p>
      </header>

      <ExplorerToolbar
        query={query}
        category={category}
        onQueryChange={setQuery}
        onCategoryChange={setCategory}
      />

      {isLoading && <p className="text-sm text-slate-500">Loading places…</p>}
      {isError && (
        <button type="button" onClick={() => refetch()} className="text-sm text-red-600 underline">
          Failed to load — retry
        </button>
      )}

      <div className="flex flex-col gap-4 lg:flex-row">
        <PlaceMap places={visible} />
        <ul className="flex w-full flex-col gap-2 lg:w-80">
          {visible.map((place) => (
            <li key={place.id}>
              <PlaceCard
                place={place}
                selected={selectedId === place.id}
                onSelect={() => setSelectedId(place.id)}
              />
            </li>
          ))}
          {visible.length === 0 && !isLoading && (
            <li className="text-sm text-slate-500">No places match your filters.</li>
          )}
        </ul>
      </div>
    </div>
  )
}
