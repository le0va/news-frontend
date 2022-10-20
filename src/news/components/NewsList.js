import React from 'react';
import NewsCard from './NewsCard';
import './NewsList.css';

function NewsList(props) {
    if (props.items.length === 0) {
        return (
            <h2>Новин нема</h2>
        );
    }
    else {
        return (
            <ul className='news-list'>
                {props.items.map(newsItem => <NewsCard
                    key={newsItem.id}
                    id={newsItem.id}
                    title={newsItem.title}
                    date={newsItem.date}
                    image1={newsItem.image1}
                    alt={newsItem.alt}
                />)}
            </ul>
        );
    }
}

export default NewsList;