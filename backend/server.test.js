const request = require("supertest");
const app = require("./server");

let server;

beforeAll(() => {
  server = app.listen(4000); // start on test port
});

afterAll((done) => {
  server.close(done); 
});

describe("Backend smoke test", () => {
  it("GET / should return 200", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(201);
  });
});
