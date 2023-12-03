import { axiosInstance } from '../config/config'

export async function calculateOdds(
    data: any,
    odds: number[],
    time: string,
    place: string
): Promise<
    {
        over: number
        under: number
        odd: number
    }[]
> {
    const res = await axiosInstance.post('/calculate-odds', {
        data,
        odds,
        time,
        place
    })
    return res.data.result
}
