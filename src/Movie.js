import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
vsddf
class Movie extends Component {

 //해당 props에 원하는 값만 출력하도록 설정
 //isRequired가 있으면 필수값이라는 의미
 //데이터가 없으면 에러메세지를 띄워준다.
 static propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}


  //컴포넌트는 항상 render가 필수!
  render() {
    // console.log(this.props);
    return (
      <div>
        <MoviePoster poster={this.props.poster}/> 
        {/* 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식 */}

        <h1>{this.props.title}</h1>
        {/* movie[0],[1]...을 순서대로 적용시킨다. */}
      </div>
    );
  }
}

class MoviePoster extends Component {

  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
      <img src={this.props.poster} />
    )
  }
}

export default Movie; // app.js로 이 컴포넌트를 export한다는 의미