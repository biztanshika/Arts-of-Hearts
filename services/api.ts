import { ApiResponse } from '../types/api';

const API_URL = '/api/events';

export async function fetchEventData(): Promise<ApiResponse> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch event data');
  }
  return response.json();
}