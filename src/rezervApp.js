// import './App.css';
// import {useDispatch, useSelector} from "react-redux";
// import {type} from "@testing-library/user-event/dist/type";
// import {useEffect} from "react";
// import {loadComments, loadPosts, loadUsers} from "./index";
//
//
//
// function App() {
//
//     let state = useSelector(state => state.userReducer);
//     console.log(state);
//
//     let dispatch = useDispatch();
//
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => {
//                 dispatch(loadUsers(value));
//
//             })
//
//     }, [])
//
//
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(value => value.json())
//             .then(value => {
//                 dispatch(loadPosts(value));
//
//             })
//
//     }, [])
//
//
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(value => value.json())
//             .then(value => {
//                 dispatch(loadComments(value));
//
//             })
//
//     }, [])
//
//
//
//     return (
//         <div className="App">
//
//         </div>
//     );
// }
//
// export default App;
