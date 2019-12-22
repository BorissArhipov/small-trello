const toggleDone = (cardId, listId) => {
    return {
        type: 'TOGGLE_DONE',
        cardId: cardId,
        listId: listId
    };
}

export default toggleDone;