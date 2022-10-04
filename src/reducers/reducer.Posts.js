const LOAD_POSTS = "LOAD_POSTS";
const loadPosts = (payload) => {
    return {type: LOAD_POSTS, payload}
}

const postReducer = (state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "LOAD_POSTS":
            return {
                ...state,
                posts: action.payload
            };
        case "CHOOSE_POST":
            let id = action.payload;
            let post = state.posts.find(value => value.id === id);
            return {
                ...state,
                post
            };
        default:
            return state;
    }

}


export {
    postReducer,
    LOAD_POSTS,
    loadPosts
}