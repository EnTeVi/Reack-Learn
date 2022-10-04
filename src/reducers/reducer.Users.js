const LOAD_USERS = "LOAD_USERS";
const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}

const userReducer = (state = {users: [], user: null}, action) => {
    switch (action.type) {
        case LOAD_USERS:
            return {
                ...state,
                users: action.payload
            };
        case "CHOOSE_USER":
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {
                ...state,
                user
            };
        default:
            return state;
    }

}


export {
    userReducer,
    LOAD_USERS,
    loadUsers
}