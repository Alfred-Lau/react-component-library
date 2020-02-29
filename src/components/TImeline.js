import React from 'react';

import TimelineItem from './TimelineItem';

export default ({ data }) =>
    data.length && (
        <div className='timeline'>
            {data.map((item, idx) => {
                return <TimelineItem key={idx} data={item}></TimelineItem>;
            })}
        </div>
    );
