import React, { Component } from 'react';
import { connect } from 'react-redux'
import toggleDone from './../../../actions/toggleDone';

// const Types = {
//     CARD: 'card',
// }


// const cardSource = {
//     beginDrag({ label, cardId, listId, done }) {
//         return {
//             label, cardId, listId, done
//         }
//     }
// }

// function collect(connect, monitor) {
// 	return {
// 		connectDragSource: connect.dragSource(),
// 		connectDragPreview: connect.dragPreview(),
// 		isDragging: monitor.isDragging(),
// 	}
// }


class Card extends Component {
    cardToggleDone(cardId, listId) {
        const {toggleDone} = this.props;
        toggleDone(cardId, listId);
    }

    render() {

        const {
            label,
            done,
            cardId,
            listId,
        } = this.props;

        return (
            <span 
                className={done ? "single-card-done" : "single-card"} 
                onClick={() => this.cardToggleDone(cardId, listId)}
            >
                {label}
            </span>
        )
    }
}


export default connect(null, { toggleDone })(Card);
       