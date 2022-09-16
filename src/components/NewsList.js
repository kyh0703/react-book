import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

import NewsItem from './NewsItem';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b2ba0557d5584d1ab1659dab45528d64`
    );
  }, [category]);

  // waiting
  if (loading) {
    return <NewsListBlock>대기 중...</NewsListBlock>;
  }

  // dose not exist response
  if (!response) {
    return null;
  }

  // error
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
