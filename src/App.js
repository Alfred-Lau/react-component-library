import React from 'react';
import './App.css';

import TimelineData from './api/data';
import Timeline from './components/TImeline';
import ToolBox from './components/Toolbox';

function App() {
  return (
    <div className='App'>
      <section className='item'>
        <h1>React Timeline</h1>
        <Timeline data={TimelineData}></Timeline>
      </section>

      <section className='item'>
        <h1>React ToolBox</h1>
        <ToolBox></ToolBox>
      </section>
    </div>
  );
}

export default App;
