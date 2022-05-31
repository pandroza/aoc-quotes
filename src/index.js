import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'css-doodle';
//import App from './App';
import reportWebVitals from './reportWebVitals';
function App() {
  return (
    <css-doodle>{`
      :doodle {
        @grid: 2 / 200px;
        grid: 1px;
      }
      background: @pick(red, pink);
    `}</css-doodle>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
