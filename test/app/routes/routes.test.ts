import request from "supertest";

import app from "../../../app/app";

test("Hello World Controller", async (): Promise<void> => {
  const response = await request(app).get("/");

  expect(JSON.parse(response.text)).toEqual({ message: "Hello World" });
});
