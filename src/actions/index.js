export const GET_VOTES = 'GET_VOTES';
export const REDUCE_VOTES = 'REDUCE_VOTES';
export const MORE_VOTED = 'MORE_VOTED';
export const LESS_VOTED = 'LESS_VOTED';

export function increaseVotesById(post){
    const action = {
        type: GET_VOTES,
        post
    }
    return action;
}

export function decreaseVotesById(post){
    const action = {
        type: REDUCE_VOTES,
        post
    }
    return action;
}

export function orderByMoreVotes(){
    const action = {
        type: MORE_VOTED,
    }
    return action;
}

export function orderByLessVotes(){
    const action = {
        type: LESS_VOTED,
    }
    return action;
}