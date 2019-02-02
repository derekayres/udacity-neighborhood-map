import React, { Component } from 'react'

class ListView extends Component {


  render() {
    
  var locations = [
    {title: 'ECE', location: {lat: 39.94117, lng: -75.166252}, id: '1'},
    {title: 'Settlement Music School', location: {lat: 39.937523, lng: -75.150828}, id: '2'},
    {title: 'Birra', location: {lat: 39.928599, lng: -75.165108}, id: '3'},
    {title: 'Dickinson Square Park', location: {lat: 39.927617, lng: -75.151629}, id: '4'},
    {title: 'Chick-fil-A', location: {lat: 39.918363, lng: -75.140448}, id: '5'},
    {title: 'Southwark School', location: {lat: 39.925781, lng: -75.160238}, id: '6'}
  ];
  return <ol className='location-list'>
    {locations.map(location => (
      <li key={location.id}>{location.title}</li>
    ))}
  </ol>

  }
}

export default ListView;
