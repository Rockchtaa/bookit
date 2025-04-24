'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function destroySession() {
  // Use cookies() directly similar to your working createSession function
  const sessionCookie = cookies().get('appwrite-session');

  if (!sessionCookie) {
    return {
      error: 'No session cookie found',
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);

    // Delete current session
    await account.deleteSession('current');

    // Clear session cookie - use cookies() directly here too
    cookies().delete('appwrite-session');

    return {
      success: true,
    };
  } catch (error) {
    return {
      error: 'Error deleting session',
    };
  }
}

export default destroySession;