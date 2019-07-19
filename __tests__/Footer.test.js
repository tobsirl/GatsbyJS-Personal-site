import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../src/components/Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Footer siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
