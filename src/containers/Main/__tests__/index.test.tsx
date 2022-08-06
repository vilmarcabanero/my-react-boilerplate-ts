import * as React from 'react';
import { render } from '@testing-library/react';

import { Main } from '..';

describe('<Main  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Main />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
