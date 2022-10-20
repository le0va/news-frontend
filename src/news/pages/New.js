import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './New.css';

function New() {
    const newId = useParams().newId;

    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                // const response = await fetch(`http://localhost:5000/api/news/${newId}`);
                const response = await fetch(`http://store-backend-project.herokuapp.com/api/news/${newId}`);
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error('Bad response');
                }
                setNewItem(responseData.new);
            }
            catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        sendRequest();
    }, []);

    if (!isLoading && !newItem) {
        return (
            <h2>Обрана новина не знайдена</h2>
        );
    }
    if (!isLoading && newItem) {
        return (
            <div className='new__container'>
                <div className='new__flexbox'>
                    <h2 className='new__title'>{newItem.title}</h2>
                    <h3 className='new__date'>{newItem.date}</h3>
                    <img className='new__image' src={newItem.image2} alt={newItem.alt} />
                    <div className='new__description'>
                        {newItem.articles.map((article, index) => {
                            let className = 'new__article';
                            let formattedArticle = article;
                            if (article.search(/\[style: subtitle\]/) !== -1) {
                                formattedArticle = formattedArticle.slice(0, article.search(/\[style: subtitle\]/));
                                className += ' new__subtitle';
                            }
                            if (article.search(/\[font-style: bold\]/) !== -1) {
                                formattedArticle = article.slice(0, article.search(/\[font-style: bold\]/));
                                className += ' new__article-bold';
                            }
                            return <p key={index} className={className}>{formattedArticle}</p>;
                        })}
                    </div>
                    <div className='new__footer-info'>
                        <p className='new__author'>{newItem.author}</p>
                        <h3 className='new__date'>{newItem.date}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;