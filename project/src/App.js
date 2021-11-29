
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import Header from './components/Layout/Header';
import Slider from './components/Layout/Slider';
import Menuleft from './components/Layout/Menuleft';
import Footer from './components/Layout/Footer';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <>
        <Header/>
        <Slider/>
        <section>
            <div className="container">
                <div className="row">
                  <Menuleft/>
                 
                  {this.props.children};
                </div>
            </div>
        </section>
        <Footer/>
      </>
    );
 }
}
export default withRouter(App);
