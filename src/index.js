import React, { StrictMode } from 'react'; 
import ReactDOM from 'react-dom'; 
import Counter from './components/Counter';

ReactDOM.render( 
  <StrictMode> 
    <Counter /> 
  </StrictMode>, 
  document.querySelector('#root'), 
);