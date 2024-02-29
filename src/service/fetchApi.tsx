import fetch from 'cross-fetch';

import { urls } from '../environment/environment';



export const fetchMoviesTop = async () => {
  const response = await fetch(urls)
  const movies = response.json()
  return movies
}