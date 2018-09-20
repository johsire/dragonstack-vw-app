
import React from 'react';
import { createStore } from 'redux';
import { render } from 'react-dom';
import Generation from './components/Generation';
import Dragon from './components/Dragon';
import { generationReducer } from './reducers';
import { generationActionCreator } from './actions/generation';
import './index.css';


const store = createStore(
  generationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// subscribe to store takes a callback func - listener:
// it listens for updates/ changes in the App State;
store.subscribe(() => console.log('store-state-update', store.getState()));

fetch('http://localhost:3000/generation')
  .then(response => response.json())
  .then(json => {
    store.dispatch(generationActionCreator(json.generation))
  });

render (
    <div>
      <h1>Dragon Vale City</h1>
      <Generation />
      <Dragon />
    </div>
  ,document.getElementById('root')
);
