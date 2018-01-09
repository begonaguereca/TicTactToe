import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Board from './components/Board.jsx';
import Headers from './components/Headers.jsx';

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
      <h1>Tic Tac Toe</h1>
      <Headers/>
      <Board/>
    </div>
  )}
}

ReactDOM.render(<App />, document.getElementById('app'));
