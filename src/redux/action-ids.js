// @flow

import {keyMirror} from '../utils/key-mirror';

const keys = {
  rpc__fetchHome: null,
};

export const ActionIds = keyMirror<typeof keys>(keys);

export default ActionIds;
