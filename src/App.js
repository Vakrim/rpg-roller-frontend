import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CharacterCard />
        </div>
      </Provider>
    );
  }
}

export default App;
