'use server';

async function createSession(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { error: "Email and password are required." };
  }



  // If successful:
  return { success: true };
}

export default createSession;
