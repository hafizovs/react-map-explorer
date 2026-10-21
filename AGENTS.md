# 06-map-explorer — agent instructions

Places explorer with mock map (Vite + FSD). Parent: `../AGENTS.md`.

## Commands

- `pnpm install` · `pnpm dev` (port **5006**) · `pnpm check` · `pnpm build`

## FSD map

- `src/pages/explorer`
- `src/widgets/place-map`, `explorer-toolbar`
- `src/features/filter-places`, `cluster-places`, `select-place`
- `src/entities/place`
- `src/shared/api`, `lib`, `config`

## Notes

- Map is a styled div with projected markers (no MapLibre tile dependency).
- Places load via TanStack Query + async seed API.

## Done when

`pnpm check` green; search/filter/list/map selection works manually.
