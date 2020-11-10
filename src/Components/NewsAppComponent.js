import React from 'react';
import {getBitcoinArticles} from "../ApiRequests"

class NewsAppComponent extends React.Component {

  state = {
  articles: [],
  apiError: "",
  };


async componentDidMount() {
  try {
    const response = await getBitcoinArticles();
    this.setState({ articles: response.articles });
  } catch (error) {
    this.setState({ apiError: "Could not find any articles" });
  }
}

 

render() {
    
    return(
    
    <div> Hello World! </div>
        
    )
}

}

export default NewsAppComponent;
