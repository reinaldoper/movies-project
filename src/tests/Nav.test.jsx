import Nav from '../components/Nav';
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';

describe('Nav component.', () => {
  it('should return a navigation', async () => {
    const history = createMemoryHistory();
    render(
      <MemoryRouter history={history}>
        <Nav />
      </MemoryRouter>
    )
    const homeButton = screen.getByText('HOME');
    expect(homeButton).toBeTruthy();

    const searchButton = screen.getByText('SEARCH');
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(homeButton);
    await waitFor(() => {
      expect(history.location.pathname).toBe('/');
    });
  });
});