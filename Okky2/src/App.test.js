import { render, screen } from '@testing-library/react';
import App from './App';

import { useWindowDimensions } from "react-native";
import React, { Component } from "react";
import './App.css';	

class App extends Component {
  render() {
    return <div id="App"></div>;
  




const width = useWindowDimensions().width;
const height = useWindowDimensions().height;



test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})}};
