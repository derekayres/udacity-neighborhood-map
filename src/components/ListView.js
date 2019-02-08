import React, { Component } from 'react'
import PropTypes from 'prop-types'


class ListView extends Component {
  static propTypes = {
    venues: PropTypes.array.isRequired
  }

state = {
  query: '',
}

updateQuery = (query) => {
  this.setState({
    query: query
  })
}


render() {

    let showingVenues = this.props.venues.filter(venue => {
      const name = venue.venue.name.toLowerCase();
      const query = this.state.query.toLowerCase();

      // check if name matches query
      if (name.includes(query)) {
        //if it does and venue has a marker, set it to visible
        if (venue.marker) {
          venue.marker.setVisible(true);
        }

        //  return the venue because is matches
        return venue;
      } else {
        // it doesn't match so set the marker to invisible
        if (venue.marker) {
          venue.marker.setVisible(false);
        }
      }
        return null;
    })


    console.log('Props', this.props)
    console.log(this.props.venues)

    return(
      <section className='listView'>
          <div className="venues-list-wrapper">
            <input
            className="input-field"
            type="text"
            placeholder="search by name"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          <ol className='venues-list'>
            {showingVenues.map((venue) => (
              <li className='venues-list-item'
              key={venue.venue.id}
              onClick={(event) => window.google.maps.event.trigger(venue.marker,'click')}
              //onClick={(event) => window.google.maps.Animation.BOUNCE(venue.marker,'click')}
              //  venue.marker.setAnimation(window.google.maps.Animation.BOUNCE);
              >
                {venue.venue.name}
              </li>
            ))}
          </ol>
          </div>
      </section>

    )
  }
}



export default ListView;
