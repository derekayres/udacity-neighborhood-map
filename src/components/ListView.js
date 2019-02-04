import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


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

    let showingVenues = this.props.venues.filter( venue => {
      const name = venue.venue.name.toLowerCase();
      const query = this.state.query.toLowerCase();

       if (  venue.venue.name.includes(this.state.query)) {
              //  handle the marker visibility with `setVisible` (set to true)
              // return venue (because the filter needs to return the matching venues)
              venue.marker.setVisible(true);
            //  showingVenues = this.props.venues
         } else {
              // set marker visibility to false
              // DON'T return the venue because it does not match
              venue.marker.setVisible(false);
       }
    });


    /*
    let showingVenues
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingVenues = this.props.venues.filter((venue) => match.test(venue.venue.name))
    } else {
      showingVenues = this.props.venues
    }
    */



    console.log('Props', this.props)
    console.log(this.props.venues)

    return(
      <main>
          <div className="venues-list-wrapper">
            <input type="text"
            placeholder="search by name"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>

          <ol className='venues-list'>
            {showingVenues.map((venue) => (
              <li className='venues-list-item' key={venue.venue.id}>
                {venue.venue.name}
              </li>
            ))}
          </ol>
      </main>

    )
  }
}



export default ListView;
