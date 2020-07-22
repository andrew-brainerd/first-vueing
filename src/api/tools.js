import axios from 'axios';

export const basicJsonHeader = { 'Content-Type': 'application/json' };

export const client = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  headers: basicJsonHeader
});
