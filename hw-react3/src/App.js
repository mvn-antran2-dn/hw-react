import './App.css';
import React, {Component} from 'react';
import SubmitForm from './Form/formsubmit';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

class App extends Component {
  render(){
    return (
      <div className='App'>
        <SubmitForm />
        <ToastContainer
        position="top-center"
        autoClose={3000}
      />
      </div>
    );
  }
}

export default App;
