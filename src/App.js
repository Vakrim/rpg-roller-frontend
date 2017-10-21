import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
import { connect } from 'react-redux';
import * as actions from './reducer';

@connect(
  state => ({
    actors: state.actors,
  }),
  { createActor: actions.createActor }
)
class App extends Component {
  render() {
    const { actors, createActor } = this.props;

    return (
      <div className="App">
        {actors.map(actor => <CharacterCard key={actor.id} actor={actor} />)}
        <div onClick={createActor}>Add actor</div>
      </div>
    );
  }
}

export default App;
