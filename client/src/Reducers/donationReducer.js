import {  GET_DONATIONS, GET_DONATION} from "../Actions/Types";

const donationReducer = (state={donations:[]},{type,payload})=>{
    switch(type){

        case GET_DONATIONS:
            return {...state,donations:payload}
            case GET_DONATION:
                return { ...state, donations: payload };
    
        default: return state
    }
    
}
export default donationReducer