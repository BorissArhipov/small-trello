import React, { Component } from 'react';
import CreateCardContainer from './../createCardContainer/createCardContainer';
import Card from './../card/card';


class ListItem extends Component {

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
        const {currentList} = this.props;
        return (
            <div>
                <div className='list single-list'>
                    <h2>{currentList.label}</h2>
                    <CreateCardContainer listId={currentList.id}/>
                    {this.renderAllCards(currentList)}
                </div> 
            </div>    
        )
    }
}

export default ListItem;
