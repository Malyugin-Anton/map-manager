import React, { Component } from 'react';
import { Icon, Button } from 'antd';

// component
import Place from './Place';
import AddPlaceForm from './AddPlaceForm'

class Item extends Component {
  
  state = {
    visible: false,
    showAddPlaceForm: false
  }

  onToggleItem = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  onAddPlace = () => {
    this.setState({
      showAddPlaceForm: !this.state.showAddPlaceForm
    })
  }

  render() {
    const cityId = this.props.cityId;
    const { cityName, places } = this.props.data;
    const { visible, showAddPlaceForm } = this.state;

    return (
      <li className="item">
        <div className={`item-heading ${visible ? 'active' : ''}`} onClick={this.onToggleItem}>
          <h2>
            { cityName }
          </h2>
          <div className={`item-icon-arrow ${visible ? 'up' : ''}`}>
            <Icon type="down"/>
          </div>
        </div>

        {/* Надо немного продумать верстку */}
        <div className={`item-wrap ${visible ? '' : 'hide'}`}>

          <div className='item-btn'>
            <Button onClick={this.onAddPlace} type="primary" size="large" block>
              {showAddPlaceForm ? 'Скрыть форму' : 'Показать форму'}
            </Button>
          </div>

          {
            showAddPlaceForm ? <AddPlaceForm cityId={cityId}/> : ''
          }

          {
            places.map((place, idx) => {
              return <Place key={idx} place={place}/>
            })
          }
        </div>
      </li>
    )
  }
}

export default Item;