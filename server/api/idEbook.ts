import { getQuery } from "h3";
import { H3Event } from "h3";
import { googleApiURL } from "../constant";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { id } = getQuery(event);

    const response: object = await $fetch(`${googleApiURL}/${id}`);

    if (response) {
      return {
        statusCode: 200,
        data: response,
      };
    } else {
      return { statusCode: 404 };
    }
  } catch {
    return { statusCode: 500 };
  }
});
