
export default function User(props) {
    let {item: user} = props;

    if (user.id < 7) {
        return (<div className='blockUser'>
            <h3>{user.id}.  {user.name}</h3>
            <p>Status - {user.status}</p>
            <p>Species - {user.species}</p>
            <p>Gender - {user.gender}</p>
            <img src={user.image} alt={user.name}/>
        </div>)
    }
}