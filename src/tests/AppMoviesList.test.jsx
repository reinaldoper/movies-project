import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import App from '../components/App'
import { MemoryRouter } from "react-router-dom";
import moviesMock from './mocks/moviesMock';

import Swal from 'sweetalert2';

const { movies } = moviesMock()

jest.mock('node-fetch')

jest.mock('../environment/environment', () => ({
  urls: 'http://example.com',
}));

import fetchMock from 'node-fetch';


describe('Should return list movies', () => {
  it('should return List movies', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ results: movies }),
    });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => {
      const backDrop = screen.getByText(/Backdrop/);
      expect(backDrop).toBeTruthy();

      const filterButton = screen.getByRole('button', { name: /filter/i })
      expect(filterButton).toBeInTheDocument()
      const resetButton = screen.getByRole('button', { name: /reset/i })
      expect(resetButton).toBeInTheDocument()
      const title = screen.getByText(/The Shawshank Redemption/);
      expect(title).toBeInTheDocument()

      const inputFilter = screen.getByRole('textbox');

      fireEvent.change(inputFilter, { target: { value: 'The' } });

      fireEvent.click(filterButton);

      const titleMovie = screen.getByText(/The Godfather Part II/);
      expect(titleMovie).toBeInTheDocument()
    })
  });

  it('should return error alert', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ results: movies }),
    });

    const mockFire = jest.spyOn(Swal, 'fire');
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => {
      const backDrop = screen.getByText(/Backdrop/);
      expect(backDrop).toBeTruthy();

      const filterButton = screen.getByRole('button', { name: /filter/i })
      expect(filterButton).toBeInTheDocument()
      const resetButton = screen.getByRole('button', { name: /reset/i })
      expect(resetButton).toBeInTheDocument()
      const title = screen.getByText(/The Shawshank Redemption/);
      expect(title).toBeInTheDocument()

      fireEvent.click(filterButton);

      expect(mockFire).toHaveBeenCalledWith('Hey user!', 'Please select a filter term', 'info');

    })
  });

  it('Testing select a filter.', async () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ results: movies }),
    });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    await waitFor(() => {
      
        const selectElement = screen.getByTestId('select');
    
        fireEvent.change(selectElement, { target: { value: 'release_date' } });
    
        const filterButton = screen.getByRole('button', { name: /filter/i })
        expect(filterButton).toBeInTheDocument()

        fireEvent.click(filterButton)
      

    })


    
  });
})