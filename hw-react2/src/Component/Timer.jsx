import React ,{Component} from "react";

class Timer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      timer: new Date().toLocaleTimeString(),
      count: 20 ,
      btnStatus: "stop",
    };
    
    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
  }

  componentDidMount(){
    this.startTimer();
  }

  componentDidUpdate(){
    if( !this.state.count){
      clearInterval(this.timer);
    }
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.setState({ 
        count: this.state.count -1
      });
    }, 1000);
  }

  handleSwitchBtn(status) {
    this.setState({
      btnStatus: status,
    });
    if (this.state.btnStatus === "start") {
      this.starTimer();
    } else {
      clearInterval(this.timer);
    }
  }


  render(){
    return(<>
    <li className="countdownItem">
    <div className="countdown">
        {this.state.btnStatus === "start" ? (
          <button className="btn-countdown" onClick={this.handleSwitchBtn.bind(this, "stop")}>
            Start
          </button>
        ) : (
          <button className="btn-countdown" onClick={this.handleSwitchBtn.bind(this, "start")}>
            Stop
          </button>
        )}
        <div className="text-countdown">{this.state.count}</div>
      </div>
    </li> 
    </>);
  }
}

export default Timer;
