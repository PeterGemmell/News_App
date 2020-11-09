import React from 'react';
import {getBitcoinArticles} from "../ApiRequests"

const NewsAppComponent = () =>{

    getBitcoinArticles();

    return
        
        <h1> Lets code in here </h1>
    
}

export default NewsAppComponent;