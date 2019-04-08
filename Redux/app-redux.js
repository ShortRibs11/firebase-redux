import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

//--------------------------------------------------------------------
// Initial State
//--------------------------------------------------------------------
const initialState = {
  favoriteAnimal: 'duck',
  personData: { },
}

//--------------------------------------------------------------------
// Reducer
//--------------------------------------------------------------------

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVORITE_ANIMAL":
      return { ...state, favoriteAnimal: action.value };

    case "SET_PERSON_DATA":
      return { ...state, personData: action.value };

    default:
      return state;
  }
};

//--------------------------------------------------------------------
// Action Creators
//--------------------------------------------------------------------
const setPersonData = (personData) => {
  return {
    type: "SET_PERSON_DATA",
    value: personData
  };
};
export { setPersonData };

const setFavoriteAnimal = (favoriteAnimal) => {
  return {
    type: "SET_FAVORITE_ANIMAL",
    value: favoriteAnimal
  };
};
export { setFavoriteAnimal };

//--------------------------------------------------------------------
// Thunk Action Creators
//--------------------------------------------------------------------
const watchPersonData = () => {
  return function(dispatch) {
    firebase.database().ref("person").on("value", function(snapshot)
    {
      personData = snapshot.val();
      dispatch(setPersonData(personData));

    }, function(error) {console.log(error); });
  }
};
export { watchPersonData };

//--------------------------------------------------------------------
// Create the Store
//--------------------------------------------------------------------
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };
