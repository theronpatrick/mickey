import React, { Component } from 'react';

import CarouselImage from "components/Carousel/CarouselImage/CarouselImage"
import "./Carousel.scss"

class Carousel extends Component {

  componentWillMount() {

  }

  render() {

    let games = this.props.games ? this.props.games : [];

    let carouselImages = games.map((game) => {
      return <CarouselImage game={game} key={game.id}></CarouselImage>
    })

    return (
      <div className="carousel">
        {carouselImages}
      </div>
    );
  }
}

export default Carousel;
