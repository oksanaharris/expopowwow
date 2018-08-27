import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';

import areas from './reducers/areas';
import artists from './reducers/artists';
import artworks from './reducers/artworks';
import checkins from './reducers/checkins';
import comments from './reducers/comments';
import likes from './reducers/likes';
import sites from './reducers/sites';
import users from './reducers/users';
import search from './reducers/search';
import stars from './reducers/stars';

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  areas: areas,
  artists: artists,
  artworks: artworks,
  checkins: checkins,
  comments: comments,
  likes: likes,
  sites: sites,
  users: users,
  search: search,
  stars: stars
})

const initialState = {
  favoriteAnimal: 'duck'
};

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export {store};