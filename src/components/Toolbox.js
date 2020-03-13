import React from 'react';
import './toolbox.scss';

export default class ToolBox extends React.Component {
  render() {
    return (
      <div className='toolbox-container'>
        <div className='toolbox'>
          <a className='toolbox-item toolbox-item-wechat' href='/#'>
            <span className='toolbox-layer'></span>
          </a>
          <a className='toolbox-item toolbox-item-feedback' href='/#'>
            <span></span>
          </a>
          <a className='toolbox-item toolbox-item-app' href='/#'>
            <span className='toolbox-layer'></span>
          </a>
          <a className='toolbox-item toolbox-item-top' href='/#'>
            <span></span>
          </a>
        </div>
      </div>
    );
  }
}
