import React from 'react';
import Input from './Input';
import { connect } from 'react-redux';
import List from './List';
import PlayControls from './PlayControls';

class App extends React.Component {
  componentDidMount() {
  }
  
  render() {
    return (
      <div>
        <Input />
        <List />
        <PlayControls />
      </div>
    );
  }
}

export default connect()(App);
