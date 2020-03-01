import React from 'react';
import './App.css';

import TimelineData from './api/data';
import Timeline from './components/TImeline';
import ToolBox from './components/Toolbox';

function App() {
    return (
        <div className='App'>
            <h1>React Timeline</h1>
            <Timeline data={TimelineData}></Timeline>
            <ToolBox></ToolBox>
        </div>
    );
}

export default App;
