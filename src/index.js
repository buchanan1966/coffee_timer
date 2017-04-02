import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

class Timer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      timeRemaining: 240,
      message: '',
      started: false
    };
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  } 

  componentWillUnmount(){
    clearInterval(this.timerID);
  }  

  tick() {

    var tr = this.state.timeRemaining;
    var message = '';
    if(this.state.started){    
      if(tr > 0){
        --tr;
        if(tr > 195){
          message = 'Fill water to 150g and stir.'
        } else if(tr <= 195 && tr > 135){
          message = 'Fill to 450g.'
      } else if(tr <= 135){
          message = 'Fill to 700g.'
      }
      } else {
        message = 'Coffee is ready!';
      }

    } else {
      message = "Prepare coffee and click start."
    }
    this.setState({
      date: new Date(),
      timeRemaining: tr,
      message: message
    });
  }

  startTimer(){
    this.setState({
      started: true
    });
    
  }

  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>There are {this.state.timeRemaining} seconds remaining.</h2>
        <h2>{this.state.message}</h2>
        {
          this.state.started
            ? null
            : <button id='startButton' onClick={(e) => this.startTimer(e)}>Start</button>      
        }
      </div>
    );
  }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('root')
  );
