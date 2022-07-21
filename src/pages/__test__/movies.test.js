import { render } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Movies from '../Movies';

test('renders Movies page', () => {
  renderWithProviders(<Movies />);
});
