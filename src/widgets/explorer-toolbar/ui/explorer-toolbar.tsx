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
    <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
      <input
        type="search"
        placeholder="Search places…"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        aria-label="Search places"
        className="min-w-0 w-full rounded-md border border-slate-300 px-3 py-2 text-sm sm:min-w-[12rem] sm:flex-1"
      />
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as PlaceCategory | 'all')}
        aria-label="Filter by category"
        className="w-full min-w-0 rounded-md border border-slate-300 px-3 py-2 text-sm capitalize sm:w-auto"
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
