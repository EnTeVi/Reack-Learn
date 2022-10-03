const reducerDog = (state, action) => {
    const  {type, payload} = action;

    switch (type) {

        case 'addDog':
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case 'deleteDog':
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
        default:
            console.error('');
            return state;
    }
}



export default reducerDog;
