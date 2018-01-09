import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextUp: 'X',
      One: ' ',
      Two: ' ',
      Three: ' ',
      Four: ' ',
      Five: ' ',
      Six: ' ',
      Seven: ' ',
      Eight: ' ',
      Nine: ' ',
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, num) {
    e.preventDefault();

    //console.log(`${num}`)

    `this.setState({
      ${num}: ${this.state.nextUp}
    })`

    console.log('after:',this.state.One)

    if (this.state.nextUp === 'X') {
      this.setState({
        nextUp: 'O'
      })
    } else {
      this.setState({
        nextUp: 'X'
      })
    }
  }


  render () {
    return (
    <div>
      <table className="game_board">
        <tr>
          <td id="cell_0_0" className="cell" onClick={(e)=> this.handleClick(e, 'One')}>{this.state.One}</td>
          <td id="cell_0_1" className="cell" onClick={(e)=>this.handleClick(e, 'Two')}>{this.state.Two}</td>
          <td id="cell_0_2" className="cell" onClick={(e)=>this.handleClick(e, 'Three')}>{this.state.Three}</td>
        </tr>
        <tr>
          <td id="cell_1_0" className="cell" onClick={(e)=>this.handleClick(e, 'Four')}>{this.state.Four}</td>
          <td id="cell_1_1" className="cell" onClick={(e)=>this.handleClick(e, 'Five')}>{this.state.Five}</td>
          <td id="cell_1_2" className="cell" onClick={(e)=>this.handleClick(e, 'Six')}>{this.state.Six}</td>
        </tr>
        <tr>
          <td id="cell_2_0" className="cell" onClick={(e)=>this.handleClick(e, 'Seven')}>{this.state.Seven}</td>
          <td id="cell_2_1" className="cell" onClick={(e)=>this.handleClick(e, 'Eight')}>{this.state.Eight}</td>
          <td id="cell_2_2" className="cell" onClick={(e)=>this.handleClick(e, 'Nine')}>{this.state.Nine}</td>
        </tr>
      </table>
    </div>
  )}
}


export default Board;
