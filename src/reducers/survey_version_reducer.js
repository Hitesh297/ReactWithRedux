import { SURVEY_SELECT } from '../actions/index';

export default function (state = null, action) {
  switch (action.type) {
    case SURVEY_SELECT:
          return action.payload;
  }
  return state;
}
