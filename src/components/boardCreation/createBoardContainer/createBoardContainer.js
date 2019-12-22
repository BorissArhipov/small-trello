import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateBoard from '../createNewBoard/createNewBoard';
import ActiveCreateBoard from '../activeCreateBoard/activeCreateBoard';

import './createBoardContainer.css';

class CreateBoardContainer extends Component {
    render() {

        const { boardReducer } = this.props;

        return (
            <div>
                { boardReducer.isBoardOpen ? <ActiveCreateBoard/> : <CreateBoard /> }
            </div>
        )
    }
}

function mapStateToProps({ boardReducer }) {
    return {
        boardReducer
    }
}

export default connect(mapStateToProps)(CreateBoardContainer)
