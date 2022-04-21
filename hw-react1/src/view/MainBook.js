import React, { Component } from 'react';
import '../style/MainBook.scss';
import Header from '../components/Header/HeaderComponent';
import Main from '../components/Main/MainComponent';
import Footer from '../components/Footer/FooterComponent';

class MainBook extends Component {
  render(){
    return (<>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
      </>        
    );
  };
}

export default MainBook;
