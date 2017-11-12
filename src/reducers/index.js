import {combineReducers} from 'redux';
import SurveyReducer from './reducer_surveys';
import SurveyVersionReducer from './survey_version_reducer';

const rootReducer = combineReducers(
  {
    surveys : SurveyReducer,
    selectedSurvey : SurveyVersionReducer
  }
);

export default rootReducer;
