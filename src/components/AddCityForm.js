import React from 'react'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

import { Row, Col, Input, Button } from 'antd'

import { addData } from '../store/actions'



const AddCityForm = ({ dispatch }) => {
  let _cityName = ''

  const onClick = (e) => {
    e.preventDefault()

    
    dispatch(addData({
      cityName: _cityName,
      places: []
    }, v4()))
  }

  const onChange = ({ target: { value } }) => {
    _cityName = value;
  }

  return (
    <div className="form-add">
      <Row gutter={16}>
        <Col span={20}>
          <Input onChange={onChange} size="large" placeholder="Введите город" allowClear/></Col>
        <Col span={4}>
          <Button onClick={onClick} type="primary" size="large" block>Добавить</Button>
        </Col>
      </Row>
    </div>
  )
}

export default connect()(AddCityForm)