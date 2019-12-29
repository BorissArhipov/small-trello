import React, { Component } from 'react';
import Card from './../card/card';

class CardContainer extends Component {

    renderAllCards = (list) => {
        const listId = list.id;
        return list.cards.map(card => { 
            const cardId = card.id; 
            return(
                <Card key={card.id} done={card.done} label={card.label} cardId={cardId} listId={listId}/>
            );
        });
    }

    render() {
        const {
            currentList,
        } = this.props;

        return (
            <div>
                {this.renderAllCards(currentList)}
            </div>   
        )
    }
}

export default CardContainer;