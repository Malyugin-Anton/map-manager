import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Divider, Input } from 'antd';
import { v4 } from 'uuid'

import { addPlace } from '../store/actions'

class AddPlaceForm extends Component {
  constructor(props) {
    super(props);

    this.cityId = props.cityId;
    this.dispatch = props.dispatch;

    this.namePlace = React.createRef();
    this.аddress = React.createRef();
    this.phone = React.createRef();
    this.email = React.createRef();
    this.latitude = React.createRef();
    this.longitude = React.createRef();
  }

  onAddPlace = () => {
    const namePlace = this.namePlace.current
    const аddress = this.аddress.current
    const phone = this.phone.current
    const email = this.email.current
    const latitude = this.latitude.current
    const longitude = this.longitude.current

    const placeData = {
      id: v4(),
      namePlace: namePlace.state.value,
      аddress: аddress.state.value,
      contacts: {
        phone: phone.state.value,
        email: email.state.value
      },
      coordinate: {
        latitude: latitude.state.value,
        longitude: longitude.state.value
      }
    }

    // Очищаем поля Формы
    namePlace.handleReset();
    аddress.handleReset();
    phone.handleReset();
    email.handleReset();
    latitude.handleReset();
    longitude.handleReset();

    this.dispatch(addPlace(placeData, this.cityId))
  }

  render() {
    return (
      <div className="item-inner">
        <div className="item-content">
          <div className="item-content-block">
            <Divider orientation="left">Место</Divider>
            <p className="item-group">
              <span className="item-group-label">
                Место:
              </span>
              <span className="item-group-input">
                <Input ref={this.namePlace} placeholder="Place" />
              </span>
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Адрес</Divider>
            <p className="item-group">
              <span className="item-group-label">
                Адрес:
              </span>
              <span className="item-group-input">
                <Input ref={this.аddress} placeholder="Адрес" />
              </span>
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Контакты</Divider>
            <p className="item-group">
              <span className="item-group-label">
                Телефон: 
              </span>
              <span className="item-group-input">
                <Input ref={this.phone} placeholder="Phone" />
              </span>
            </p>
            <p className="item-group">
              <span className="item-group-label">
                Email:
              </span>
              <span className="item-group-input">
                <Input ref={this.email} placeholder="Email" />
              </span>
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Координаты</Divider>
            <p className="item-group">
              {/* Широта: { coordinate.latitude } */}
              <span className="item-group-label">
                Широта: 
              </span>
              <span className="item-group-input">
                <Input ref={this.latitude} placeholder="Широта" />
              </span>
            </p>
            <p className="item-group">
              <span className="item-group-label">
                Долгота:
              </span>
              <span className="item-group-input">
                <Input ref={this.longitude} placeholder="Долгота" />
              </span>
            </p>
          </div>
        </div>

        <div className="item-actions">
          <Button type="primary" size="large" onClick={this.onAddPlace}>
            Добавить
          </Button>
        </div>
      </div>
    )
  }
}

export default connect()(AddPlaceForm)