## Live demo

https://hafizovs.github.io/react-map-explorer/

# Map explorer

## About

Searchable place list with category filters and a lightweight map mock. TanStack Query loads places from a mock API, and a client-side grid supplies cluster badges. Search matches name or description, and a marker or a list card selects a place.

## Capabilities

- Mock API load through TanStack Query
- Search by name or description
- Category filters: cafe, museum, park, shop
- Selection from a map marker or a list card
- Cluster badges when places share a grid cell

## Functionality

- Wait for places to load from the mock API
- Search by name or description, or filter by category
- Select a place from a marker or a list card
- Read cluster badges on shared grid cells

Searchable place list with category filters and a lightweight map mock — TanStack Query, client-side clustering.

## Scripts

```bash
pnpm install
pnpm dev          # http://localhost:5006
pnpm check
pnpm build
```

## Manual demo

1. Wait for places to load from the mock API.
2. Search by name or description.
3. Filter by category (cafe, museum, park, shop).
4. Click markers or list cards to select a place.
5. Observe cluster badges when places share a grid cell.
