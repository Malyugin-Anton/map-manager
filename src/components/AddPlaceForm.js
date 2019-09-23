import React from 'react';
import { Button, Divider, Input } from 'antd';

const AddPlaceForm = () => {
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
              <Input placeholder="Place" />
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
              <Input placeholder="Адрес" />
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
              <Input placeholder="Телефон" />
            </span>
          </p>
          <p className="item-group">
            <span className="item-group-label">
              Email:
            </span>
            <span className="item-group-input">
              <Input placeholder="Email" />
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
              <Input placeholder="Широта" />
            </span>
          </p>
          <p className="item-group">
            {/* Долгота: { coordinate.longitude } */}
            <span className="item-group-label">
              Долгота:
            </span>
            <span className="item-group-input">
              <Input placeholder="Долгота" />
            </span>
          </p>
        </div>
      </div>

      <div className="item-actions">
        <Button type="primary" size="large">
          Добавить
        </Button>
      </div>
    </div>
  )
}

export default AddPlaceForm;