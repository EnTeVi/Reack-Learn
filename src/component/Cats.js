import {useReducer, useRef} from "react";

import reducerCat from '../reducers/reducer.cats'

function Cats() {

        const [state, dispatch] = useReducer(reducerCat, {cats: []});

        const catInput = useRef();

        const createCat = () => {
            dispatch({type: 'addCat', payload: catInput.current.value});
            catInput.current.value = '';
        }


    return (
            <div className='cats blue'>
                <div className='enterName'>
                    <label>Cats name: <input type="text" ref={catInput}/></label>
                    <button onClick={createCat}>Save cat</button>
                </div>
                {
                    state.cats.map(cat => (<div className='nameAlimal' key={cat.id}>
                        {cat.name}
                        <button onClick={() => dispatch({type: 'deleteCat', payload: cat.id})}>delete cat</button>
                    </div>))
                }
            </div>



    );
}

export {
    Cats
}