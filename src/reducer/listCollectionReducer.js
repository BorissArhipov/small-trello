import uniqueId from 'lodash/uniqueId';

const initialState = {
    lists: [],
    label: ''
};

const listCollectionReducer = (state = initialState, action) => {
    console.log(action);
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
            console.log(newCard);
            const newCardToList = {
                ...currentList,
                cards: [...currentList.cards, newCard]
            }
            return {
                lists: [...state.lists.slice(0, ind), newCardToList, ...state.lists.slice(ind + 1, state.lists.length)],
                label: ''
            };
        // case 'HANDLE_DROP': {
        //     const { cardName, cardId, listId, done, newListId } = action.payload;
        //     const currentDropList = state.lists.find(list => list.id === newListId); // list that's going to be taking the new card
        //     console.log(action.payload);
        //     currentDropList.cards.push({ label: cardName, id: cardId, done: done, listId: newListId }); // add the card to the list
        //     const removeCard = state.lists.find(list => list.id === listId).cards.findIndex(card => card.id === cardId); // find the card to remove
        //     const oldList = state.lists.find(list => list.id === listId).cards.splice(removeCard, 1); // remove the card from the list

        //         return state;
        // }
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