import { Request,Result } from "../config/request";

  
export async function calculateOdds(
  data: any,
  odds: number[],
  time: string,
  place: string
): Promise<Result> {
 
    return  await Request.post('/calculate-odds', {
      data,
      odds,
      time,
      place,
    });
 
  
}
