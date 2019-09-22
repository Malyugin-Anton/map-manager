import React, { Component } from 'react';
import { Icon } from 'antd';

// component
import Place from './Place';

class Item extends Component {
  
  state = {
    visible: false
  }

  onToggleItem = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render() {
    const { cityName, places } = this.props.data;
    const visible = this.state.visible;

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

        {
          places.map((place, idx) => {
            return <Place {...this.state} key={idx} place={place}/>
          })
        }
      </li>
    )
  }
}

export default Item;