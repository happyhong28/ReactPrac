import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  //컴포넌트는 항상 render가 필수!
  render() {
    console.log(this.props);
    return (
      <div>
        <MoviePoster /> 
        {/* 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식 */}

        <h1>hello this is a movie</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://m.media-amazon.com/images/I/51XDJd9omJL._AC_.jpg" />
    )
  }
}

export default Movie; // app.js로 이 컴포넌트를 export한다는 의미