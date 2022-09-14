import User from '../user/User';
import {useState} from 'react';


export default function Users() {
    let [users, setUsers] = useState([]);

    fetch('https://rickandmortyapi.com/api/character')
        .then(value => value.json())
        .then(value => {
            setUsers(value.results);
        });

    return (
        <div>

            {users.map(user => (<User item={user} key={user.id}/>))}

        </div>
    )
}