import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Search from '../components/Search'
import { MemoryRouter } from "react-router-dom";
import searchMock from './mocks/searchMock'

const { results } = searchMock();


jest.mock('node-fetch')

jest.mock('../environment/environment', () => ({
  search: 'http://example.com'
}));

import fetchMock from 'node-fetch';


describe('Should return Search component.', () => {
  it('should return "Do your movie search"', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ results: results }),
    });
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    )

    const msgTest = screen.getByText(/Do your movie search/);
    expect(msgTest).toBeInTheDocument()

    const searchButton = screen.getByText('Search');
    expect(searchButton).toBeInTheDocument();

    const input = screen.getByPlaceholderText('search');
    expect(input).toBeInTheDocument();


    fireEvent.change(input, { target: { value: 'batman' } });

    fireEvent.click(searchButton);

    await waitFor(() => {
      const batman = screen.getAllByText('Batman');
      expect(batman[0]).toBeInTheDocument();

      const resetButton = screen.getByText('Reset');
      expect(resetButton).toBeInTheDocument();

      fireEvent.click(resetButton);
    })

  });

})