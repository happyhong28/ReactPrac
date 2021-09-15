// dsgsdfhgfhfgshgfshsfgh

import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //Movie.js에서 export했으니까 여기서 import해서 사용!


// 데이터는 메인 컴포넌트가 모두 갖고 있다.

class App extends Component {

  state = {
    greeting: "Hello!",

    movies: [
      {
        title: "Matrix",
        poster: "https://cdn.europosters.eu/image/1300/posters/matrix-hackers-i104636.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://img.fruugo.com/product/6/12/14264126_max.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://i.pinimg.com/originals/f0/cd/db/f0cddb397d73979f09921485227b5879.jpg"
      },
      {
        title: "Star Wars",
        poster: "https://starwarsblog.starwars.com/wp-content/uploads/2017/12/the-last-jedi-dolby-poster.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "Trainspotting",
            poster: "https://starwarsblog.starwars.com/wp-content/uploads/2017/12/the-last-jedi-dolby-poster.jpg"

          }
        ]
      })
    }, 2000)
  }

  // 모든 컴포넌트는 render를 가진다.
  render() {
    return (
      <div className="App">
        {/* 
          처음에는 Hello 라는 문자열을 출력하고,
          5초가 지나면, Hello again이라는 문자열로 바뀌게 한다.
          state를 바꿀때는 setState를 사용해야하고,
          바뀔때마다 render가 작동한다.        
        */}
        {
          /* <Movie title={movieTitles[0]} poster={movieImages[0]} />
          <Movie title={movieTitles[1]} poster={movieImages[1]} />
          <Movie title={movieTitles[2]} poster={movieImages[2]} />
          <Movie title={movieTitles[3]} poster={movieImages[3]} /> */
        }
        {/* 
        - Movie라는 컴포넌트를 불러오는 형태 
        - 영화의 제목을 children component인 movie 컴포넌트에 보낸다!
        - 위의 4줄은 아래 map을 활용한 코드와 동일한 기능을 수행한다.
        */
        }

        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
        {/* 
        - movies 라는 배열을 가져다가 mapping해서
        - movies 배열 안의 요소를 활용해서 movie라는 새로운 배열을 만드는 개념
        - jquery할때 배운 rendering의 개념과 유사한 것 같다.   
        - 언제나 return은 필수!     
        */}
      </div>
    );
  }
}

export default App; // app.js로 이 컴포넌트를 export한다는 의미