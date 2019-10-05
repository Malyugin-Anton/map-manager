import React from "react";
import { Button, Divider, Input } from "antd";
import { connect } from "react-redux";

import { deletePlace, editPlace, visibleEditForm } from "../store/actions";

const Place = ({
  cityId,
  placeId,
  namePlace,
  аddress,
  schedule,
  site,
  contacts,
  coordinate,
  dispatch,
  editPlaceForm
}) => {
  let _namePlace,
    _аddress,
    _schedule,
    _site,
    _phone,
    _email,
    _latitude,
    _longitude;

  const onEditPlace = () => {
    const place = {
      placeId: placeId,
      namePlace: _namePlace.state.value,
      аddress: _аddress.state.value,
      schedule: _schedule.state.value,
      site: _site.state.value,
      contacts: {
        phone: _phone.state.value,
        email: _email.state.value
      },
      coordinate: {
        latitude: _latitude.state.value,
        longitude: _longitude.state.value
      }
    };

    _namePlace.handleReset();
    _аddress.handleReset();
    _schedule.handleReset();
    _site.handleReset();
    _phone.handleReset();
    _email.handleReset();
    _latitude.handleReset();
    _longitude.handleReset();

    dispatch(editPlace(place, cityId, placeId));
    dispatch(visibleEditForm(!editPlaceForm));
  };

  const onDeletePlace = () => {
    dispatch(deletePlace(placeId, cityId));
  };

  const onVisibleEditForm = () => {
    dispatch(visibleEditForm(!editPlaceForm));
  };

  return (
    <div className="item-inner">
      <div className="item-content">
        <div className="item-content-block">
          <Divider orientation="left">Место</Divider>
          {editPlaceForm ? (
            <Input
              defaultValue={namePlace}
              ref={input => (_namePlace = input)}
            />
          ) : (
            namePlace
          )}
        </div>
        <div className="item-content-block">
          <Divider orientation="left">Адрес</Divider>
          <p>
            {editPlaceForm ? (
              <Input defaultValue={аddress} ref={input => (_аddress = input)} />
            ) : (
              аddress
            )}
          </p>
        </div>
        <div className="item-content-block">
          <Divider orientation="left">Контакты</Divider>
          <p>
            {editPlaceForm ? (
              <Input
                defaultValue={contacts.phone}
                ref={input => (_phone = input)}
              />
            ) : (
              `Телефон: ${contacts.phone}`
            )}
          </p>
          <p>
            {editPlaceForm ? (
              <Input
                defaultValue={contacts.email}
                ref={input => (_email = input)}
              />
            ) : (
              `email: ${contacts.email}`
            )}
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">Сайт</Divider>
          <p>
            {editPlaceForm ? (
              <Input defaultValue={site} ref={input => (_site = input)} />
            ) : (
              site
            )}
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">График работы</Divider>
          <p>
            {editPlaceForm ? (
              <Input defaultValue={schedule} ref={input => (_schedule = input)} />
            ) : (
              schedule
            )}
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">Координаты</Divider>
          <p>
            {editPlaceForm ? (
              <Input
                defaultValue={coordinate.latitude}
                ref={input => (_latitude = input)}
              />
            ) : (
              `Широта: ${coordinate.latitude}`
            )}
          </p>
          <p>
            {editPlaceForm ? (
              <Input
                defaultValue={coordinate.longitude}
                ref={input => (_longitude = input)}
              />
            ) : (
              `Долгота: ${coordinate.longitude}`
            )}
          </p>
        </div>
      </div>

      <div className="item-actions">
        <div className="item-actions__btn-group">
          <div className="item-actions__btn">
            <Button
              icon="edit"
              size="large"
              onClick={() => onVisibleEditForm()}
            />
          </div>
          <div className="item-actions__btn">
            <Button
              type="danger"
              icon="delete"
              size="large"
              onClick={() => onDeletePlace()}
            />
          </div>
        </div>

        <div className="item-actions__btn-group">
          <div className="item-actions__btn">
            {editPlaceForm ? (
              <Button
                type="primary"
                icon="check"
                size="large"
                onClick={() => onEditPlace()}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({
  editPlaceForm: state.editPlaceForm
}))(Place);
