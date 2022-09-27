import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {postsService} from "../../services";
import {Post} from "../post/Post";

function Posts () {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.getAll(postId).then(value => setPost(value.data));
    }, [postId])

    return (
        <div className='blockInfo'>
            {post && (
                <Post
                    post={post}
                />)}
        </div>
    )
}

export {Posts};