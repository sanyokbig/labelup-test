import React from 'react';
import {connect} from "react-redux";


const ShowMore = ({onNextPage, dispatch}) => (
    <button
        type='button'
        className='btn btn-primary'
        onClick={() => dispatch({a: 1})}
    >
        Показать еще {onNextPage}
    </button>
);

export default connect()(ShowMore);