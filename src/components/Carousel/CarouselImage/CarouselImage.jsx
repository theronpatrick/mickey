import React, { Component } from 'react';

import "./CarouselImage.scss"

class CarouselImage extends Component {

  componentWillMount() {

  }

  componentDidMount() {
    // Initially focus the first item
    if (this.props.tabIndex === 1) {
      this.refs.figureRef.focus()
    }
  }

  onFocusHandler = () => {
    this.props.setCarouselIndex(this.props.tabIndex)
  }

  focus = () => {
    this.refs.figureRef.focus()
  }

  render() {

    // Get thumbnail image src from data
    let thumbnail = ""
    let thumbnails = this.props.game ? this.props.game.video_thumbnails.thumbnail : []

    for (let tn of thumbnails) {
      // Convert from string to int just in case our api decides to change to returning ints
      if (parseInt(tn.scenario, 10) === 7) {
        thumbnail = tn.content
        break;
      }
    }

    // Get headline from data
    let headline = ""
    let media = this.props.game.game_media ? this.props.game.game_media.media : []

    for (let mediaItem of media) {
      // Grab a headline if we find one in the media data
      if (mediaItem.headline) {
        headline = mediaItem.headline
        break;
      }
    }

    // Build a description based on who won or lost the game
    let score = this.props.game.linescore.r

    // Some teams have their name baked into their city, so remove that part from city name
    let home_team_city = this.props.game.home_team_city.split(" ")[0]
    let away_team_city = this.props.game.away_team_city.split(" ")[0]

    let home_team = `${home_team_city} ${this.props.game.home_team_name}`
    let away_team = `${away_team_city} ${this.props.game.away_team_name}`

    let description = ""
    if (score.home > score.away) {
      description = `The ${home_team} beat the ${away_team} by a score of ${score.home} to ${score.away}`
    } else {
      description = `The ${away_team} beat the ${home_team} by a score of ${score.away} to ${score.home}`
    }

    return (
      <figure className="carousel-image" tabIndex={this.props.tabIndex} onFocus={this.onFocusHandler} ref="figureRef">
        <figcaption>{headline}</figcaption>
        <img src={thumbnail} alt="thumbnail"></img>

        <p>{description}</p>
      </figure>
    );
  }
}

export default CarouselImage;
