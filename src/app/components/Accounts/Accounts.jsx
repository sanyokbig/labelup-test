import React, {Component} from 'react';
import {connect} from "react-redux";

import List from './List.jsx';
import ShowMore from './ShowMore.jsx';
import Toggle from './Toggle.jsx'

class Accounts extends Component {
    render(){
        const {accounts, pagination, list} = this.props;

        return <div>
            <Toggle currentList={list}/>
            <List accounts={accounts}/>
            {pagination.onNextPage && <ShowMore onNextPage={pagination.onNextPage}/>}
        </div>
    }
}


function mapStateToProps(state) {
    const {accounts, pagination, list} = state.accountsList;

    return {accounts, pagination, list}
}



export default connect(mapStateToProps)(Accounts);