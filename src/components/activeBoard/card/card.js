import React, { Component } from 'react';
import { connect } from 'react-redux';
import toggleDone from './../../../actions/toggleDone';

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
       