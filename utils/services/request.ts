import type { ApiResponse } from "./type";

export async function getEbooks(
  type?: string,
  query?: string,
  limit?: number
): Promise<ApiResponse | undefined> {
  try {
    let request = "/api/ebooks";
    if (query && type) {
      request += `?q=${type}:${query}`;
    }

    if (limit && query && type) {
      request += `&maxResults=${limit}`;
    } else if (limit) {
      request += `?maxResults=${limit}`;
    }
    console.info(request);
    return await $fetch(request);
  } catch (error) {
    console.info(error);
  }
}
