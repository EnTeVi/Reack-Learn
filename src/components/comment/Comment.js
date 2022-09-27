import {Link} from "react-router-dom";

function Comment (props) {
    let {comment: userCom} = props;

    return (
        <div className='boxInfo'>
            <div className='commentBox'>
                <div>{userCom.id}. {userCom.email}</div>
                <span>
                    <Link className='buttonPost' to={userCom.postId.toString()}>
                        Get post
                    </Link>
                </span>
            </div>
        </div>
    )
}

export {Comment};