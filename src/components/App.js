import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Empty } from 'antd'

// components
import List from './List'
import Header from './Header'
import FormAdd from './FormAdd'


class App extends Component {

  render() {
    const { data } = this.props;
    console.log('APP - ', this.props)

    return (
      <div className="App">
        <Header />
        <FormAdd />

        <div className="main">
          { data.length === 0 ? <Empty /> : <List data={data} /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state }
}

export default connect(mapStateToProps, null)(App)
