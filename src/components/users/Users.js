
// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну
// інфомацію про користувача(довільно обрану інформацію)

import {useEffect, useState} from "react";
import User from '../user/User';
import {getUsersAxios, getUserAxios} from "../services/user.service.api.axios";

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    }

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, []);



    return (<div>
        <div className='nameOfUser'>
            <div className='boxNameOfUser'>
                <div><h3>{user?.id}</h3></div>
                <div><h3> {user?.name}</h3></div>
                <div><h3>{user?.username}</h3></div>
                <div><h3>{user?.email}</h3></div>
                <div><h3>{user?.phone}</h3></div>
                <div><h3>{user?.website}</h3></div>
            </div>
        </div>
        <div className = 'contInUsers'>{users.map(user => (<User item={user} key={user.id} lift={lift}/>))}</div>
    </div>)


}

