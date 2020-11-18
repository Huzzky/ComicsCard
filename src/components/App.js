import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../action/cards';

import './css/App.css';
import Pages from './Pages';

class App extends Component {

  render () {
    const { getData } = this.props
    return (
      <div className="App">
        <Pages charactersCard={this.props.charactersCard} getCard={getData}/>
      </div>
    );
  }
  
}


const mapStateToProps = store => {
  return {
    charactersCard: store.api
  }
}

const mapDispatchToProps = dispatch => ({
  getData: (choice, count) => dispatch(getData(choice, count))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
