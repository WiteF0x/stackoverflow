import React, { Component } from 'react';
import { Text } from 'react-native';

import { connect } from 'react-redux';

import {
  getQuestionsArray,
} from '../../store/actions';

import Home from './home';

class HomeScreen extends Component {
  
  componentDidMount() {
    this.props.onGetQuestionsArray();
  }

  render() {
    return (
      <Home 
        onGetQuestions={this.props.onGetQuestionsArray}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onGetQuestionsArray: () => dispatch(getQuestionsArray()),
});

export default connect(null, mapDispatchToProps)(HomeScreen);