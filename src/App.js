import React from 'react';
import Button from './components/Button';
import Joke from './components/Joke';

const initialState = {
  joke: undefined,
  error: undefined
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  getRandomChuckJoke = async (e) => {
    e.preventDefault();
    const category = e.target.elements.category.value;
    const api_call = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const data = await api_call.json();
    if (category) {
      this.setState({
        joke: data.value,
        error: ''
      });
    } else {
      this.setState({
        error: 'no joke'
      });
    }
  }


  render() {

    const {joke, error} = this.state;

    return(
      <div>
        <Button 
            getRandomChuckJoke={this.getRandomChuckJoke}
          />
          <Joke 
            joke={joke}
            error={error}
          />
      </div>
    );
  }
};

export default App;
