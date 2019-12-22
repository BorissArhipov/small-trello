const handleDrop = ( cardName, cardId, listId, done, newListId ) => {
    return {
        type: 'HANDLE_DROP',
        payload: { cardName, cardId, listId, done, newListId }
    };
}

export default handleDrop;
