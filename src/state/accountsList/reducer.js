import staticData from '../../staticData';
import {TOGGLE} from './actions';

const initialState = {
    accounts: staticData.instagram.slice(0, 3),
    pagination: {
        nextPage: 1,
        onNextPage: 2,
        totalCount: 5
    },
    list: 'instagram'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE:
            return Object.assign({}, state, {
                accounts: action.data.accounts,
                pagination: {
                    nextPage: 1,
                    onNextPage: action.data.onNextPage || null,
                    totalCount: action.data.totalCount
                },
                list: action.data.list
            });
        default:
            return state;
    }
}