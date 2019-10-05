import React from "react";
import { connect } from "react-redux";

// component
import Item from "./Item";
import { Empty } from "antd";

import { editCity, deleteCity } from "../store/actions";

const List = ({ cities, dispatch }) => {
  const onEditCity = (cityId, cityName, cityLatitude, cityLongitude) => {
    dispatch(editCity(cityId, cityName, cityLatitude, cityLongitude));
  };

  const onDeleteCity = cityId => {
    dispatch(deleteCity(cityId));
  };

  return (
    <div className="main">
      <ul className="list">
        {!cities.length ? (
          <Empty />
        ) : (
          cities.map((el, idx) => {
            return (
              <Item
                key={idx}
                onEditCity={onEditCity}
                onDeleteCity={onDeleteCity}
                cityId={el.cityId}
                data={el.data}
              />
            );
          })
        )}
      </ul>
    </div>
  );
};

export default connect(state => ({
  cities: state.cities
}))(List);
