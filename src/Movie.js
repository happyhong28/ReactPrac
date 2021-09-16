import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import './Movie.css';

// class Movie extends Component {

//  //해당 props에 원하는 값만 출력하도록 설정
//  //isRequired가 있으면 필수값이라는 의미
//  //데이터가 없으면 에러메세지를 띄워준다.
//  static propTypes = {
//   title: PropTypes.string.isRequired,
//   poster: PropTypes.string.isRequired
// }


//   //컴포넌트는 항상 render가 필수!
//   render() {
//     // console.log(this.props);
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster}/> 
//         {/* 큰 컴포넌트 안에 작은 컴포넌트를 집어넣는 방식 */}

//         <h1>{this.props.title}</h1>
//         {/* movie[0],[1]...을 순서대로 적용시킨다. */}
//       </div>
//     );
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        {/* 클래스가 아니니까 앞에 this.props를 적어줄 필요가 없다 */}
        <MoviePoster poster={poster} alt={title}/>
      </div>

      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genres, index) => <MovieGenres genres={genres} key={index} />)}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  )

}

MoviePoster.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired
}


// class MoviePoster extends Component {

//   static propTypes = {
//     poster: PropTypes.string.isRequired
//   }

//   render() {
//     return (
//       <img src={this.props.poster} />
//     )
//   }
// }

//이 functional 컴포넌트는 위의 class 컴포넌트와 완전히 동일한 기능을 수행한다.
function MoviePoster({ poster,alt }) {
  return (
    <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>
  )
}

function MovieGenres({ genres }) {
  return (
    <span className="Movie__Genres" >{genres} </span> //장르끼리 보기 좋게 간격주기!  
  )

}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired

}

MovieGenres.propTypes = {
  genres: PropTypes.string.isRequired

}

export default Movie; // app.js로 이 컴포넌트를 export한다는 의미