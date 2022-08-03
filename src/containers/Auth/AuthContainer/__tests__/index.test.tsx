import * as React from 'react';
import { render } from '@testing-library/react';

import { AuthContainer } from '..';

describe('<AuthContainer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AuthContainer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
