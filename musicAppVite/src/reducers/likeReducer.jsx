import albums from "../assets/data/albums"


const initialState = albums


const likeReducer = (state= initialState, action ) =>{ 
    switch  (action.type){
        // case "like":
        //     let id = action.id
        //     //first copy of state, then copy album properties
        //     return {...state, [action.id], value: state[id].liked + action.payload}
        case "like":
            return {
              ...state,
              [action.id]: {
                ...state[action.id],
                liked: state[action.id].liked + action.payload,
              },
            };
        // case "dislike":
        //     return {...state.id, value: state[id].disliked - action.payload}
        // default:
        //     return state
        case "dislike":
            return {
                ...state,
                [action.id]: {
                ...state[action.id],
                disliked: state[action.id].disliked - action.payload,
                },
            };
        default:
            return state;
    }
}
export default likeReducer