import fetch from 'cross-fetch';

import { urls } from '../environment/environment';

import { search } from '../environment/environment';



export const fetchMoviesTop = async () => {
  const response = await fetch(urls)
  try {
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log('Error parsing JSON:', error);
    return null; 
  }
}

export const fetchMoviesSearch = async (query: string) => {
  const response = await fetch(`${search}${query}`);
  try {
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.log('Error parsing JSON:', error);
    return null; 
  }
}