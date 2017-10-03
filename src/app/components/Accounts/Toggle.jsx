import React from 'react';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

import {toggle} from "../../../state/accountsList/actions";

import staticData from '../../../staticData';
import {connect} from "react-redux";

const prepareToggle = (list) => {
    const users = staticData[list];

    let onNextPage = Math.min(users.length - 3, 3);

    return {
        accounts: users.slice(0, 3),
        pagination: {
            nextPage: onNextPage > 0 ? 1 : null,
            onNextPage: onNextPage > 0 ? onNextPage : null,
            totalCount: users.length
        },
        list
    };
};

const ShowMore = ({currentList, dispatch}) => (
    <ToggleButtonGroup
        bsSize='sm'
        name='type'
        value={currentList}
        onChange={currentList => dispatch(toggle(prepareToggle(currentList)))}
    >
        <ToggleButton bsStyle='info' value='instagram'>
            Instagram
        </ToggleButton>
        <ToggleButton bsStyle='info' value='youtube'>
            Youtube
        </ToggleButton>
    </ToggleButtonGroup>
);

export default connect()(ShowMore);