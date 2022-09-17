export default function User(props) {
    let {item: user, lift} = props;

    return (<div className = 'blockUsers'>
        <div className = 'boxUsers'><h3>{user.id}. {user.name}</h3></div>
        <button className = 'but' onClick = { () => {
            lift(user);
        }}>Детальніше</button>
    </div>)
}
