import find from 'lodash/find';

import store from './../index';

const selectActiveBoard = (id) => {
    const boardCollection = store.getState().boardCollection;
    const activeBoard = find(boardCollection, board => board.id === id);
    return {type: 'SELECT_ACTIVE_BOARD', payload: activeBoard};
}
export default selectActiveBoard;