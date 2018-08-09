export const GET_VOTES = 'GET_VOTES';
export const REDUCE_VOTES = 'REDUCE_VOTES';
export const MORE_VOTED = 'MORE_VOTED';
export const LESS_VOTED = 'LESS_VOTED';

export function increaseVotesById(id){
    const action = {
        type: GET_VOTES,
        id
    }
    return action;
}

export function decreaseVotesById(id){
    const action = {
        type: REDUCE_VOTES,
        id
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