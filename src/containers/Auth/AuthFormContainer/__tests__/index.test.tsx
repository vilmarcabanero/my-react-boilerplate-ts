import * as React from 'react';
import { render } from '@testing-library/react';

import { AuthFormContainer } from '..';

describe('<AuthFormContainer  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<AuthFormContainer />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
