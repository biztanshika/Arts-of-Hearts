import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://backend.staging.artstoheartsproject.com/api/users/public/events/101-art-book-landscape-edition-new/selected-artists/?page=1');
    if (!response.ok) {
      throw new Error('Failed to fetch from backend');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}