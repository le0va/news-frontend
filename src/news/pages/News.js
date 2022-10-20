import React, { useEffect, useState } from "react";

import NewsList from "../components/NewsList";

function News(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedNews, setLoadedNews] = useState();

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                // const response = await fetch('http://localhost:5000/api/news/');
                const response = await fetch('http://store-backend-project.herokuapp.com/api/news');
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error('Bad response');
                }
                setLoadedNews(responseData.news);
            }
            catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };
        sendRequest();
    }, [props.needUpdate]);


    return (
        <React.Fragment>
            {isLoading && <h2>Loading...</h2>}
            {error && <h2>{error}</h2>}
            {!isLoading && loadedNews && <NewsList items={loadedNews} />}

        </React.Fragment>
    );
}

export default News;