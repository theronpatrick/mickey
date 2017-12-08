export default {
  baseUrl: "http://gdx.mlb.com/components/game/mlb/year_2016/month_05/day_20/master_scoreboard.json",

  getMlbScores() {

    const promise = new Promise((resolve, reject) => {
      fetch(this.baseUrl)
      .then((response) => {
        let json = response.json()
        resolve(json)
      })
      .catch((e) => {
          reject(e)
          throw new Error("Error getting MLB Scores")
      })
    });

    return promise


  }
}
