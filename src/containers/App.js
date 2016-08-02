import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'

// import **** from '../components/****'

class App extends Component {
  render() {
    const { item, actions } = this.props;
    return (
      <div>
	 	
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    item: state.item,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
