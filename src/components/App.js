import React from "react";

// components
import List from "./List";
import Header from "./Header";
import AddCityForm from "./AddCityForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <AddCityForm />
      <List />
    </div>
  );
};

export default App;
