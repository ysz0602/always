import React from 'react';
import { Row, Col } from 'antd';
export default class MobileFooter extends React.Component {
  constructor(){
    super();
    this.state = {
      current:'top'
    }
  }
  render(){
    return (
      <footer>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="footer">
            &copy;&nbsp;2017 ReactNews. All Rights reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    )
  }
}
