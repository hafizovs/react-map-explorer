import { describe, expect, it } from 'vitest'

import type { Place } from '@/entities/place'

import { filterPlaces } from './filter-places'

const sample: Place[] = [
  {
    id: '1',
    name: 'River Cafe',
    category: 'cafe',
    lat: 0,
    lng: 0,
    description: 'Quiet',
  },
  {
    id: '2',
    name: 'Museum',
    category: 'museum',
    lat: 0,
    lng: 0,
    description: 'Art',
  },
]

describe('filterPlaces', () => {
  it('filters by category and search text', () => {
    expect(filterPlaces(sample, 'river', 'cafe')).toHaveLength(1)
    expect(filterPlaces(sample, 'art', 'all')).toHaveLength(1)
  })
})
