const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                pers: state.persons.concat({
                    id: Math.random(), // not really unique but good enough here!
                    name: 'Max',
                    age: Math.floor(Math.random() * 40)
                })
            }
        case 'DELETE_USER':
            return {
                ...state,

            }

        default:
            return state;
    }
}

export default reducer;