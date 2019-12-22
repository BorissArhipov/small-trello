import store from './../index';

const newListToColletion = () => {
    const newList = {
        id: (store.getState().activeReducer.id + store.getState().listReducer.id),
        label: store.getState().listReducer.label,
        cards: []
    };
    return {type: 'NEW_LIST_TO_COLLECTION', payload: newList};
}

export default newListToColletion;