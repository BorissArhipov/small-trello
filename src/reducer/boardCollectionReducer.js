const initialState = [];

const boardCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_BOARD_TO_COLLECTION':
            return [...state, action.payload];
        default: 
            return state;
    }
};
  
export default boardCollectionReducer;