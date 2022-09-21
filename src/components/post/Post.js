export default function Post(props) {
    let {itemP: post} = props;

    return (<div className='postBlock'>
        <div><h3>User: {post.userId}</h3></div>
        <div><h3>Post: {post.id}</h3></div>
        <div><h3>Title: {post.title}</h3></div>
        <div><h3>Comments: {post.body}</h3></div>
    </div>)
}


