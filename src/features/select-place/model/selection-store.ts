import { create } from 'zustand'

type SelectionState = {
  selectedId: string | null
  setSelectedId: (id: string | null) => void
}

export const useSelectionStore = create<SelectionState>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
}))
