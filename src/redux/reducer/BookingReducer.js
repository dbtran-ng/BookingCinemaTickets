import { CANCEL_SEATS, CHOOSING_SEATS } from "../types/BookingTypes";

const stateDefault = {
    danhSachGheDangDat: [

    ]
}

const BookingReducer = (state = stateDefault, action) =>{
    switch(action.type){
        case CHOOSING_SEATS: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.ghe.soGhe);
            if ( index !== -1 ){
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            else{
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state}
        }
        case CANCEL_SEATS:{
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];

            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat=>gheDangDat.soGhe === action.soGhe);
            if ( index !== -1){
                danhSachGheDangDatUpdate.splice(index, 1);
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return {...state};
        }
        default: return { ...state}
    }
}

export default BookingReducer;