"use server";
import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";
async function createSession(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }

  const { account } = await createAdminClient();
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log("Session created successfully:", session);
    cookies().set("appwrite_session", session.secret, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 60 * 60 * 1000),
      path: "/",
    });
    return { success: true };
  } catch (error) {
    console.error("Error creating session:", error);
    return { error: "Failed to create session. Please check your credentials." };
  }

}

export default createSession;
