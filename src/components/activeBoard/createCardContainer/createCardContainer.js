import React, { Component } from 'react';
import { connect } from 'react-redux';
import setCardLabel from './../../../actions/setCardLabel';
import submitNewCard from './../../../actions/submitNewCard';

class CreateCardContainer extends Component {

    onSubmit = (e) => {
        const {submitNewCard, listId, setCardLabel} = this.props;
        setCardLabel(this.textInput.value);
        e.preventDefault();
        submitNewCard(listId);
        e.target.reset();
        this.textInput.value = '';
    }

    render() {
        return (
            <form className="create-card-con" onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Create new task"
                    ref={(input) => this.textInput = input}
                />
                <button type="submit" className="create-card-submit">Create</button>   
            </form>
        );
    }
}
export default connect(null, { setCardLabel, submitNewCard})(CreateCardContainer);
