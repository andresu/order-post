import initialState from './initialState';
import { GET_VOTES } from '../actions';
import { REDUCE_VOTES } from '../actions';
import { MORE_VOTED } from '../actions';
import { LESS_VOTED } from '../actions';

function postsReducer(state = initialState.posts, action) {
    switch(action.type) {         
        case GET_VOTES:
            const newStateIncrease = [...state];
            newStateIncrease.find(post => post.id === action.post.id).votes = newStateIncrease.find(post => post.id === action.post.id).votes + 1; 
            return newStateIncrease;
        case REDUCE_VOTES:
            const newStateDecrease = [...state];
            newStateDecrease.find(post => post.id === action.post.id).votes = newStateDecrease.find(post => post.id === action.post.id).votes - 1; 
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


