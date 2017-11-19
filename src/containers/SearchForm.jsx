import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// placeが利用可能になる
const mapStateToProps = state => ({
  place: state.place,
});

// onPlaceChangeが利用可能になる
const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

const SearchForm = props => (
  <form className="search-form" onSubmit={e => props.onSubmit(e)}>
    <input
      className="place-input"
      type="text"
      size="30"
      value={props.place}
      onChange={(e) => {
        e.preventDefault();
        props.onPlaceChange(e.target.value);
        // e => props.onPlaceChange(e)
      }}
    />
  <input className="submit-button" type="submit" value="Search" />
  </form>
);

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const ConnectedSearchForm =
  connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default ConnectedSearchForm;
