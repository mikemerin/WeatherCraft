const URL = 'http://localhost:3000/api/v1/stations'

export class StationsAdapter {

  static all() {
    return fetch(URL)
      .then( res => res.json() )
  }

}
