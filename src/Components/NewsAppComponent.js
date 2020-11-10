import React from 'react';
import {getBitcoinArticles} from "../ApiRequests"
import {Container, Header} from 'semantic-ui-react'
import ArticleList from './ArticleList'


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
    const { articles, apiError } = this.state;
    return (
      <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20 }}>
          Bitcoin articles
        </Header>
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default NewsAppComponent;
