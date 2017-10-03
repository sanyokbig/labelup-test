import React from 'react';

import Account from './Account.jsx';

export default ({accounts}) => {
    const list = accounts.map((acc, key) => <Account key={key} {...acc}/>);

    return <ul className='list-group'>
        {list}
    </ul>
}