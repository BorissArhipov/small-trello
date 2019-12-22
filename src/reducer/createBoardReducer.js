import uniqueId from 'lodash/uniqueId';

const initialState = {
    isBoardOpen: false,
    label: '',
    id: null
}

const createBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_BOARD':
            return {
                ...state,
                isBoardOpen: true,
                label: '',
                id: ''
            };
        case 'CANCEL_NEW_BOARD':
            return {
                ...state,
                isBoardOpen: false,
                label: '',
                id: ''
            };
        case 'SET_LABEL':
            return {
                ...state,
                label: action.payload,
            };
        case 'SUBMIT_NEW_BOARD':
            return {
                ...state,
                isBoardOpen: false,
                id: uniqueId('')
            };
        default: 
            return state;
    }
};
  
export default createBoardReducer;