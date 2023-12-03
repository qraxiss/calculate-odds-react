import { createContext } from 'react'

export type place = {
    home: number
    away: number
}

export const places = ['preXg', 'liveXg', 'preXs', 'currentShots', 'currentScore']

export type Inputs = {
    data: {
        preXg: place
        liveXg: place
        preXs: place
        currentShots: place
        currentScore: place
        time: number
        expectedAddedTime: number
        payback: number
    }
    place: 'home' | 'away'
    time: 'remain' | 'all'
    odds: number[]
}

export const CalculateOddsContext = createContext<Inputs>({
    data: {
        preXg: {
            home: 0,
            away: 0
        },
        liveXg: {
            home: 0,
            away: 0
        },
        preXs: {
            home: 0,
            away: 0
        },
        currentShots: {
            home: 0,
            away: 0
        },
        currentScore: {
            home: 0,
            away: 0
        },
        time: 0,
        expectedAddedTime: 0,
        payback: 0
    },
    place: 'home',
    time: 'remain',
    odds: [0, 0, 0]
})
