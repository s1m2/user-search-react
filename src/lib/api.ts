const BASE_URL = 'https://dummyjson.com/users';

export const getAllUsers = async (signal: AbortSignal) => {
  try {
    const response =  await fetch(`${BASE_URL}`, { signal });
    const data =  await response.json();
    return data.users;
  } catch (error: unknown) {
    throw new Error (error as string);
  }
};