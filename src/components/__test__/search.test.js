import { render } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Search from '../Search';

test('renders search component', () => {
  renderWithProviders(<Search />);
});
