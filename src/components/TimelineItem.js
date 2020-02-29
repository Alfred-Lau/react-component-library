import React from 'react';

export default ({ data }) => (
    <>
        <div className='timeline-item'>
            <div className='timeline-item-content'>
                <span
                    className='tag'
                    style={{ background: data.category.color }}
                >
                    {data.category.tag}
                </span>
                <time>{data.date}</time>

                <div>{data.text}</div>
                {data.link && (
                    <a
                        href={data.link.url}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {data.link.text}
                    </a>
                )}
                <div className='circle'></div>
            </div>
        </div>
    </>
);
