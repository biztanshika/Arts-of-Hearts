import { ApiResponse } from '../types/api';

const API_URL = 'https://backend.staging.artstoheartsproject.com/api/users/public/events/101-art-book-landscape-edition-new/selected-artists/?page=1';

export async function fetchEventData(): Promise<ApiResponse> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch event data');
  }
  return response.json();
}