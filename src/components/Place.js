import React from 'react';
import { Button, Divider } from 'antd';
import { connect } from 'react-redux';

import { deletePlace } from '../store/actions'

const Place = ({ cityId, idPlace, namePlace, аddress, contacts, coordinate, onDeletePlace = f => f }) => {  
  return (
    <div className="item-inner">
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
            Телефон: { contacts.phone }
          </p>
          <p>
            Email: { contacts.email }
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
            <Button type="danger" icon="delete" size="large" onClick={() => onDeletePlace(idPlace, cityId)}/>
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

export default connect(
  null,
  dispatch => ({
    onDeletePlace(idPlace, cityId) {
      dispatch(deletePlace(idPlace, cityId))
    }
  })
)(Place);