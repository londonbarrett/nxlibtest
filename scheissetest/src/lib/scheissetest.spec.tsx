import { render } from '@testing-library/react';

import Scheissetest from './scheissetest';

describe('Scheissetest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Scheissetest />);
    expect(baseElement).toBeTruthy();
  });
});
