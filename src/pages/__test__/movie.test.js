import { render } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import Movie from '../Movie';

test('renders detail-movie-page', () => {
  renderWithProviders(<Movie />);
});
