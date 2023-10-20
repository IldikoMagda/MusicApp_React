export const like = (amount) =>{
    return (dispatch) => {
        dispatch({
            type: "like",
            payload: amount,
        })
    }
}
export const dislike = (amount) =>{
    return (dispatch) => {
        dispatch({
            type: "dislike",
            payload: amount,
        })
    }
    
}