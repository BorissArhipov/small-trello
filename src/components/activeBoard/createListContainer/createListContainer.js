import React, { Component } from 'react'
import { connect } from 'react-redux'
import CreateList from './../createNewList/createNewList';
import ActiveCreateList from './../activeCreateList/activeCreateList';


class CreateListContainer extends Component {
    render() {

        const { listReducer } = this.props;

        return (
            <div>
                { listReducer.isListOpen ? <ActiveCreateList/> : <CreateList /> }
            </div>
        )
    }
}

function mapStateToProps({ listReducer }) {
    return {
        listReducer
    }
}

export default connect(mapStateToProps)(CreateListContainer)
