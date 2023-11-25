// import {HttpError} from './errors.js';

// export async function sendDataRequest(data) {
//   const response = await fetch('https://dummy-site.dev/posts', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   });

//   const responseData = await response.json();

//   if (!response.ok) {
//     throw new HttpError(response.status, 'Sending the request failed.', responseData);
//   }

//   return responseData;
// }

import { it, expect, vi } from "vitest";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "testData" };
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };

    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = { key: "test" };
  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

/* NOTES *************************************************

In this example project, the global fetch() API / function is used.

You can, of course, also use third-party libraries in frontend JavaScript projects though. For example, the axios library is a very popular library for sending HTTP requests from the frontend.

In case you're working with such a library, instead of a global value, you can mock that library as you learned in the previous section (i.e., use vi.mock('axios'), provide a __mocks__/axios.js file if necessary etc.).

*************************************************
*/ 