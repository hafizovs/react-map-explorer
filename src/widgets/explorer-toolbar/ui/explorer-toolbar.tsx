import type { PlaceCategory } from '@/entities/place'

const categories: (PlaceCategory | 'all')[] = ['all', 'cafe', 'museum', 'park', 'shop']

type ExplorerToolbarProps = {
  query: string
  category: PlaceCategory | 'all'
  onQueryChange: (value: string) => void
  onCategoryChange: (value: PlaceCategory | 'all') => void
}

export function ExplorerToolbar({
  query,
  category,
  onQueryChange,
  onCategoryChange,
}: ExplorerToolbarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <input
        type="search"
        placeholder="Search places…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="min-w-[200px] flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm"
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as PlaceCategory | 'all')}
        className="rounded-md border border-slate-300 px-3 py-2 text-sm capitalize"
      >
        {categories.map((cat) => (
          <option key={cat} value={cat} className="capitalize">
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}
