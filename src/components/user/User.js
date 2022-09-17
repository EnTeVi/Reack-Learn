export default function User(props) {
    let {item: user} = props;


    if (user.launch_year !== '2020') {
        return (<div className='boxUsers'>
            <div><h3>{user.mission_name} - {user.launch_year}</h3></div>
            <img src={user.links.mission_patch_small} alt={user.mission_name}/>

        </div>)
    }

}