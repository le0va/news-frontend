import { Link } from 'react-router-dom';

import './NewsCard.css';

function NewsCard(props) {
    return (
        <li className='news-card__item'>
            <Link to={`/news/${props.id}`}>
                <div>
                    <img src={props.image1} alt={props.alt} />
                </div>
                <div className='news-card__info'>
                    <h2>{props.title}</h2>
                    <h3>{props.date}</h3>
                </div>
            </Link>
        </li>
    );
}

export default NewsCard;