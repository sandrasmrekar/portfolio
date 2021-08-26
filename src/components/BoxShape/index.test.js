import React from 'react';
import renderer from 'react-test-renderer';
import BoxShape from '.';

test('check the right rendering', () => {
    const tree = renderer.create(<BoxShape/>).toJSON();
    expect(tree).toMatchSnapshot();
})

