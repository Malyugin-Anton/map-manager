import React from "react";
import { Row, Col } from "antd";

const Header = () => {
  return (
    <div className="header">
      <Row>
        <Col span={24}>
          <h1>Map manager</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
