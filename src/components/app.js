import React from 'react';
import { Component } from 'react';
import SurveyVersionList from '../containers/survey_version_list';
import SearchBar from '../containers/search_bar';
import SurveyList from '../containers/survey_list';


export default class App extends Component {
  render() {
      return (
        <div>
          <SearchBar />
          <SurveyList />
          <SurveyVersionList />
        </div>
      );
  }
}
