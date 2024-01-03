import { TextInput } from '../styles/text-input'
import { Button } from '../styles/button'
import { PlaceText, Place } from '../styles/place'

import { ResultTableV2 } from './result-table'

import { useState } from 'react'

type halfs = {
    first: number
    second: number
}

type dataType = {
    home: halfs
    away: halfs
    finished: boolean
}

type props = {
    odds: number[]
}

export function CalculateResult(props: props) {
    const [data, setData] = useState<dataType>({
        home: {
            first: 0,
            second: 0
        },
        away: {
            first: 0,
            second: 0
        },
        finished: false
    })

    const [result, setResult] = useState<
        {
            line: number
            status: 'over' | 'under' | 'not ended'
        }[]
    >(
        props.odds.map((value: number) => {
            return {
                line: value,
                status: 'not ended'
            }
        })
    )

    function onClick() {
        let newResult:
            | ((prevState: { line: number; status: 'over' | 'under' | 'not ended' }[]) => { line: number; status: 'over' | 'under' | 'not ended' }[])
            | { line: any; status: 'over' | 'under' | 'not ended' }[] = []
        props.odds.map((value: number) => {
            let status: 'over' | 'under' | 'not ended'
            if (data.finished) {
                if (value < data.home.first + data.home.second + data.away.first + data.away.second) {
                    status = 'over'
                } else {
                    status = 'under'
                }
            } else {
                if (value < data.home.first + data.home.second + data.away.first + data.away.second) {
                    status = 'over'
                } else {
                    status = 'not ended'
                }
            }
            // console.log(value, status)
            ;(newResult as any).push({
                line: value,
                status
            })
        })
        setResult(newResult)
        console.log(result)
    }

    function onChange(key: string[], value: number) {
        setData({
            ...data,
            [key[0]]: {
                ...(data as any)[key[0]],
                [key[1]]: value
            }
        })
    }

    return (
        <div>
            {Object.entries(data).map((value) => {
                return (
                    <>
                        <PlaceText> {value[0]} </PlaceText>

                        <Place>
                            {Object.keys(value[1]).map((key) => {
                                return (
                                    <TextInput
                                        placeholder={`${key} half`}
                                        onChange={(e) => {
                                            onChange([value[0], key], Number(e.target.value))
                                        }}
                                    ></TextInput>
                                )
                            })}
                        </Place>
                    </>
                )
            })}

            <TextInput
                style={{
                    display: 'inline-block',
                    width: '1em',
                    border: '1em'
                }}
                type="checkbox"
                onClick={() => {
                    console.log(data['finished'])
                    setData({
                        ...data,
                        finished: !data['finished']
                    })
                }}
            ></TextInput>

            <Button onClick={onClick}>Check Lines</Button>

            {!!result && <ResultTableV2 data={result}></ResultTableV2>}
        </div>
    )
}
