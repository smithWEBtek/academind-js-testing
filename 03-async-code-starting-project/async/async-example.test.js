import { it, expect, doneFn } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value: callback version", (done) => {
  const email = "brad@smithwebtek.com";
  generateToken(email, (err, token) => {
    // *** short version:
    // expect(token).toBeDefined();
    // done();

    // *** version w/ good fail, w/msg output
    try {
      expect(token).toBeDefined();
      //   expect(token).toBe(2)
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value: Promise version", () => {
  const email = "brad@smithwebtek.com";
  // wrap the function which returns a Promise, in expect
  expect(generateTokenPromise(email)).resolves.toBeDefined();
  //   expect(generateTokenPromise(email)).resolves.toBe(2); // fails with helpful msg
});

it("should generate a token value: async/await version", async () => {
  // using async/await, "awaits" the function to run, then the expectation can run
  const email = "brad@smithwebtek.com";  
  const tokenPromise = await generateTokenPromise(email)
  expect(tokenPromise).toBeDefined();
});

it("should return an error if email is blank", (done) => {
  const email = "";
  generateToken(email, (err, token) => {
    try {
      expect(err).toBeDefined();
      expect(err).toBeNull();
      done();
    } catch (err) {
      done(err);
    }
  });
});