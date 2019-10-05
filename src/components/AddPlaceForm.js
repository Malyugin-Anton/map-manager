import React from "react";
import { connect } from "react-redux";
import { Button, Divider, Input } from "antd";

import { v4 } from "uuid";

import { addPlace } from "../store/actions";

const AddPlaceForm = ({ dispatch, cityId, onToggleShowPlaceForm }) => {
  let _namePlace,
    _аddress,
    _schedule,
    _site,
    _phone,
    _email,
    _latitude,
    _longitude;

  const onAddPlace = () => {
    const place = {
      placeId: v4(),
      namePlace: _namePlace.state.value || "",
      аddress: _аddress.state.value || "",
      schedule: _schedule.state.value || "",
      site: _site.state.value || "",
      contacts: {
        phone: _phone.state.value || "",
        email: _email.state.value || ""
      },
      coordinate: {
        latitude: _latitude.state.value || "",
        longitude: _longitude.state.value || ""
      }
    };

    _namePlace.handleReset();
    _аddress.handleReset();
    _phone.handleReset();
    _email.handleReset();
    _latitude.handleReset();
    _longitude.handleReset();

    dispatch(addPlace(place, cityId));
    onToggleShowPlaceForm();
  };

  return (
    <div className="item-inner">
      <div className="item-content">
        <div className="item-content-block">
          <Divider orientation="left">Место</Divider>
          <p className="item-group">
            <span className="item-group-label">Место:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_namePlace = input)}
                placeholder="Введите место"
              />
            </span>
          </p>
        </div>
        <div className="item-content-block">
          <Divider orientation="left">Адрес</Divider>
          <p className="item-group">
            <span className="item-group-label">Адрес:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_аddress = input)}
                placeholder="Введите Адрес"
              />
            </span>
          </p>
        </div>
        <div className="item-content-block">
          <Divider orientation="left">Контакты</Divider>
          <p className="item-group">
            <span className="item-group-label">Телефон:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_phone = input)}
                placeholder="Введите телефон"
              />
            </span>
          </p>
          <p className="item-group">
            <span className="item-group-label">Email:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_email = input)}
                placeholder="Введите email"
              />
            </span>
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">Сайт</Divider>
          <p className="item-group">
            <span className="item-group-label">Адрес сайта:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_site = input)}
                placeholder="Введите адрес сайта"
              />
            </span>
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">График работы</Divider>
          <p className="item-group">
            <span className="item-group-label">График работы:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_schedule = input)}
                placeholder="Введите график работы"
              />
            </span>
          </p>
        </div>

        <div className="item-content-block">
          <Divider orientation="left">Координаты</Divider>
          <p className="item-group">
            <span className="item-group-label">Широта:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_latitude = input)}
                placeholder="Введите широту"
              />
            </span>
          </p>
          <p className="item-group">
            <span className="item-group-label">Долгота:</span>
            <span className="item-group-input">
              <Input
                ref={input => (_longitude = input)}
                placeholder="Введите долготу"
              />
            </span>
          </p>
        </div>
      </div>

      <div className="item-actions">
        <Button type="primary" size="large" onClick={onAddPlace}>
          Добавить
        </Button>
      </div>
    </div>
  );
};

export default connect()(AddPlaceForm);
