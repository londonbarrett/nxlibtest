import { render } from '@testing-library/react';

import Keinescheisse from './keinescheisse';

describe('Keinescheisse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Keinescheisse />);
    expect(baseElement).toBeTruthy();
  });
});
