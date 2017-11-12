import React, { Component } from 'react';
import SurveyListItem from './survey_list_item';
import { connect } from 'react-redux';

class SurveyList extends Component {

renderSurveyItem(surveyDetails){
  return(
    <SurveyListItem key={surveyDetails.Id} survey={surveyDetails}/>
  );
}

  render() {
    return (
      <div>
      <ul className = "col-md-4 list-group">
      {this.props.surveys.map(this.renderSurveyItem)}
		</ul>
    </div>
    );
  }
}

function mapStateToProps({surveys}) {
  return {surveys};
}

export default connect(mapStateToProps)(SurveyList);
