import {useState} from "react";

import Post from '../post/Post';
import {getPostAxios} from "../services/user.service.api.axios";


export default function User (props) {
    let {item: user} = props;
    let [posts, setPosts] = useState([]);

    let loadPosts = ()=>{
        getPostAxios(user.id).then(value => {
            setPosts(value.data);
            console.log("loaded posts for user", user.id);
        })
        console.log("load posts",user.id)
    }
    return (<div>
        <div><h3>{user.id}. {user.name}</h3></div>
        <div><button onClick={loadPosts}>Детальніше</button></div>
        <div>{posts.map(post => (<Post itemP={post} key={post.id}/>))
        }</div>

    </div>)
}

