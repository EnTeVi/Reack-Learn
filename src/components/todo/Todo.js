function Todo (props) {
    let {todo: userTodo} = props;

    return (
        <div className='boxInfo'>
            {userTodo.id}. {userTodo.title}
        </div>
    )
}

export {Todo};