import React from 'react';

export default (props) => (
    <tr>
        <td>{props.name}</td>
        <td>{props.followers}</td>
        <td>{props.postPrice}</td>
    </tr>
);