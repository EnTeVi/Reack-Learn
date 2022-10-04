const LOAD_COMMENTS = "LOAD_COMMENTS";
const loadComments = (payload) => {
    return {type: LOAD_COMMENTS, payload}
}

const commentReducer = (state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case "LOAD_COMMENTS":
            return {
                ...state,
                comments: action.payload
            };
        case "CHOOSE_COMMENT":
            let id = action.payload;
            let comment = state.comments.find(value => value.id === id);
            return {
                ...state,
                comment
            };
        default:
            return state;
    }

}


export {
    commentReducer,
    LOAD_COMMENTS,
    loadComments
}