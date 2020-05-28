import React from 'react';
import Text from './components/Text';
import Author from './components/Author';
import Button from './components/Button';
import Tweet from './components/Tweet';

import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      citaActual:"",
      authorActual:"",
      citas: [
      {"quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse"},
      {"quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill"},
      {"quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"},
      {"quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost"},
      {"quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale"},
      {"quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
      {"quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"},
      {"quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart"},
      {"quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth"},
      {"quote": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone"},
      {"quote": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse"},
      {"quote": "Life is what happens to you while you’re busy making other plans.", "author": "John Lennon"},
      {"quote": "We become what we think about.", "author": "Earl Nightingale"},
      {"quote": "14.Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "author": "Mark Twain"}
    ]};

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount(){
    this.generarCitaAleatoria()
  }

  generarCitaAleatoria = ()=>{
    const max = this.state.citas.length -1;
    const min = 0; 
    const index = Math.round(Math.random() * (max - min) + min);
    const cita = this.state.citas[index];
    this.setState({
      citaActual: cita.quote,
      authorActual:cita.author,
    })
  }

  handleClick(event){    
    this.generarCitaAleatoria()
  }


  render(){
    return (    
      <div className="App" id="quote-box">
        <Text value={this.state.citaActual} id="text"/>
        <Author value={this.state.authorActual} id="author"/>
        <div className="button">
        <Tweet  id="tweet-quote" href="twitter.com/intent/tweet"/>
        <Button id="new-quote" value = "New quote" onClick = {this.handleClick}/>
        </div>        
      </div>
    );
  }  
}

export default App;
