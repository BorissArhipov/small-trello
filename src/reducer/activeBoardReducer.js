const initialState = {
    label: null,
    id: null
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_ACTIVE_BOARD':
            return {
                ...state,
                label: action.payload.label,
                id:  action.payload.id
            }

        default:
            return {
                ...state
            };
    }
}
