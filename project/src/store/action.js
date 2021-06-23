export const ActionType = {
  CURRENT_CITY: 'city/addCurrent',
  ACTIVE_PLACE_ID: 'places/activePlace',
  IS_OPEN: 'sorting/isOpen',
  SORTING_TYPE: 'sorting/chahgeSortingType',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
};

export const ActionCreator = {
  setCurrentCity: (payload) => ({
    type: ActionType.CURRENT_CITY,
    payload,
  }),
  setActivePlaceID: (payload) => ({
    type: ActionType.ACTIVE_PLACE_ID,
    payload,
  }),
  setOpening: () => ({
    type: ActionType.IS_OPEN,
  }),
  chahgeSortingType: (payload) => ({
    type: ActionType.SORTING_TYPE,
    payload,
  }),
  loadOffers: (payload) => ({
    type: ActionType.LOAD_OFFERS,
    payload,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};