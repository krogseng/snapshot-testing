import React from 'react';
import ReactDom from 'react-dom';
import PositiveCounter from './PositiveCounter';
import renderer from 'react-test-renderer';

it('should render 0', () => {
    const tree = renderer.create(<PositiveCounter />).toJSON();
    expect(tree).toMatchSnapshot();
});