function Post (props) {
    let {post: userPost} = props;

    return (
        <div className='boxInfo x'>
            {userPost.id}. {userPost.title}
        </div>
    )
}

export {Post};