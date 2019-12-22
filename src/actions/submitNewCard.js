const submitNewCard = (listId) => {
    return {
        type: 'SUBMIT_NEW_CARD',
        payload: listId
    };
}

export default submitNewCard;