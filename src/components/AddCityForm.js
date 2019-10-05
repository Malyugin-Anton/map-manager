import React from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

import { Row, Col, Input, Button } from "antd";

import { addCity } from "../store/actions";

const AddCityForm = ({ dispatch }) => {
  let _cityName = "";

  const onClick = e => {
    e.preventDefault();

    if(!_cityName.state.value) {
      alert('Введите название города')
      return;
    }

    dispatch(
      addCity({
        cityId: v4(),
        data: {
          cityName: _cityName.state.value,
          cityCoordinate: {
            latitude: null,
            longitude: null
          },
          zoom: 10,
          places: []
        }
      })
    );

    _cityName.handleReset();
  };

  return (
    <div className="form-add">
      <Row gutter={16}>
        <Col span={20}>
          <Input
            ref={input => (_cityName = input)}
            size="large"
            placeholder="Введите город"
            allowClear
          />
        </Col>
        <Col span={4}>
          <Button onClick={onClick} type="primary" size="large" block>
            Добавить
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default connect()(AddCityForm);
