import React, {Component} from 'react';
import BoardContainer from './../boardContainer/boardContainer';
import ActiveBoard from './../activeBoard/activeBoard';
import { Route, Switch } from 'react-router-dom';
import Header from './../header/header';

import './for-all.css';

import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={BoardContainer} />
					<Route path="/b/:id" component={ActiveBoard} />
				</Switch>	
			</div>
			
		);
	}
};

