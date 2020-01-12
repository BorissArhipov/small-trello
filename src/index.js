import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import App from './components/app/app';
import { BrowserRouter as Router } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './toLocalStorage/toLocalStorage';

const middleware = applyMiddleware(thunk);
const persistedState = loadState();

const store = createStore(
	reducer,
	persistedState,
    composeWithDevTools(middleware)
	);

store.subscribe(throttle(() => {
    saveState({
        boardCollection: store.getState().boardCollection,
        activeReducer: store.getState().activeReducer,
        boardReducer: store.getState().boardReducer,
		listCollection: store.getState().listCollection,
		listReducer: store.getState().listReducer
    })
}, 1000));



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
