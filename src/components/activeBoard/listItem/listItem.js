import React, { Component } from 'react';
import CreateCardContainer from './../createCardContainer/createCardContainer';
import Card from './../card/card';
import CardConatiner from './../cardContainer/cardContainer';
import { DropTarget } from 'react-dnd';
import ItemTypes from './../itemTypes/itemTypes';
import toggleDone from './../../../actions/toggleDone';
import { compose } from 'redux';
import { connect } from 'react-redux';
import handleDrop from './../../../actions/handleDrop';

const dropSource = {
    drop(props, monitor) {
        const item = monitor.getItem();
        props.handleDrop( item.label, item.cardId, item.listId, item.done, props.currentList.id );
    },
}

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        hovered: monitor.isOver(),
        item: monitor.getItem()
    }
}

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
        const {
            currentList,
            connectDropTarget,
            hovered,
            item
        } = this.props;

        return connectDropTarget(
            <div className='list single-list'>
                <h2>{currentList.label}</h2>
                <CreateCardContainer listId={currentList.id}/>
                <div>
                    <CardConatiner currentList={currentList}/>
                </div>  
            </div>   
        )
    }
}

const mapStateToProps = state => state;

export default compose(
    connect(mapStateToProps, { toggleDone, handleDrop }),
    DropTarget(ItemTypes.CARD, dropSource, collect) 
  )(ListItem);


