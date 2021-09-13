import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //Movie.js에서 export했으니까 여기서 import해서 사용!

const movies = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]

class App extends Component {
  // 모든 컴포넌트는 render를 가진다.
  render() {
    return (
      <div className="App">
        <Movie title={movies[0]}/> 
        <Movie title={movies[1]}/> 
        <Movie title={movies[2]}/> 
        <Movie title={movies[3]}/> 
        {/* 
        - Movie라는 컴포넌트를 불러오는 형태 
        - 영화의 제목을 children component인 movie 컴포넌트에 보낸다!
        */
        }
      </div>
    );
  }
}

export default App; // app.js로 이 컴포넌트를 export한다는 의미