import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOn: true,
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
      winner: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, num) {
    e.preventDefault();

    //Starting a new Game
    if(!this.state.gameOn) {
      return alert("The Game is Over, please play again");
    } else {
      //React does not allow ES6 to be used when calling setState so this is the work around
      const myNum = num;
      const obj = {[myNum]: this.state.nextUp};
      this.setState(obj);

      if (this.state.nextUp === 'X') {
        if(!this.winnerCheck()){
          this.setState({
            nextUp: 'O'
          });
        } else {

        }
      } else {
        if (!this.winnerCheck()){
          this.setState({
            nextUp: 'X'
          });
        }
      }
    }
  }

  winnerCheck () {
    var checkBothXY = (curr) => {
      if (this.state.One === curr && this.state.Two === curr && this.state.Three === curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.Four === curr && this.state.Five === curr && this.state.Six === curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.Seven === curr&& this.state.Eight === curr&& this.state.Nine === curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.One === curr && this.state.Four === curr && this.state.Seven === curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.Two === curr&& this.state.Five === curr && this.state.Eight === curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.One === curr&& this.state.Five === curr && this.state.Nine=== curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      } else if (this.state.Three === curr&& this.state.Five === curr && this.state.Seven=== curr) {
        gameOver();
        return alert(curr + " won the Game!!!!");
      }
    }

    var gameOver = () => {
      this.setState({
        gameOn: false
      })
    }

    checkBothXY('X');
    checkBothXY('O');
    console.log(this.state.gameOn)
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
