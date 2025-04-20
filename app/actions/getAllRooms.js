'use server';

import { createAdminClient } from '@/config/appwrite';

async function getAllRooms() {
  try {
    const { databases } = await createAdminClient();

    const { documents: rooms } = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_DATABASE,
      process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ROOMS
    );

    return rooms;
  } catch (error) {
    console.log('Failed to get rooms', error);
    return null;
  }
}

export default getAllRooms;
