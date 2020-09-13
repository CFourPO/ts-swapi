const baseUrl = 'https://swapi.dev/api/';

export const http = async <T>(
  url?: string,
  configOptions: IConfigOptions = DEFAULT_CONFIG_OPTIONS,
): Promise<{ data: T }> => {
  const config = { DEFAULT_CONFIG_OPTIONS, ...configOptions };

  url = !config.prefixBaseUrl ? url : baseUrl + url;
  try {
    if (!url) {
      throw new Error('url must not be empty');
    }
    const response = await window.fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return { data };
  } catch (error) {
    throw error; /* <-- rethrow the error so consumer can still catch it */
  }
};

const DEFAULT_CONFIG_OPTIONS = {
  prefixBaseUrl: true,
};

export interface IConfigOptions {
  prefixBaseUrl: boolean;
}
