const baseUrl = 'http://swapi.co/api/';

export const http = async <T>(url?: string): Promise<{ data: T }> => {
  try {
    const response = await window.fetch(baseUrl + url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    throw error; /* <-- rethrow the error so consumer can still catch it */
  }
};
