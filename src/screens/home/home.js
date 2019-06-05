import React, { Component } from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import { connect } from 'react-redux';

import QuestionList from '../../components/qList';


class Home extends Component{

  // componentDidMount() {
  //   setTimeout(()=>console.log(this.props.questions), 2000)
  // }

  render() {
    return(
      <QuestionList
        questions={this.props.questions}
      />
    )
  }
}

const mapStateToProps = function(state) {
  return {
    questions: state.questionsArray.questions
  }
}

export default connect(mapStateToProps)(Home);