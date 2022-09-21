export default function Post(props) {
    let {itemP: post} = props;

    return (<div>
        <div><h3>{post.userId}</h3></div>
        <div><h3>{post.id}</h3></div>
        <div><h3>{post.title}</h3></div>
        <div><h3>{post.body}</h3></div>
    </div>)
}


