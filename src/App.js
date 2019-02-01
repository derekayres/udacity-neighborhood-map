import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {

  state = {
    venues: []
  }

componentDidMount() {
  this.getVenues()
}

renderMap = () => {
  loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD9Qkk6g69ogB8lZ4b2bpjB5uP9E7fC2F0&callback=initMap")
  window.initMap = this.initMap
}

getVenues = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "JS4S3FPF54JTMCQBK3MZ2PTVSIT4RM4ZDW1J4EA0OJXYDP5V",
    client_secret: "PYCRGI34TRVTA5LS1Z3J02DCRHQHNHKYOUABJP5DP1TMA2YY",
    query: "food",
    ll: "39.926381, -75.155141",
    v: "20180323"
  }
  //  key note to self:  renderMap doesn't execute until the dynamic data comes in from the AJAX request to avoid an empty array.  it comes in as a callback after the data loads.
  axios.get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState({
        venues: response.data.response.groups[0].items
      }, this.renderMap())
    })
    .catch(error => {
      console.log("Error." + error)
    })
  }

  initMap = () => {

          //create a map
          var map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 39.926381, lng: -75.155141},
            zoom: 14
          })

          //create info window
          var infowindow = new window.google.maps.InfoWindow()
          //display markers
          this.state.venues.map(myVenue => {

            var contentString = `${myVenue.venue.name} Address: ${myVenue.venue.location.address}`
            //create marker
            var marker = new window.google.maps.Marker({
              position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng},
              map: map,
              title: myVenue.venue.name
            })
            //click on marker
            marker.addListener('click', function() {
              //change the content
              infowindow.setContent(contentString)
              //opens an infowindow
              infowindow.open(map, marker);
            })
          })
  }

  render() {
    return (
      <main>
      <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
