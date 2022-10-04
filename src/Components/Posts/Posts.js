import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadPosts} from '../../reducers'


function Posts () {

let statePosts = useSelector(state => state.postReducer);
console.log(statePosts);

let dispatch = useDispatch();

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
        .then(value => {
            dispatch(loadPosts(value));
        })

}, [])
}


export {
    Posts
}