import React from 'react';
import {connect} from "react-redux";

import {loadMore} from "../../../state/accountsList/actions";

import staticData from '../../../staticData';

const prepareNextPage = (list, nextPage) => {
    const users = staticData[list];
    let onNextPage = Math.min(users.length - (nextPage + 1) * 3, 3),
        _nextPage;

    onNextPage > 0
        ? _nextPage = nextPage + 1
        : (onNextPage = null, _nextPage = null);

    return {
        accounts: users.slice(nextPage * 3, nextPage * 3 + 3),
        pagination: {
            nextPage: _nextPage,
            onNextPage,
            totalCount: users.length
        }
    }
};

const ShowMore = ({onNextPage, dispatch, nextPage, list}) => (
    <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch(loadMore(prepareNextPage(list, nextPage)))}
    >
        Показать еще {onNextPage}
    </button>
);

export default connect()(ShowMore);