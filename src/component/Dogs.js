import {useReducer, useRef} from "react";

import reducerDogs from '../reducers/reducer.dogs'


function Dogs() {

    const [state, dispatch] = useReducer(reducerDogs, {dogs: []});

    const dogInput = useRef();


    const createDog = () => {
        dispatch({type: 'addDog', payload: dogInput.current.value});
        dogInput.current.value = '';
    }

    return (
            <div className='dogs'>
                <div className='enterName'>
                    <label>Dogs name: <input type="text" ref={dogInput}/></label>
                    <button onClick={createDog}>Save dog</button>
                </div>
                {
                    state.dogs.map(dog => (<div className='nameAlimal' key={dog.id}>
                        {dog.name}
                        <button onClick={() => dispatch({type: 'deleteDog', payload: dog.id})}>delete dog</button>
                    </div>))
                }
            </div>



    );
}

export {
    Dogs
}