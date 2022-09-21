export default function User({user}) {

    return (<div className='boxUsers'>
        <h2>{user.id} - {user.name} {user.surname}</h2>
    </div>)
}