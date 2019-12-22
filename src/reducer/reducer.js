import { combineReducers } from 'redux';
import createBoardReducer from './createBoardReducer';
import boardCollectionReducer from './boardCollectionReducer';
import listCollectionReducer from './listCollectionReducer';
import activeBoardReducer from './activeBoardReducer';
import createListReducer from './createListReducer';

const reducer = combineReducers({
    boardReducer: createBoardReducer,
    boardCollection: boardCollectionReducer,
    activeReducer: activeBoardReducer,
    listReducer: createListReducer,
    listCollection: listCollectionReducer
});
  
export default reducer;