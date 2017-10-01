import React from 'react';

export default (props) => (
    <div className='container'>
        <div className='col-md-6'>{props.name}</div>
        <div className='col-md-3'>{props.followers}</div>
        <div className='col-md-3'>{props.postPrice}</div>
    </div>
);