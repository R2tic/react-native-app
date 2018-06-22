import * as actions from '../actions/actionTypes';

const initialStae = {
    places: []
};

const reducer = (state = initialStae, action) => {
    switch (action.type) {
        case actions.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: String(Math.random()),
                    name: action.placeName,
                    image: {
                        uri: 'https://www.publicdomainpictures.net/pictures/150000/velka/tropical-beach-1454007190ZAK.jpg'
                    }
                })
            };
        case actions.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                })
            };
        default:
            return state;
    }
};

export default reducer;