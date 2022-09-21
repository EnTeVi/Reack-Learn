import {useEffect, useState} from "react";

import User from '../user/User';
import Post from '../post/Post';
import {getUserAxios, getPostAxios} from "../services/user.service.api.axios";


export default function Users () {
    let [users, setUsers] = useState([]);
    // let [posts, setPosts] = useState([]);


    useEffect(() => {
        getUserAxios().then(value => setUsers(value.data))
    }, []);

    // useEffect((id) => {
    //     getPostAxios(id).then(value => setPosts(value.data))
    // }, []);


    return (<div>
        <div>{users.map(user => (<User item={user} key={user.id}/>))}</div>
        {/*<div>{posts.map(post => (<Post itemP={post} key={post.id}/>))}</div>*/}
    </div>)

}



