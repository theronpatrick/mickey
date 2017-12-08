import React, { Component } from 'react';

import CarouselImage from "components/Carousel/CarouselImage/CarouselImage"
import "./Carousel.scss"

class Carousel extends Component {

  componentWillMount() {
    this.setState({
      carouselIndex: 1
    })

    window.addEventListener('keydown', this.keypressHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("onkeypress", this.keypressHandler)
  }

  // Go back and forth highlighting the thumbnails with keyboard presses
  keypressHandler = (e) => {

    // If we press arrow right (and we're not at end of array), increment our carousel index
    // Afterwards, get our ref to the image in our array and focus it
    if (e.key.toLowerCase() === "arrowright" && this.state.carouselIndex < this.props.games.length) {
      this.setState((prevState) => {
        return {
          carouselIndex: prevState.carouselIndex + 1
        }
      }, () => {
        console.log("in callback");
        this.refs[`image-ref-${this.state.carouselIndex}`].focus()
      })

      // Likewise, go back with left arrow, and focus the correct image
    } else if (e.key.toLowerCase() === "arrowleft" && this.state.carouselIndex > 1 ) {
      console.log("state " , this.state.carouselIndex);
      this.setState((prevState) => {
        return {
          carouselIndex: prevState.carouselIndex - 1
        }
      }, () => {
        console.log("in callback");
        this.refs[`image-ref-${this.state.carouselIndex}`].focus()
      })
    }
  }

  setCarouselIndex = (i) => {
    this.setState({
      carouselIndex: i
    })
  }

  render() {

    let games = this.props.games ? this.props.games : [];

    let index = 0;
    let carouselImages = games.map((game) => {
      // Increment counter to set index on each item
      index++

      const refString = `image-ref-${index}`

      return <CarouselImage
        game={game}
        key={game.id}
        tabIndex={index}
        setCarouselIndex={this.setCarouselIndex}
        activeTabIndex={this.state.carouselIndex}
        ref={refString}
      ></CarouselImage>
    })

    return (
      <div className="carousel">
        {carouselImages}
      </div>
    );
  }
}

export default Carousel;
