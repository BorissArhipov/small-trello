import React, {Component} from 'react';
import BoardContainer from './../boardContainer/boardContainer';
import ActiveBoard from './../activeBoard/activeBoard';
import { Route, Switch } from 'react-router-dom';
import Header from './../header/header';
import ErrorPage from './../errorPage/errorPage';

import './for-all.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header/>
				<Switch>
					<Route exact path="/" component={BoardContainer} />
					<Route path="/b/:id" component={ActiveBoard} />
					<Route component={ErrorPage} />
				</Switch>	
			</div>
			
		);
	}
};

