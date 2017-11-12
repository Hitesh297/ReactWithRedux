import axios from 'axios';

const ROOT_URL = 'http://localhost/SurveyAPI/api/v1/Survey/Search?CreatedBy=';

export const FETCH_SURVEYS = 'FETCH_SURVEYS';
export const SURVEY_SELECT = 'SURVEY_SELECT';
export function fetchSurveys(userName) {
  const url = `${ROOT_URL}${userName}`;
  const request = axios.get(url);
  return{
    type : FETCH_SURVEYS,
    payload : request
  };

}

export function selectSurvey(survey) {
  return {
    type : SURVEY_SELECT,
    payload : survey
  };
}
