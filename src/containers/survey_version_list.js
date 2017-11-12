import React, { Component } from 'react';
import SurveyListItem from './survey_list_item';
import { connect } from 'react-redux';

class SurveyVersionList extends Component {

renderSurveyItem(surveyVersion){
  return(
    <li key={surveyVersion.Id} className='list-group-item list-group-item-success'>
    {surveyVersion.Id}
    </li>
  );
}

  render() {
    if (this.props.selectedSurvey != null) {
      return (
        <div>
        <ul className = "col-md-4 list-group">
        {this.props.selectedSurvey.SurveyVersions.map(this.renderSurveyItem)}
  		</ul>
      </div>
      );
    } else {
      return (
        <div> </div>
      );
    }

  }
}

function mapStateToProps({selectedSurvey}) {
  return {selectedSurvey};
}

export default connect(mapStateToProps)(SurveyVersionList);
