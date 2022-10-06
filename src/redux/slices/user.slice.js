import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null
}

const UserSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        getAll: (state, action) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    }
});

const {reducer: userReducer, actions: {getAll, setCurrentUser}} = UserSlice;

const userActions = {
    getAll,
    setCurrentUser
}

export {
    userActions,
    userReducer
};

