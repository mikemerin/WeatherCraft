const stations_URL = 'http://localhost:3000/api/v1/stations'
// const hourlies_URL = 'http://localhost:3000/api/v1/hourlies'
const dailies_URL = 'http://localhost:3000/api/v1/dailies'
const monthlies_URL = 'http://localhost:3000/api/v1/monthlies'


export class StationsAdapter {

  static all() {
    return fetch(stations_URL)
      .then( res => res.json() )
  }

}

// to be changed when multiple hourlies tables are added back in
// export class HourliesAdapter {
//
//   static all() {
//     return fetch(hourlies_URL)
//       .then( res => res.json() )
//   }
//
// }

export class DailiesAdapter {

  static all() {
    return fetch(dailies_URL)
      .then( res => res.json() )
  }

  static entry_date(wban, date) {
    return fetch(`${dailies_URL}/${wban}/${date}/adjacent`)
      .then( res => res.json() )
  }

  static entry_yeartoyear(wban, date) {
    console.log("Fetching Year To Year", new Date())
    return fetch(`${dailies_URL}/${wban}/${date}/yeartoyear`)
      .then( res => res.json() )
  }

  static entry_historical(wban, date) {
    console.log("Fetching Historical", new Date())
    return fetch(`${dailies_URL}/${wban}/${date}/historical`)
      .then( res => res.json() )
  }

}

export class MonthliesAdapter {

  static all() {
    return fetch(monthlies_URL)
      .then( res => res.json() )
  }

  static entry_date(wban, date) {
    const year_month = date.slice(0, -2)
    return fetch(`${monthlies_URL}/${wban}/${year_month}/adjacent`)
      .then( res => res.json() )
  }

  static entry_yeartoyear(wban, date) {
    const year_month = date.slice(0, -2)
    return fetch(`${monthlies_URL}/${wban}/${year_month}/yeartoyear`)
      .then( res => res.json() )
  }

  static entry_historical(wban, date) {
    const year_month = date.slice(0, -2)
    return fetch(`${monthlies_URL}/${wban}/${year_month}/historical`)
      .then( res => res.json() )
  }

}


// https://api.twitter.com/1.1/search/tweets.json?oauth_consumer_key=FmuukqaQVJ5x19DM2FrkzkXSu&oauth_token=127821325-NbVVx5dLKBeh6hlliFNzuPfPfatmTX8I9vr3wPQa&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1499287094&oauth_nonce=eMx6XT&oauth_version=1.0&oauth_signature=hcoZegK9sOZqmL%2BanEIkxFAkftE%3D&q=%40twitterapi
