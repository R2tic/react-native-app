import * as actions from './actionTypes';

export const addPlace = placeName => {
    return {
        type: actions.ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = (key) => {
    return {
        type: actions.DELETE_PLACE,
        placeKey: key
    };
};