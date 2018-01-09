import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/Board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
  }

  render () {
    return (
    <div>
      <h1>Begoña's Tic Tac Toe Game</h1>
      <Board/>
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
