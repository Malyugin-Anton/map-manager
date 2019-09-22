import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import "antd/dist/antd.css";
import './index.css';

import data from './data';

ReactDOM.render(<App data={data}/>, document.getElementById('root'));