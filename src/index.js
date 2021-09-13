import React from 'react'; //react는 UI 라이브러리
import ReactDOM from 'react-dom'; //reactDOM은 리액트를 웹에 render하는걸 도와주는 모델
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// ReactDOM.render(<App />,document.getElementById('root'));
// ReactDOM이 render한다. 무엇을? app을!
// 여기서 app을 App.js을 의미한다...
// 그 컴포넌트, 즉 App를 render해야하는데... 어디에? id가 root인 곳에...
// 이 root는 index.html에 존재한다.
// 결국 이것은 한개의 컴포넌트를 render하고 있는 것이다... 그 컴포넌트의 이름이 app이고...
// 이 app 컴포넌트 안에 여러 개의 컴포넌트를 만들 수 있음.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


//정리
//1. reactDOM은 1개의 컴포너트를 render
//2. 그리고 그 document 안에는 root라는 id를 가진 요소가 있고,
//3. 그 요소는 index.html파일에 존재한다.
 


