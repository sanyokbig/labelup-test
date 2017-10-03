import React from 'react';

export default (props) => (
    <li className='list-group-item'>
        <span>{props.name} {props.followers} {props.postPrice}</span>
    </li>
);