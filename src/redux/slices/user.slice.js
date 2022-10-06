import {createAsyncThunk, createSlice, isRejectedWithValue} from "@reduxjs/toolkit";
import {userService} from "../../services";
import {get} from "react-hook-form";


const initialState = {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
    userFromAPI: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async () => {
        try {
            const {data} = await userService.getAll();
            return data
        }catch (e) {
            return isRejectedWithValue(e.response.data)
        }
    }
)

const getById  = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        // getAll: (state, action) => {
        //     state.users = action.payload
        // },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        geleteById: (state, action) => {
            const index = state.users.findIndex(user => user.id === action.payload);
            state.users.splice(index, 1)
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]:(state, action) => {
    //         state.users = action.payload
    //     }
    // }

    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
                state.loading = false
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.userFromAPI = action.payload
            })
});

const {reducer: userReducer, actions: {setCurrentUser, geleteById}} = userSlice;

const userActions = {
    getAll,
    setCurrentUser,
    getById,
    geleteById
}

export {
    userActions,
    userReducer
};

