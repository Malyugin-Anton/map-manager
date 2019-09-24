import React, { Component } from 'react';

// component
import Item from './Item';

class List extends Component {
  render() {
    const { data } = this.props;

    return (
      <ul className="list">
        {
          data.map((el, idx) => {
            return <Item key={idx} data={el.data} cityId={el.cityId}/>
          })
        }
      </ul>
    )
  }
}

export default List;