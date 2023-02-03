import { GET_ORDER, GET_ORDERS} from "../Actions/Types";

const orderReducer = (state={orders:[]},{type,payload})=>{
    switch(type){
        case GET_ORDERS:
            return {...state,orders:payload}
            case GET_ORDER:
                return { ...state, order: payload };
        default: return state
    }
    
}
export default orderReducer