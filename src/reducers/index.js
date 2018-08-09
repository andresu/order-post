import initialState from './initialState';
import { GET_VOTES } from '../actions';
import { REDUCE_VOTES } from '../actions';
import { MORE_VOTED } from '../actions';
import { LESS_VOTED } from '../actions';

function postsReducer(state = initialState.posts, action) {
    switch(action.type) {         
        case GET_VOTES:
           const newStateIncrease = [...state];
           newStateIncrease[action.id].votes = newStateIncrease[action.id].votes + 1;
           return newStateIncrease;
        case REDUCE_VOTES:
           const newStateDecrease = [...state];
           newStateDecrease[action.id].votes = newStateDecrease[action.id].votes - 1;
           return newStateDecrease;
        case MORE_VOTED:
           return {
              posts:[state.posts.sort(function(a,b){ b.votes - a.votes})]
           };
        case LESS_VOTED:
           return {
              posts:[state.posts.sort(function(a,b){ b.votes - a.votes})]
           };      
        default:
          return state;
    }
}

export default postsReducer;


