import React from 'react';

// component
import Item from './Item';

const List = ({ data }) => {
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

export default List;