import store from './../index';

const newBoardToColletion = () => {
    const newBoard = {
        id: store.getState().boardReducer.id,
        label: store.getState().boardReducer.label
    };
    return {type: 'NEW_BOARD_TO_COLLECTION', payload: newBoard};
}

export default newBoardToColletion;