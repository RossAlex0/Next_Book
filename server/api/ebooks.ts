import { getQuery } from "h3";
import { H3Event } from "h3";
import { googleApiURL } from "../constant";
import { googleApiResponse } from "../type";

export default defineEventHandler(async (event: H3Event) => {
  try {
    const { type, query, limit } = getQuery(event);

    const randomSubject = () => {
      const subject = [
        "fiction",
        "mystery",
        "science",
        "history",
        "romance",
        "adventure",
        "biography",
        "technology",
        "art",
        "psychology",
        "travel",
        "business",
        "self-help",
        "health",
        "religion",
        "literature",
        "horror",
        "philosophy",
      ];

      const randomIndex = Math.floor(Math.random() * subject.length);
      return subject[randomIndex];
    };

    const maxResults = limit || "20";

    let request;

    if (!type || !query) {
      request = `${googleApiURL}?q=subject:${randomSubject()}&subject:${randomSubject()}&subject:${randomSubject()}&maxResults=${maxResults}`;
    } else {
      request = `${googleApiURL}?q=${type}:${query}&maxResults=${maxResults}`;
    }

    const response: googleApiResponse = await $fetch(`${request}`);

    if (response.items) {
      return {
        statusCode: 200,
        nbItems: response.totalItems,
        data: response.items,
      };
    } else {
      return { statusCode: 404, nbItems: response.totalItems };
    }
  } catch {
    return { statusCode: 500 };
  }
});
