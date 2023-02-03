import { GET_EVENT, ADD, GET_EVENTS, UPDATE_EVENT } from "../Actions/Types";

const eventReducer = (state = { events: [] }, { type, payload }) => {
  switch (type) {
    case ADD:
      return { ...state, events: [...state.events, payload] };

    case GET_EVENTS:
      return { ...state, events: payload };
    case GET_EVENT:
      return { ...state, event: payload };

      case UPDATE_EVENT:
        return { ...state, events: [...state.events, payload] };
  
      
    default:
      return state;
  }
};
export default eventReducer;
