import { FETCH_SURVEYS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
        return action.payload.data;
  }
  return state;
}
