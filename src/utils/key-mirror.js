// @flow

type ExtractReturnKeyType = <K>(k: K) => K;

/**
 * @see: https://github.com/facebook/fbjs/blob/d308fa83c99c93e8e588de3396cf55b31e56b14e/packages/fbjs/src/key-mirror/keyMirror.js
 */
export function keyMirror<O: {}>(o: O): $ObjMapi<O, ExtractReturnKeyType> {
  return Object.keys(o).reduce((acc, k) => {
    acc[k] = k;
    return acc;
  }, {});
}

export default keyMirror;
