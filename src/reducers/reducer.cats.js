const reducerCat = (state, action) => {
    const  {type, payload} = action;

    switch (type) {
        case 'addCat':
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]};
        case 'deleteCat':
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)};

        default:
            console.error('');
            return state;
    }
}



export default reducerCat;
