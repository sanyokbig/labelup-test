import React from 'react';
import {ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

import store from '../../store';
import {toggle} from "../../../state/accountsList/actions";

import staticData from '../../../staticData';

const onChange = (list) => {
    const users = staticData[list];
    const pageSize = 3;

    store.dispatch(toggle({
        accounts: users.slice(0, pageSize),
        onNextPage: Math.min(users.length - 3, pageSize),
        totalCount: users.length,
        list
    }))
};

export default ({currentList}) => (
    <ToggleButtonGroup
        bsSize='sm'
        name='type'
        value={currentList}
        onChange={onChange}
    >
        <ToggleButton bsStyle='info' value='instagram'>
            Instagram
        </ToggleButton>
        <ToggleButton bsStyle='info' value='youtube'>
            Youtube
        </ToggleButton>
    </ToggleButtonGroup>
)