import {combineReducers, createStore} from "redux";
import {userReducer}from './reducer.Users';
import {postReducer}from './reducer.Posts';
import {commentReducer}from './reducer.Comments';


let reducer = combineReducers({
    userReducer,
    postReducer,
    commentReducer
});

let store = createStore(reducer);

export {
    reducer,
    store
}