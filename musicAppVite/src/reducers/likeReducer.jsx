import albums from "../assets/data/albums"


const initialState = albums


const likeReducer = (state= initialState, action ) =>{ 
    switch  (action.type){
        case "like":
            const { name, value } = action.payload;
            const likedAlbum = {...state[name]};
            console.log(likedAlbum)
            likedAlbum.liked += value;
            console.log(likedAlbum)
            return {
              ...state, [name]: likedAlbum,
              };
        case "dislike":
            const { name: dislikeName, value: dislikeValue } = action.payload;
            const dislikedAlbum = { ...state[dislikeName] }; // Make a copy of the album
            dislikedAlbum.disliked += dislikeValue; // Update the disliked count
            return {
                ...state,
                [dislikeName]: dislikedAlbum, // Update the state with the modified album
            };
        default:
                return state;
            }
          };
export default likeReducer