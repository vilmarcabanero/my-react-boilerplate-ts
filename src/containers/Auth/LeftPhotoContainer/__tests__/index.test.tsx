import * as React from 'react';
import { render } from '@testing-library/react';

import { LeftPhotoContainer } from '..';

describe('<LeftPhotoContainer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LeftPhotoContainer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
