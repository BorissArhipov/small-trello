import React, { Component } from 'react';
import { connect } from 'react-redux';
import setListLabel from './../../../actions/setListLabel';
import submitNewList from './../../../actions/submitNewlist';
import newListToCollection from './../../../actions/newListToCollection';
import cancelNewList from './../../../actions/cancelNewList';

import './activeCreateList.css';

class ActiveCreateList extends Component {
    onSubmit = (e) => {
        const {submitNewList, newListToCollection} = this.props;
        e.preventDefault();
        submitNewList();
        newListToCollection();
    }

    render() {
        const {setListLabel, cancelNewList} = this.props;
        return (
            <form className="active-create-list-con" onSubmit={this.onSubmit}>
                <h2>
                    Creating new list...
                </h2>
                <input 
                    type="text" 
                    placeholder="How shoud I call it?"
                    onChange = { (e) => setListLabel(e.target.value)}
                />
                <div className="active-create-list-con2">
                    <button type="button" className="active-create-list-cancel" onClick={() => cancelNewList()}>Cancel</button>
                    <button type="submit" className="active-create-list-submit">Create</button>
                </div>
                
            </form>
        );
    }
}

export default connect(null, { setListLabel, submitNewList, newListToCollection, cancelNewList })(ActiveCreateList);