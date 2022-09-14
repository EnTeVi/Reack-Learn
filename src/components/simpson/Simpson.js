export default function User(props) {
    let {item: user} = props;

    return (<div className='boxUser'>
        <h3>{user.name} {user.surname}</h3>
        <h4>Age: {user.age}</h4>
        <p>{user.info}</p>
        <img src={user.photo} alt={user.name}/>
    </div>)
};