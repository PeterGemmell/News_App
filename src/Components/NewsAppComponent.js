import React from 'react';
import {getBitcoinArticles} from "../ApiRequests"

const NewsAppComponent = () =>{

    getBitcoinArticles();

    return(

        <h1> NEWS TEST STUFF!!! </h1>
    )
}

export default NewsAppComponent;
