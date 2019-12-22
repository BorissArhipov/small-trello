import React from 'react';
import { connect } from 'react-redux';
import createNewList from './../../../actions/createNewList';

import './createNewList.css';

const CreateList = ({ createNewList }) => {
    return (
        <div className="create-new-list list" onClick={ () => createNewList() }>
            <h2>Create a new list...</h2>
        </div>
    )
}



export default connect(null, { createNewList })(CreateList);