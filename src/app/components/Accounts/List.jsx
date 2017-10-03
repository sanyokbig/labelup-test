import React from 'react';
import {Table} from 'react-bootstrap';

import Account from './Account.jsx';

export default ({accounts}) => {
    const list = accounts.map((acc, key) => <Account key={key} {...acc}/>);

    return <Table>
        <thead>
        <tr>
            <th>Пользователь</th>
            <th>Подписчики</th>
            <th>Стоимость поста</th>
        </tr>
        </thead>
        <tbody>
        {list}
        </tbody>
    </Table>
}