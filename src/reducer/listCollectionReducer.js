import uniqueId from 'lodash/uniqueId';

const initialState = {
    lists: [],
    label: ''
};

const listCollectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NEW_LIST_TO_COLLECTION':
            return {
                ...state,
                lists: [...state.lists, action.payload], 
                label: ''
            };
        case 'SET_CARD_LABEL':
            return {
                ...state,
                label: action.payload
            };
        case 'SUBMIT_NEW_CARD':
            const currentList = state.lists.find(list => list.id === action.payload);
            const ind = state.lists.indexOf(currentList);
            const newCard = {
                label: state.label,
                id: uniqueId('card_'),
                done: false,
                listId: currentList.id  
            };
            const newCardToList = {
                ...currentList,
                cards: [...currentList.cards, newCard]
            }
            return {
                lists: [...state.lists.slice(0, ind), newCardToList, ...state.lists.slice(ind + 1, state.lists.length)],
                label: ''
            };
        case 'HANDLE_DROP':
            const newList = state.lists.find(list => list.id === action.payload.newListId);
            const newListInd = state.lists.indexOf(newList);
            const droppedCard = {
                label: action.payload.cardName,
                id: action.payload.cardId,
                done: action.payload.done,
                listId: action.payload.newListId  
            };
            const droppedCardToList = {
                ...newList,
                cards: [...newList.cards, droppedCard]
            }
            const newListToState = [...state.lists.slice(0, newListInd), droppedCardToList, ...state.lists.slice(newListInd + 1, state.lists.length)];
            const oldList = newListToState.find(list => list.id === action.payload.listId);
            const oldListInd = newListToState.indexOf(oldList);
            const oldCardInd = oldList.cards.indexOf(oldList.cards.find(el => {
                if(el.id === action.payload.cardId) {
                    return el;
                }
            }));
            const deleteCardFromOldList = {
                ...oldList,
                cards: [...oldList.cards.slice(0, oldCardInd), ...oldList.cards.slice(oldCardInd + 1, oldList.cards.length)]
            }
            return {
                lists: [...newListToState.slice(0, oldListInd), deleteCardFromOldList, ...newListToState.slice(oldListInd + 1, newListToState.length)],
                label: ''
            };

        case 'TOGGLE_DONE':
            const currentCardList = state.lists.find(list => list.id === action.listId);
            const indx = state.lists.indexOf(currentCardList);
            const findCard = currentCardList.cards.find(card => card.id === action.cardId);
            const cardInd = currentCardList.cards.indexOf(findCard);
            if(findCard.done) {
                findCard.done = false;
            } else {
                findCard.done = true;
            }
            currentCardList.cards = [...currentCardList.cards.slice(0, cardInd), findCard, ...currentCardList.cards.slice(cardInd + 1, currentCardList.cards.length)];
            return {
                ...state,
                lists: [...state.lists.slice(0, indx), currentCardList, ...state.lists.slice(indx + 1, state.lists.length)]
            }

        default: 
            return state;
    }
    
};
  
export default listCollectionReducer;