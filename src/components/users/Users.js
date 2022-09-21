import {useEffect, useState} from "react";

import User from '../user/User';
import {getUserAxios} from "../services/user.service.api.axios";


export default function Users () {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUserAxios().then(value => setUsers(value.data))
    }, []);

    return (<div>
        <div>{users.map(user => (<User item={user} key={user.id}/>))}</div>
    </div>)

}



