import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


// import { searchHotelByLocation } from '../domain/HotelRepository';
import { setPlace, startSearch } from '../actions/';

const SearchForm = props => (
  <form
    className="search-form"
    onSubmit={(e) => {
      e.preventDefault();
      props.startSearch();
    }}
  >
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.setPlace(e.target.value);
        // e => props.onPlaceChange(e)
      }}
    />
  <input className="submit-button" type="submit" value="Search" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  setPlace: PropTypes.func.isRequired,
  startSearch: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    place: state.place,
  }),
  { setPlace, startSearch },
)(SearchForm);
