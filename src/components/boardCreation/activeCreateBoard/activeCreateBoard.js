import React, { Component } from 'react';
import { connect } from 'react-redux';
import setLabel from './../../../actions/setLabel';
import submitNewBoard from './../../../actions/submitNewBoard';
import newBoardToCollection from './../../../actions/newBoardToCollection';
import cancelNewBoard from './../../../actions/cancelNewBoard';

import './activeCreateBoard.css';

class ActiveCreateBoard extends Component {
    onSubmit = (e) => {
        const {submitNewBoard, newBoardToCollection} = this.props;
        e.preventDefault();
        submitNewBoard();
        newBoardToCollection();
    }

    render() {
        const {setLabel, cancelNewBoard} = this.props;
        return (
            <form className="active-create-board-con" onSubmit={this.onSubmit}>
                <h2>
                    Creating new board...
                </h2>
                <input 
                    type="text" 
                    placeholder="How shoud I call it?"
                    onChange = { (e) => setLabel(e.target.value)}
                />
                <div className="active-create-board-con2">
                    <button type="button" className="active-create-board-cancel" onClick={() => cancelNewBoard()}>Cancel</button>
                    <button type="submit" className="active-create-board-submit">Create</button>
                </div>
                
            </form>
        );
    }
}

export default connect(null, { setLabel, submitNewBoard, newBoardToCollection, cancelNewBoard })(ActiveCreateBoard);