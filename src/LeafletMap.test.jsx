import React from 'react';
import ReactDOM from 'react-dom';
import LeafletMap from './LeafletMap.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LeafletMap />, div);
});
