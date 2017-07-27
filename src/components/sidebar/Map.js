import React from 'react'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

export default function Map({ station, stations }) {

  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoibWlrZW1lcmluIiwiYSI6ImNqNHFxb2F2aTBpc2EycnA1dGQzemp1M3kifQ.7TzxXmyx53oFWKVPQD3Gsw"
  });

  const { latitude, longitude } = station
  console.log("map", station, "stations:", stations.length)

  return (
    <div>
      <Map style="mapbox://styles/mapbox/streets-v9"
           containerStyle={{ height: "55vh", width: "23vw" }}
           zoom='9'
           center={[longitude, latitude]}>
        <Layer type="symbol" id="marker"
           layout={{ "icon-image": "marker-15" }}>
           <Feature coordinates={[longitude, latitude]}/>
        </Layer>
      </Map>
    </div>
  )

}

//
// <Layer type="symbol" id="marker2"
//    layout={{ "icon-image": "harbor-15" }}>
//    <Feature coordinates={[longitude+1, latitude+1]}/>
//  </Layer>
