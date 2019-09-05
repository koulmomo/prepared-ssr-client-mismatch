// @flow

import * as React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {prepared} from 'fusion-react';
import {withRPCRedux} from 'fusion-plugin-rpc-redux-react';

import {ActionIds} from '../redux/action-ids';
import {Status} from '../redux/reducer';

const Home = ({home}) => <div>Status is: {home.status}</div>;

export default compose(
  withRPCRedux(ActionIds.rpc__fetchHome, {propName: 'fetchHome'}),
  connect(function mapStateToProps(state) {
    return {
      home: state.home,
    };
  }),
  prepared(function prepare({fetchHome, ...props} = {}) {
    if (
      props.home.status === Status.INIT ||
      props.home.status === Status.FAIL
    ) {
      return fetchHome({env: __NODE__ ? 'node' : 'browser'});
    }

    return Promise.resolve();
  })
)(Home);
