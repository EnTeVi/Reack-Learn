import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

function Comments () {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data));
    }, [])

    return (
        <div className='blockInfo'>
            {
                comments.map(comment => (
                    <Comment
                        key={comment.id}
                        comment={comment}
                    />))
            }
        </div>
    )
}

export {Comments};