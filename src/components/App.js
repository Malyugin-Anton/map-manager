import React from "react";
import { connect } from "react-redux";

import { Empty } from "antd";

// components
import List from "./List";
import Header from "./Header";
import AddCityForm from "./AddCityForm";

const App = ({ data }) => {
  return (
    <div className="App">
      <Header />
      <AddCityForm />

      <div className="main">
        {data.length === 0 ? <Empty /> : <List data={data} />}
      </div>
    </div>
  );
};

export default connect(
  state => {
    return { ...state };
  },
  null
)(App);
