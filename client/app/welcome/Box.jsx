import React from 'react';
import ReactOnRails from 'react-on-rails';

const Box = (props) => (
  <div>
    <h1> Saying Hi, from the box component! </h1>
  </div>
);

// This is how react_on_rails can see the Box in the browser.
ReactOnRails.register({ Box });
