import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Header from '../../elements/header';
import CitiesList from '../../elements/cities-list';
import PlacesContainer from '../../elements/places-container';
import PlacesEmpty from '../../elements/places-empty';

import placeCardProp from '../../pages/offer.prop';
import {sortFilteredPlaces} from '../../../six-cities-data';
import LoadingScreen from '../../elements/loading-screen';

function MainPage(props) {
  const {
    places,
    isDataLoaded,
  } = props;

  const placesContainer = (!isDataLoaded && <LoadingScreen places = {places} />) || <PlacesContainer places = {places} />;
  const placesEmpty = (!isDataLoaded && <LoadingScreen places = {places} />) || <PlacesEmpty />;

  return (
    <div className="page page--gray page--main">
      <Header isActive />
      <main className={`page__main page__main--index${!places.length ? ' page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          {places.length ? placesContainer : placesEmpty}
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  places: PropTypes.arrayOf(placeCardProp),
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  places: sortFilteredPlaces(state.offers, state.selectedSorting, state.city),
  isDataLoaded: state.isDataLoaded,
});

export default connect(mapStateToProps)(MainPage);
