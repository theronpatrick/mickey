import React, { Component } from 'react';
import './App.scss';

import api from "utils/api"
import Carousel from "components/Carousel/Carousel"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

    // Fetch the mlb score data
    api.getMlbScores()
    .then((response) => {

      // Response comes back with a "game" array nested within "games"
      this.setState({
        games: response.data.games.game
      })
    })


  }

  render() {

    return (
      <div className="app">
        <div className="carousel-container">
          <Carousel games={this.state.games}></Carousel>
        </div>
      </div>
    );
  }
}

export default App;
