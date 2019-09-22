import React, { Component } from 'react';

// component
import Item from './Item';

class List extends Component {
  render() {
    const { data } = this.props;
    console.log('LIST data - ', data);
    

    return (
      <ul className="list">
        {data.map((el, idx) => {
          return <Item key={idx} data={el}/>
        })}
      </ul>
    )
  }
}

export default List;