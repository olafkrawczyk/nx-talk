import { render } from '@testing-library/react';

import Responses from './responses';

describe('Responses', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Responses />);
    expect(baseElement).toBeTruthy();
  });
});
