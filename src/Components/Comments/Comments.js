import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadComments} from '../../reducers'


function Comments () {

let stateComments = useSelector(state => state.commentReducer);
console.log(stateComments);

let dispatch = useDispatch();

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            dispatch(loadComments(value));
        })

}, [])
}


export {
    Comments
}