import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/home';
import About from './Component/about';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect(event, pageName){
    event.preventDefault();
    this.setState({currentPage: pageName})
  }

  render(){
    return (<>
     <ul className="MenuList">
        <li className="MenuItem">
          <a href ="." onClick={(event) => this.handleRedirect(event, "home")}>
            Home
          </a>
        </li>
        <li className="MenuItem">
          <a href ="." onClick={(event) => this.handleRedirect(event, "about")}>
            About
          </a>
        </li>
      </ul>
      <div className='App'>
        {this.state.currentPage === "home" ? <Home /> : <About />}
      </div>
    </>
    );
  }
  
}

export default App;
