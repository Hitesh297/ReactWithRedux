import React,{Component} from 'react';
import {selectSurvey} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SurveyListItem extends Component {
	constructor(props){
		super(props);
		this.onSurveySelect = this.onSurveySelect.bind(this);
	}

	onSurveySelect(event) {
		this.props.selectSurvey(this.props.survey);

	}

	render(){
	return (
		<li onClick= {this.onSurveySelect} className='list-group-item list-group-item-success'>
		{this.props.survey.Description}
		</li>
			);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectSurvey},dispatch);
}

export default connect(null, mapDispatchToProps)(SurveyListItem);
