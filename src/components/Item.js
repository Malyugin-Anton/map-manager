import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input } from "antd";

// component
import Place from "./Place";
import AddPlaceForm from "./AddPlaceForm";

class Item extends Component {
  constructor(props) {
    super(props);
    this._cityName = "";
    this.dispatch = props.dispatch;
    this.cityId = props.cityId;
    this.onEditCity = props.onEditCity;
    this.onDeleteCity = props.onDeleteCity;
  }

  state = {
    visibleContent: false,
    visibleEditFormCity: false,
    showAddPlaceForm: false
  };

  onToggleItem = () => {
    this.setState({
      visibleContent: !this.state.visibleContent
    });
  };

  onVisibleEditCityForm = () => {
    this.setState({
      visibleEditFormCity: !this.state.visibleEditFormCity
    });
  };

  onToggleShowPlaceForm = () => {
    this.setState({
      showAddPlaceForm: !this.state.showAddPlaceForm
    });
  };

  render() {
    const { cityName, places } = this.props.data;
    const {
      visibleContent,
      visibleEditFormCity,
      showAddPlaceForm
    } = this.state;

    return (
      <li className="item">
        <div className={`item-heading ${visibleContent ? "active" : ""}`}>
          <h2>
            {visibleEditFormCity ? (
              <Input
                defaultValue={cityName}
                ref={input => (this._cityName = input)}
              />
            ) : (
              cityName
            )}
          </h2>

          <div className="item-actions__btn-group">
            <div className="item-actions__btn">
              <Button
                icon="edit"
                size="large"
                onClick={this.onVisibleEditCityForm}
              />
            </div>
            <div className="item-actions__btn">
              <Button
                type="danger"
                icon="delete"
                size="large"
                onClick={() => this.onDeleteCity(this.cityId)}
              />
            </div>
            <div className="item-actions__btn">
              {visibleEditFormCity ? (
                <Button
                  type="primary"
                  icon="check"
                  size="large"
                  onClick={() => {
                    this.onEditCity(this.cityId, this._cityName.state.value)
                    this.onVisibleEditCityForm()
                  }}
                />
              ) : null}
            </div>
          </div>

          <div onClick={this.onToggleItem}>
            {!visibleContent ? (
              <Button icon="down" size="large" />
            ) : (
              <Button icon="up" size="large" />
            )}
          </div>
        </div>

        <div className={`item-wrap ${visibleContent ? "" : "hide"}`}>
          <div className="item-btn">
            <Button onClick={this.onToggleShowPlaceForm} type="primary" size="large" block>
              {showAddPlaceForm ? "Скрыть форму" : "Показать форму"}
            </Button>
          </div>

          {showAddPlaceForm ? <AddPlaceForm cityId={this.cityId} onToggleShowPlaceForm={this.onToggleShowPlaceForm} /> : ""}

          {places.map((place, idx) => {
            return <Place key={idx} {...place} cityId={this.cityId} />;
          })}
        </div>
      </li>
    );
  }
}

export default connect()(Item);
