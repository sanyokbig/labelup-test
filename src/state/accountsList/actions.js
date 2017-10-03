export const TOGGLE = 'toggle';
export const LOAD_MORE = 'loadMore';

export const toggle = (data) => ({
    type: TOGGLE,
    data
});

export const loadMore = () => dispatch => dispatch({
    type: LOAD_MORE
});