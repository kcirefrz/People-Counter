import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  decrement(){
    if(this.state.counter === 0){
      this.setState({
          counter:0
      });
    }else {
      this.setState({
          counter: this.state.counter - 1
      });
    }
}

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return(

      <div class="container">

        <div class="counterSection">

          <h1 class="title">People Counter</h1>

          <h1 class="counter"> <p class="counting">Counting</p> {this.state.counter} <p class="people">people</p> </h1>
          


          <div class="buttons">

            <Button color="danger" onClick={this.decrement.bind(this)}
            
            style={{marginRight: 30, width: 70, fontSize: 40}}>-</Button>
            

            <Button color="info" onClick={this.increment.bind(this)}

            style={{width: 70, fontSize: 40}}>+</Button>

          </div>

        </div>

        <footer>
          <span>&copy; Erick Fares - </span>
          <a href="https://www.linkedin.com/in/erick-fares-3941a0207/">Linkedin - </a>
          <a href="https://github.com/kcirefrz">GitHub - </a>
          <span>erickfaresrvz@gmail.com</span>
        </footer>

      </div>

    );
  }
}
