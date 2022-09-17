// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import {useEffect, useState} from 'react';
import User from '../user/User';


export default function Users() {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setUsers(value );
            });
    }, []);



    return (<div>
        <div className='blockUsers'>{users.map(user => (<User item={user} key={user.id}/>))}</div>
    </div>)


}