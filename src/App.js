import React, {Component} from 'react';
import './App.css';



class App extends Component {
    state = {
        area: Array(9).fill(null),
        player: 'X',
        winner: null
    }

    winLines = () => {
        const win = [
            ['0','1','2'],
            ['3','4','5'],
            ['6','7','8'],
            ['0','3','6'],
            ['1','4','7'],
            ['2','5','8'],
            ['0','4','8'],
            ['2','4','6']
        ];

        const copy = this.state.area;
        for(let index = 0; index < win.length; index++){
            const [a,b,c] = win[index];
            if(copy[a] && copy[a] === copy[b] && copy[a] === copy[c]){
                this.setState({
                    winner: this.state.player
                });
                alert(this.state.player +' ' + 'won');
            }
            
        }
        
    }

    clickHandler = (index) => {
        let arr = this.state.area;
        if(arr[index] == null && this.state.winner == null){
            arr[index] = this.state.player
            let newPlayer = this.state.player === 'X' ? 'O' : 'X';
            this.setState({
                area: arr,
                player: newPlayer

            })
        }
        this.winLines();                                                         
    }
    
    render(){
        const pieces = this.state.area.map((val, index) => {
        return <div className = "box" key = {index} 
        onClick = {() => this.clickHandler(index)}>{val}</div>
        });

        return (
            <div className = "Main">
                <h1>Simple Tic Tac Toe Game</h1>
                <div className = "Board">
                    {pieces}
                </div> 
                <h2>Made By Avas Bajracharya</h2>
            </div> 
        );
    }
}

export default App;


