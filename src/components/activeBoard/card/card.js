import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleDone from './../../../actions/toggleDone';
import { DragSource } from 'react-dnd';
import ItemTypes from './../itemTypes/itemTypes';
import { compose } from 'redux';

const cardSource = {
  
    beginDrag(props, monitor, component) {
        return props;
    },
  
    endDrag(props, monitor, component) {
        if(!monitor.didDrop()) {
            return;
        }
    }
}
  

  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      connectDragPreview: connect.dragPreview(),
      isDragging: monitor.isDragging(),
    }
  }

class Card extends Component {
    cardToggleDone(cardId, listId) {
        const {toggleDone} = this.props;
        toggleDone(cardId, listId);
    }

    render() {
        const {
            isDragging,
            connectDragSource,
            label,
            done,
            cardId,
            listId,
        } = this.props;

        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <span 
                className={done ? "single-card-done" : "single-card"} 
                onClick={() => this.cardToggleDone(cardId, listId)}
                style={{opacity}}
            >
                {label}
            </span> 
        )
    }
}

const mapStateToProps = state => state;

export default compose(
    DragSource(ItemTypes.CARD, cardSource, collect),
    connect(mapStateToProps, { toggleDone })
  )(Card);

       