import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectActiveBoard from './../../actions/selectActiveBoard';
import CreateListContainer from './createListContainer/createListContainer';
import ListItem from './listItem/listItem';

import './activeBoard.css';

class ActiveBoard extends Component {
    componentDidMount() {
        const {
            match,
            selectActiveBoard,
        } = this.props;
        selectActiveBoard(match.params.id);
    }

    renderAllLists = () => {
        const { listCollection, activeReducer} = this.props;
        return listCollection.lists.filter(list => list.id.slice(0, list.id.indexOf('l')) === activeReducer.id).map(list => {
            return (
                <div key={list.id}>
                    <ListItem currentList={list}/>  
                </div>   
            );
        });
    }

    render() {

        const { activeReducer} = this.props;
        return (
            <div>
                <div className="active-board-header-con">
                    <h2>
                        Board: {activeReducer.label}
                    </h2>
                </div>
                <div className="list-collection-wrap">
                    {this.renderAllLists()}
                    <CreateListContainer/>
                </div>    
            </div>
            
        )
    }
}

function mapStateToProps({ activeReducer, listCollection }) {
    return {
        activeReducer,
        listCollection
    }
}

export default connect(mapStateToProps, { selectActiveBoard })(ActiveBoard);