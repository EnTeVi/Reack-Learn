import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadUsers} from '../../reducers'


function Users () {

let stateUsers = useSelector(state => state.userReducer);
console.log(stateUsers);

let dispatch = useDispatch();

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            dispatch(loadUsers(value));
        })

}, [])
    return (<h1>My apologies, user information about, posts and comments in the console</h1>)
}


export {
    Users
}