import { render } from '@testing-library/react';

import Ohscheisse from './ohscheisse';

describe('Ohscheisse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ohscheisse />);
    expect(baseElement).toBeTruthy();
  });
});
