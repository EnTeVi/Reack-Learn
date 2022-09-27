import {useEffect, useState} from "react";

import {todosService} from "../../services";
import {Todo} from "../todo/Todo";

function Todos () {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosService.getAll().then(value => setTodos(value.data));
    }, [])

    return (
        <div className='blockInfo'>
            {
                todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                    />))
            }
        </div>
    )
}

export {Todos};