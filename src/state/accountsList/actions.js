export const TOGGLE = 'toggle';
export const LOAD_MORE = 'loadMore';

export const toggle = (data) => ({
    type: TOGGLE,
    data
});

export const loadMore = (data) => ({
    type: LOAD_MORE,
    data
});