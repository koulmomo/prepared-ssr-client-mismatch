// @flow

import {createPlugin} from 'fusion-core';
import App from 'fusion-react';
import UniversalEvents, {
  UniversalEventsToken,
} from 'fusion-plugin-universal-events';

import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import Redux, {ReduxToken, ReducerToken} from 'fusion-plugin-react-redux';
import RPC, {RPCToken, RPCHandlersToken} from 'fusion-plugin-rpc';
import {FetchToken} from 'fusion-tokens';
import fetch from 'unfetch';

import root from './root.js';
import {ActionIds} from './redux/action-ids';
import {reducer} from './redux/reducer';

const handlers = createPlugin<*, *>({
  deps: {},
  provides: deps => {
    const handlers = {
      [ActionIds.rpc__fetchHome]: async (args, ctx) => {
        await new Promise(resolve => {
          setTimeout(resolve, 600);
        });

        if (args.env === 'node') {
          throw new Error('force error dispatch');
        }
      },
    };

    return handlers;
  },
});

export default () => {
  const app = new App(root);
  app.register(Styletron);
  app.register(Router);

  app.register(RPCToken, RPC);
  app.register(UniversalEventsToken, UniversalEvents);

  __NODE__
    ? app.register(RPCHandlersToken, handlers)
    : app.register(FetchToken, fetch);

  app.register(ReduxToken, Redux);
  app.register(ReducerToken, reducer);

  return app;
};
