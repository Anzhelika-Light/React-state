import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import NewsSearchForm from "./NewsSearchForm";

export default class News extends Component {
  state = {
    articles: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  fetchArticles = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchArticles(options)
      .then((articles) => {
        this.setState((prevState) => ({
          articles: [...prevState.articles, ...articles],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { articles, isLoading, error } = this.state;
    const shouldRenderLoadMoreButton = articles.length > 0 && !isLoading;

    return (
      <div>
        {error && <h1>Ой ошибка, всё пропало!!!</h1>}

        <NewsSearchForm onSubmit={this.onChangeQuery} />

        <ul>
          {articles.map(({ title, url }) => (
            <li key={title}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </li>
          ))}
        </ul>

        {shouldRenderLoadMoreButton && (
          <button type="button" onClick={this.fetchArticles}>
            Загрузить ещё
          </button>
        )}

        {isLoading && (
          <p style={{ fontSize: 24, display: "flex", alignItems: "center" }}>
            Загружаем...
            <span
              aria-label="Иконка"
              role="img"
              style={{ fontSize: 32, marginLeft: 10 }}
            >
              🧙‍♂️
            </span>
          </p>
        )}
      </div>
    );
  }
}
