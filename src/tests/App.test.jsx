import { render, screen } from "@testing-library/react";
import App from '../components/App'
import { MemoryRouter } from "react-router-dom";


jest.mock('node-fetch')

jest.mock('../environment/environment', () => ({
  urls: 'http://example.com'
}));

import fetchMock from 'node-fetch';


describe('Should return list movies', () => {
  it('should return Loading', () => {
    fetchMock.mockResolvedValueOnce({
      json: async () => ({ results: [] }),
    });
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const msgLoading = screen.getByText(/Loading.../);
    expect(msgLoading).toBeInTheDocument()
  });

})