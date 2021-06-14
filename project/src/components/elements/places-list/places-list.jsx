import React from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../../elements/place-card/place-card';
import {PlaceType} from '../../../const';

function PlacesList(props) {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard key = {offer.id} offer = {offer} placesType = {PlaceType.CITIES} />)}
    </div>
  );
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default PlacesList;
