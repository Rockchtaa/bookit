"use server";

import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function checkAuth() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('appwrite_session');

    if (!sessionCookie) {
        return {
            error: 'No session cookie found',
        };
    }

    try {
        const { account } = await createSessionClient(sessionCookie.value);
        const user = await account.get();

        return {
            success: true,
            user: {
                id: user.$id,
                name: user.name,
                email: user.email,
            },
        };
    } catch (error) {
        console.error("Error checking auth:", error);
        return {
            error: 'Error checking auth',
        };
    }
}