import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateBoardContainer from './../boardCreation/createBoardContainer/createBoardContainer';
import { Link } from 'react-router-dom';

import './boardContainer.css';

class BoardContainer extends Component {
    renderAllBoards = () => {
        const { boardCollection } = this.props;
        return boardCollection.map(board => {
            return (
                <Link className="link" key={board.id} to={`/b/${board.id}`}>
                    <div className='board single-board'>
                        <h2>{board.label}</h2>
                    </div>
                </Link>     
            );
        });
    }
    render() {
        return(
            <div className='board-wrapper'>
                {this.renderAllBoards()}
                <CreateBoardContainer/>
            </div>
        );
    }
}

function mapStateToProps({boardCollection}) {
    return {boardCollection};
};

export default connect(mapStateToProps)(BoardContainer);