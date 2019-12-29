import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const store = createStore(reducer);

ReactDOM.render(
	<DndProvider backend={Backend}>
		<Provider store={store}>
			<Router>
				<App/>  
			</Router>
		</Provider>
	</DndProvider>,
document.getElementById('root'));

export default store;
