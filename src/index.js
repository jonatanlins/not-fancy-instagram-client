import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Router from './Router';

function App() {
  return <Router />;
}

ReactDOM.render(<App />, document.getElementById('root'));
