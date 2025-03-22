import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = async ({ error, event }) => {
  const errorId = crypto.randomUUID();
  
  console.error('Client error:', {
    id: errorId,
    error,
    path: event.url.pathname,
    timestamp: new Date().toISOString()
  });

  return {
    message: 'An unexpected error occurred.',
    errorId
  };
};