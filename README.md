# 06 — Map explorer

**Live:** https://hafizovs.github.io/react-map-explorer/

Searchable place list with category filters and a lightweight map mock for a React CV portfolio.

**CV line:** geo UI with TanStack Query, client-side clustering mock, and FSD

## Stack

Vite, React 19, TypeScript, Tailwind CSS, TanStack Query, Zod, Vitest. Feature-Sliced Design.


## How to run

```bash
# from portfolio_react/
pnpm install
pnpm dev
```

Open **http://localhost:5006**

See also [docs/RUNBOOK.md](../docs/RUNBOOK.md).

## Scripts

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Manual demo

1. Wait for places to load from the mock API.
2. Search by name or description.
3. Filter by category (cafe, museum, park, shop).
4. Click markers on the map or cards in the list to select a place.
5. Observe cluster badges when multiple places share a grid cell.

## Interview talking points

- Query cache vs local filter state
- Simple grid clustering instead of supercluster for the demo
- Entity UI (`PlaceCard`) reused in list and selection sync via Zustand
