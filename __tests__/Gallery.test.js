import React from 'react';
import renderer from 'react-test-renderer';

import Gallery from '../src/components/Gallery';

describe('Gallery', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Gallery siteTitle="Default Starter" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
