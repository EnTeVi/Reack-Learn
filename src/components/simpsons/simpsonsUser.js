import {simpsons} from '../Users/simpsons';
import Simpson from '../simpson/Simpson';

export default function SimpsonsX() {
    return (<div>
        {simpsons.map((user, index) => (<Simpson item ={user} key={index}/>))}
    </div>)
}