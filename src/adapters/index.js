const stations_URL = 'http://localhost:3000/api/v1/stations'
const hourlies_URL = 'http://localhost:3000/api/v1/hourlies'
const dailies_URL = 'http://localhost:3000/api/v1/dailies'
const monthlies_URL = 'http://localhost:3000/api/v1/monthlies'


export class StationsAdapter {

  static all() {
    return fetch(stations_URL)
      .then( res => res.json() )
  }

}

export class HourliesAdapter {

  static all() {
    return fetch(hourlies_URL)
      .then( res => res.json() )
  }

}

export class DailiesAdapter {

  static all() {
    return fetch(dailies_URL)
      .then( res => res.json() )
  }

}

export class MonthliesAdapter {

  static all() {
    return fetch(monthlies_URL)
      .then( res => res.json() )
  }

}
