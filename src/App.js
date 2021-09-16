import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'; //Movie.js에서 export했으니까 여기서 import해서 사용!



// 데이터는 메인 컴포넌트가 모두 갖고 있다.

class App extends Component {

  state = {}

  componentDidMount() {

    this._getMovies();

    // 실제 영화 데이터
    //  fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    //  .then(response => response.json()) //fetch의 결과물을 json형태로 변환 (response의 이름은 뭐든지 바꿀수있음! 그냥 변수일뿐!)
    //  .then(json => console.log(json))
    //  .catch(err => console.log(err))
    // console.log(fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating"));
    // 기본적으로 ajax는 비동기이므로 이전 코드가 끝나지 않으면
    // 다음 코드로 넘어가지 않음.   
    // 하지만 이것을 바꿔주는게 promise이다. promise는 동기방식!




    // 실습을 위한 가데이터
    // setTimeout(() => {
    //   this.setState({

    //     movies: [
    //       {
    //         title: "Matrix",
    //         poster: "https://cdn.europosters.eu/image/1300/posters/matrix-hackers-i104636.jpg"
    //       },
    //       {
    //         title: "Full Metal Jacket",
    //         poster: "https://img.fruugo.com/product/6/12/14264126_max.jpg"
    //       },
    //       {
    //         title: "Oldboy",
    //         poster: "https://i.pinimg.com/originals/f0/cd/db/f0cddb397d73979f09921485227b5879.jpg"
    //       },
    //       {
    //         title: "Star Wars",
    //         poster: "https://starwarsblog.starwars.com/wp-content/uploads/2017/12/the-last-jedi-dolby-poster.jpg"
    //       },
    //       {
    //         title: "Trainspotting",
    //         poster: "https://m.media-amazon.com/images/I/51oFj1gwDyL._AC_.jpg"

    //       }
    //     ]

    //     // movies: [
    //     //   ...this.state.movies, 
    //     //   //이 코드가 없으면 리스트에 추가되는게 아니라 대체된다.
    //     //   {
    //     //     title: "Trainspotting",
    //     //     poster: "https://m.media-amazon.com/images/I/51oFj1gwDyL._AC_.jpg"

    //     //   }
    //     // ]
    //   })
    // }, 3000)
  }


  // 영화리스트를 렌더링하는 함수
  // 내가 만든 함수 앞에 _를 붙여서 구분해주는 것이 좋다.
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      // console.log(movie);
      // 이 데이터 안에는 id 값이 있어서 id로 구분했지만, 
      // 없다면 index값을 이용하면 된다. 
      // 하지칸 index를 사용하면 느려지므로 사용 지양할 것
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      genres={movie.genres}
      synopsis={movie.synopsis} 
      key={movie.id} />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    // await의 역할은 callApi()가 끝나기를 기다리는 것
    // 그리고 callApi()의 return값이 무엇이든 간에 movies라는 변수에 저장한다.
    // async를 쓰지않으면 await가 작동X

    this.setState({
      movies // 이 컴포넌트의 setState를 movies로 한다.
    })
    // 그리고 이 setState는 callApi 작업이 끝나기 전까지는 실행X
    // 항상 promise를 반환한다.

  }

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json()) //fetch의 결과물을 json형태로 변환 (response의 이름은 뭐든지 바꿀수있음! 그냥 변수일뿐!)
      .then(json => json.data.movies)
      .catch(err => console.log(err))
    // => 는 allow function으로 모던js 이며 return이라는 뜻이 내재되어있음.

  }

  // 모든 컴포넌트는 render를 가진다.
  render() {
    return (
      <div className={ this.state.movies ? "App" : "App--loading"}> 
      {/* movies가 존재여부에 따라 클래스이름을 다르게 설정*/}
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



        {this.state.movies ? this._renderMovies() : 'Loading'}
        {/* {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })} */}
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




// 동작순서
// 1. Movie.js 에서 MoviePoster, MovieGenres 라는 small 함수형 컴포넌트를 생성
// 2. 각 컴포넌트를 통해 포스터 URL, 장르에 대한 text 값 받아서 html로 출력
// 3. propTypes을 통해 받아오는 값이 string값이 맞는지도 체크
// 4. 그 small 함수형 컴포넌트를 Movie 라는 big 함수형 컴포넌트에서 조각을 붙여서 틀 완성
// 5. App.js로 export
// 6. App.js에서 import
// 7. _getMovies 함수를 호출
// 8. _getMovies는 _callApi가 끝날때까지 기다렸다가 _callApi가 끝나면 그 결과값을 movies에 setState한다.
// 9. 그리고 모든 컴포넌트가 기본적으로 갖는 render()에서 movies에 값이 있는지 체크를 한다.
// 10. 값이 있을때만 _renderMovies 함수를 실행하고, 없다면 loading 이라는 문자열 출력
// 11. _renderMovies 함수가 실행되면, import했던 Movie라는 big 함수형 컴포넌트에 적절한 파라미터값을 넣고 데이터를 mapping해서 출력한다. 
