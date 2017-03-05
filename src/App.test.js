import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import PositiveCounter from './PositiveCounter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render 2', () => {
  const component = renderer.create(<PositiveCounter />);
  component.getInstance().increment();
  component.getInstance().increment();
  expect(component.toJSON()).toMatchSnapshot();
});

it('should not go negative', () => {
  const component = renderer.create(<PositiveCounter />);
  component.getInstance().decrement();
  component.getInstance().decrement();
  component.getInstance().decrement();
  component.getInstance().decrement();
  expect(component.toJSON()).toMatchSnapshot();
});
