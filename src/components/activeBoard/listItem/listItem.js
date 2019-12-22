import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateCardContainer from './../createCardContainer/createCardContainer';
import handleDrop from './../../../actions/handleDrop';
import Card from './../card/card';



// const Types = {
//     CARD: 'card',
// }

// const dropSource = {
//     drop(props, monitor) {
//         const card = monitor.getItem(); // this item is being dragged
//         const target = monitor.getDropResult();
//         console.log(props);
//         console.log(target);
//         props.handleDrop(card.label, card.cardId, card.listId, card.done, props.id);
//         // const droppedItem = props.onDrop(monitor.getItem());

//     },
 
// }

// function collect(connect, monitor) {
//     return {
//         // Call this function inside render()
//         // to let React DnD handle the drag events:
//         connectDropTarget: connect.dropTarget(),
//         // You can ask the monitor about the current drag state:
//         isOver: monitor.isOver(),
//         isOverCurrent: monitor.isOver({ shallow: true }),
//         canDrop: monitor.canDrop(),
//         itemType: monitor.getItemType()
//     };
// }

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


// ListItem = DropTarget(Types.CARD, dropSource, collect)(ListItem);
export default connect(null, { handleDrop })(ListItem);
