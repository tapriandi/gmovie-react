import { render } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import FilterMovie from '../FilterMovie';

test('renders filter-movie component', () => {
  renderWithProviders(<FilterMovie />);
});
