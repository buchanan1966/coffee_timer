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
      step: 0
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
    var cs = this.state.step
    if( cs === 4) {
      if(tr > 0){
          --tr;
      } else {
        ++ cs;
        tr = 60
      }
    } else if( cs === 5) {
      if(tr > 0){
          --tr;
      } else {
        ++ cs;
        tr = 135;
      }
    }else if( cs === 6) {
      if(tr > 0){
          --tr;
      } else {
        ++ cs;
      }
    }

    this.setState({
      step: cs,
      timeRemaining: tr
    });
  }

  nextStep(){
    var step = this.state.step + 1
    var tr = 0;
    if(step === 4) {
      tr = 45;
    }
    this.setState({
      step: step,
      timeRemaining: tr
    });
    
  }

  render(){
    return (
      <div>
        <h1>Let's make some coffee!!!!</h1>
        {
          this.state.step === 0
            ? <div> 
                <h3>Fill and start your kettle.</h3>
                <button id='startButton' onClick={(e) => this.nextStep(e)}>Next Stept</button>
              </div>
            : null
        }
        {
          this.state.step === 1
            ? <div> 
                <h3>Measure and grind 42g of coffee.</h3>
                <button id='startButton' onClick={(e) => this.nextStep(e)}>Next Stept</button>
              </div>
            : null
        }
        {
          this.state.step === 2
            ?  <div>
                  <h3>Once water is just off boil, place filter in Chemex and pour a good amount over the filter.</h3>
                  <button id='startButton' onClick={(e) => this.nextStep(e)}>Next Stept</button>
                </div>
            : null
        }
        {
          this.state.step === 3
            ? <div>
                <h3>Pour out water, add ground coffee, place on scale and zero out.</h3>
                <button id='startButton' onClick={(e) => this.nextStep(e)}>Next Stept</button>
              </div>
            : null
        }
        {
          this.state.step === 4
            ? <div>
                <h3>Fill to 150g and stir.</h3>
                <h3>Wait {this.state.timeRemaining} seconds.</h3>
              </div>
            : null
        }
        {
          this.state.step === 5
            ? <div>
                <h3>Fill to 450g.</h3>
                <h3>Wait {this.state.timeRemaining} seconds.</h3>
              </div>
            : null
        }
        {
          this.state.step === 6
            ? <div>
                <h3>Fill to 700g.</h3>
                <h3>Wait {this.state.timeRemaining} seconds.</h3>
              </div>
            : null
        }
        {
          this.state.step === 7
            ? <div>
                <h3>Remove and dispose of filer and enjoy.</h3>
              </div>
            : null
        }      
      </div>
    );
  }
}

ReactDOM.render(
    <Timer />,
    document.getElementById('root')
  );
