import uniqueId from 'lodash/uniqueId';

const initialState = {
    isListOpen: false,
    label: '',
    id: null
}

const createListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_NEW_LIST':
            return {
                ...state,
                isListOpen: true,
                label: '',
                id: ''
            };
        case 'CANCEL_NEW_LIST':
            return {
                ...state,
                isListOpen: false,
                label: '',
                id: ''
            };
        case 'SET_LIST_LABEL':
            return {
                ...state,
                label: action.payload,
            };
        case 'SUBMIT_NEW_LIST':
            return {
                ...state,
                isListOpen: false,
                id: uniqueId('list_')
            };
        default: 
            return state;
    }
};
  
export default createListReducer;