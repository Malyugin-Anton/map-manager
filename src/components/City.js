import React, {Component} from "react";
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
    this.places = props.data.places;
    this.cityName = props.data.cityName;
  }

  state = {
    visibleContent: false,
    visibleEditFormCity: false,
    showAddPlaceForm: false
  };

  onToggleVisibleContent = () => {
    this.setState({
      visibleContent: !this.state.visibleContent
    });
  };

  onVisibleEditCityForm = () => {
    this.setState({
      visibleEditFormCity: !this.state.visibleEditFormCity
    });
  };

  onAddPlace = () => {
    this.setState({
      showAddPlaceForm: !this.state.showAddPlaceForm
    });
  };

  render() {
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
                defaultValue={this.cityName}
                ref={input => (this._cityName = input)}
              />
            ) : (
              this.cityName
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
                onClick={() => this.dispatch(this.onDeleteCity(this.cityId))}
              />
            </div>
            <div className="item-actions__btn">
              {visibleEditFormCity ? (
                <Button
                  type="primary"
                  icon="check"
                  size="large"
                  onClick={() => this.dispatch(this.onEditCity(this.cityId, this._cityName.state.value))}
                />
              ) : null}
            </div>
          </div>

          <div onClick={this.onToggleVisibleContent}>
            {!visibleContent ? (
              <Button icon="down" size="large" />
            ) : (
              <Button icon="up" size="large" />
            )}
          </div>
        </div>

        <div className={`item-wrap ${visibleContent ? "" : "hide"}`}>
          <div className="item-btn">
            <Button onClick={this.onAddPlace} type="primary" size="large" block>
              {showAddPlaceForm ? "Скрыть форму" : "Показать форму"}
            </Button>
          </div>

          {showAddPlaceForm ? <AddPlaceForm cityId={this.cityId} /> : ""}

          {this.places.map((place, idx) => {
            return <Place key={idx} {...place} cityId={this.cityId} />;
          })}
        </div>
      </li>
    );
  }
}

// export default connect()(Item);
export default Item;
