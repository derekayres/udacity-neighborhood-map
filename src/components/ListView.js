import React, { Component } from 'react'

class ListView extends Component {
  render() {

  var locations = [
    {title: 'ECE', location: {lat: 39.94117, lng: -75.166252}},
    {title: 'Settlement Music School', location: {lat: 39.937523, lng: -75.150828}},
    {title: 'Birra', location: {lat: 39.928599, lng: -75.165108}},
    {title: 'Dickinson Square Park', location: {lat: 39.927617, lng: -75.151629}},
    {title: 'Chick-fil-A', location: {lat: 39.918363, lng: -75.140448}}
  ];
  return <ol>
    {locations.map(location => (
      <li key={location.title}>{location.title}</li>
    ))}
  </ol>

  }
}

export default ListView;
