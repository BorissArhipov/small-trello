import React from 'react';
import { connect } from 'react-redux';
import createNewBoard from '../../../actions/createNewBoard';

import './createNewBoard.css';

const CreateBoard = ({ createNewBoard }) => {
    return (
        <div className="create-new-board board" onClick={ () => createNewBoard() }>
            <h2>Create a new board...</h2>
        </div>
    )
}



export default connect(null, { createNewBoard })(CreateBoard);