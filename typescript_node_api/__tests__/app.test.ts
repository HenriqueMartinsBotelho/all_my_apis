import request from "supertest";

import app from "../src/app";

describe("Test app.ts", () => {
  test("Get response is correct", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Welcome!!!");
  });
});

describe("POST /clientes", () => {
  it("deve criar um novo cliente", async () => {
    const novoCliente = {
      nome: "Teste Cliente",
      email: "teste@cliente.com",
      telefone: "123456789",
      coordenada_x: 10,
      coordenada_y: 20,
    };

    const response = await request(app).post("/clientes").send(novoCliente);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
  });
});
