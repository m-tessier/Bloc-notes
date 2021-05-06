import React from 'react';
import ReactDom from 'react-dom';
import 'sass/styles.scss';

const App = () => (
  <div className="App">
    <h1>Bloc-notes</h1>
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));