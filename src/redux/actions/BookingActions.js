import { CANCEL_SEATS, CHOOSING_SEATS } from "../types/BookingTypes"

export const datGheAction = (ghe) =>{
    return {
        type: CHOOSING_SEATS,
        ghe
    }
}
export const huyGheAction = (soGhe) =>{
    return {
        type: CANCEL_SEATS,
        soGhe
    }
}