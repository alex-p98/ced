import { NextResponse } from 'next/server';

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

export async function GET(request: Request) {
  if (!PEXELS_API_KEY) {
    return NextResponse.json({ error: 'Pexels API key not configured' }, { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const ids = searchParams.get('ids');
  const query = searchParams.get('query') || 'ice hockey player,hockey rink';

  try {
    if (ids) {
      // Fetch specific images by IDs
      const idArray = ids.split(',');
      const photoPromises = idArray.map(id =>
        fetch(`${BASE_URL}/photos/${id}`, {
          headers: {
            'Authorization': PEXELS_API_KEY
          }
        }).then(res => res.json())
      );

      const photos = await Promise.all(photoPromises);
      console.log('Pexels API raw response:', { photos });

      // Transform the response to match the expected format
      const transformedPhotos = photos.map(photo => ({
        src: {
          original: photo.src.original,
          large2x: photo.src.large2x,
          large: photo.src.large
        },
        alt: photo.alt || photo.photographer || 'Hockey image',
        photographer: photo.photographer
      }));

      return NextResponse.json({ photos: transformedPhotos });
    } else {
      // Default search by query
      const response = await fetch(`${BASE_URL}/search?query=${query}&per_page=2&orientation=landscape&size=large`, {
        headers: {
          'Authorization': PEXELS_API_KEY
        }
      });

      if (!response.ok) {
        throw new Error(`Pexels API responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Pexels API raw response:', data);

      if (!data.photos || !Array.isArray(data.photos)) {
        throw new Error('Invalid response format from Pexels API');
      }

      const transformedPhotos = data.photos.map(photo => ({
        src: {
          original: photo.src.original,
          large2x: photo.src.large2x,
          large: photo.src.large
        },
        alt: photo.alt || photo.photographer || 'Hockey image',
        photographer: photo.photographer
      }));

      return NextResponse.json({ photos: transformedPhotos });
    }
  } catch (error) {
    console.error('Pexels API error:', error);
    return NextResponse.json({ 
      error: 'Failed to fetch images',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
} 