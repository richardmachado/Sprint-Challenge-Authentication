const request = require("supertest");
const server = require("../api/server.js");

describe("register", () => {

  it("should return json", () => {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "richardm", password: "pass" })
      .then(res => {
        expect(res.type).toBe("application/json");
      });
  });
});

describe("login", () => {
  it("should return an array", () => {
    return request(server)
      .get("/api/auth/login")
      .then(res => {
        expect(Array.isArray([res.body])).toBe(true);
      });
  });
});