import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';
import firebase from '../config/firebase';

// components
import List from './List';

class App extends Component {

  // Не удалять здесь я получаю доступ к данным от БД
  // componentDidMount() {
  //   const data = firebase.database().ref('data');

  //   data.on('value', item => {
  //     console.log(item.val());
  //   })
  // }

  render() {
    const { data } = this.props.data;

    return (
      <div className="App">
        <div className="header">
          <Row>
            <Col span={24}>
              <h1>yandex manager</h1>
            </Col>
          </Row>
        </div>

        <div className="form-add">
          <Row gutter={16}>
            <Col span={20}>
              <Input size="large" placeholder="Введите город"/></Col>
            <Col span={4}>
              <Button type="primary" size="large" block>Добавить</Button>
            </Col>
          </Row>
        </div>

        <div className="main">
          <List data={data} />
        </div>

        
      </div>
    );
  }
}

export default App;
