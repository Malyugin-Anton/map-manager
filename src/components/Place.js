import React, { Component } from 'react';
import { Button, Divider } from 'antd';

class Place extends Component {
  render() {
    const { namePlace, аddress, coordinate, contacts } = this.props.place;
    const visible = this.props.visible;

    return (
      <div className={`item-wrap ${visible ? '' : 'hide'}`}>
        <div className="item-content">
          <div className="item-content-block">
            <Divider orientation="left">Место</Divider>
            <p>
              { namePlace }
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Адрес</Divider>
            <p>
              { аddress }
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Контакты</Divider>
            <p>
              Телефон: { contacts.phone.map((phone) => `${phone} `) }
            </p>
            <p>
              Email: { contacts.email.map((email) => `${email} `) }
            </p>
          </div>
          <div className="item-content-block">
            <Divider orientation="left">Координаты</Divider>
            <p>
              Широта: { coordinate.latitude }
            </p>
            <p>
              Долгота: { coordinate.longitude }
            </p>
          </div>
        </div>

        <div className="item-actions">
          <div className="item-actions__btn-group">
            <div className="item-actions__btn">
              <Button icon="edit" size="large" />
            </div>
            <div className="item-actions__btn">
              <Button type="danger" icon="delete" size="large" />
            </div>
          </div>

          <div className="item-actions__btn-group">
            <div className="item-actions__btn">
              <Button type="primary" icon="check" size="large" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Place;