import { GET_MAIL, GET_MAILS} from "../Actions/Types";

const mailReducer = (state={mails:[]},{type,payload})=>{
    switch(type){
        case GET_MAILS:
            return {...state,mails:payload}
            case GET_MAIL:
                return { ...state, mail: payload };
        default: return state
    }
    
}
export default mailReducer