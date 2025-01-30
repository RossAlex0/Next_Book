import type { ApiResponse } from "./type";

export async function getEbooks(
  type?: string,
  query?: string,
  limit?: number
): Promise<ApiResponse | undefined> {
  try {
    let request = "/api/ebooks";
    if (query && type) {
      request += `?type=${type}&query=${query}`;
    }

    if (limit && query && type) {
      request += `&limit=${limit}`;
    } else if (limit) {
      request += `?limit=${limit}`;
    }
    return await $fetch(request);
  } catch (error) {
    console.info(error);
  }
}
