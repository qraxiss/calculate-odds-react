import { DropdownInput } from '../styles/dropdown-input'
import { TextInput } from '../styles/text-input'
import { ListInput } from '../styles/list-input'
import { Button } from '../styles/button'

import { Place, PlaceText } from '../styles/place'

import { Inputs, places } from '../../context/calculate-odds'
import { useState } from 'react'

import { calculateOdds } from '../../utils/api'

export function CalculateOdds() {
    let dropdownInput = {
        place: ['home', 'away'],
        time: ['all', 'remain']
    }

    const [localData, setLocalData] = useState<Inputs>({
        data: {
            preXg: { home: 0, away: 0 },
            liveXg: { home: 0, away: 0 },
            preXs: { home: 0, away: 0 },
            currentShots: { home: 0, away: 0 },
            currentScore: { home: 0, away: 0 },
            expectedAddedTime: 0,
            payback: 0,
            time: 0
        },
        time: 'remain',
        place: 'home',
        odds: []
    })

    const handleChangeDeepth = (fieldOut: string, fieldIn: string, value: any) => {
        if (fieldOut === 'data') {
            setLocalData((prev) => ({
                ...prev,
                [fieldOut]: {
                    ...(prev as any)[fieldOut],
                    [fieldIn]: value
                }
            }))
        } else {
            //eg: data->preXg->home
            setLocalData((prev) => ({
                ...prev,
                data: {
                    ...(prev as any).data,
                    [fieldOut]: {
                        ...(prev as any).data[fieldOut],
                        [fieldIn]: value
                    }
                }
            }))
        }

        console.log(localData)
    }

    const handleChange = (field: string, value: any) => {
        setLocalData((prev) => ({
            ...prev,
            [field]: value
        }))

        console.log(localData)
    }

    const handleChangeOdds = (value: any) => {
        value = value.split(',').map((item: string) => {
            return parseFloat(item)
        })

        // delete NaN
        value = value.filter((item: any) => {
            return !isNaN(item)
        })

        setLocalData((prev) => ({
            ...prev,
            odds: value
        }))

        console.log(localData)
    }

    return (
        <>
            <Place>
                {Object.keys(dropdownInput).map((placeName) => (
                    <DropdownInput placeholder={placeName} onChange={(e) => handleChange(placeName, e.target.value)}>
                        {(dropdownInput as any)[placeName].map((place: string) => (
                            <option value={place}>{place}</option>
                        ))}
                    </DropdownInput>
                ))}
            </Place>

            <Place>
                {['payback', 'expectedAddedTime', 'time'].map((placeName) => (
                    <TextInput
                        placeholder={placeName}
                        type="number"
                        onChange={(e) => handleChangeDeepth('data', placeName, e.target.value)}
                    ></TextInput>
                ))}
            </Place>

            <ListInput placeholder="odds" onChange={(e) => handleChangeOdds(e.target.value)} />

            {places.map((place) => (
                <>
                    <PlaceText>{place}</PlaceText>
                    <Place>
                        {['home', 'away'].map((placeName) => (
                            <TextInput
                                placeholder="place"
                                type="number"
                                onChange={(e) => handleChangeDeepth(place, placeName, e.target.value)}
                            ></TextInput>
                        ))}
                    </Place>
                </>
            ))}

            <Button
                onClick={() => {
                    calculateOdds(localData.data, localData.odds, localData.time, localData.place).then((res) => {
                        console.log(res)
                    })
                }}
            >
                Calculate
            </Button>
        </>
    )
}
